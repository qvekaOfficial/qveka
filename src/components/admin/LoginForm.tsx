"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FirebaseError } from "firebase/app";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ArrowRight, Check, Lock } from "lucide-react";

import { getFirebaseAuth } from "@/lib/firebase-client";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-4 py-3.5 bg-background border border-foreground/10 rounded-xl font-sans text-sm text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:bg-white focus:border-blue-400 focus:shadow-lg focus:shadow-blue-600/10";

function messageFor(error: unknown) {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Incorrect email or password.";
      case "auth/invalid-email":
        return "That doesn't look like a valid email.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Check your connection and try again.";
      default:
        return "Could not sign in. Please try again.";
    }
  }
  return error instanceof Error ? error.message : "Could not sign in.";
}

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setIsLoading(true);

    try {
      const auth = await getFirebaseAuth();
      const credential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      const idToken = await credential.user.getIdToken();

      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setError(body.error ?? "Could not sign in.");
        setIsLoading(false);
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(messageFor(err));
      setIsLoading(false);
    }
  };

  const handleReset = async () => {
    setError(null);
    setNotice(null);

    const target = email.trim();
    if (!target) {
      setError("Enter your email address first, then tap Forgot password.");
      return;
    }

    try {
      const auth = await getFirebaseAuth();
      await sendPasswordResetEmail(auth, target);
    } catch (err) {
      // Don't reveal whether the address exists.
      if (err instanceof FirebaseError && err.code === "auth/invalid-email") {
        setError("That doesn't look like a valid email.");
        return;
      }
      console.error("[login] Password reset failed:", err);
    }

    setNotice(`If ${target} is the admin account, a reset link is on its way.`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-900/5 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600/90">
              Qveka Admin
            </span>
          </div>

          <h1 className="font-syne text-3xl font-extrabold tracking-tight text-foreground">
            Sign in
          </h1>
          <div className="h-0.5 w-12 bg-blue-600 rounded-full mt-4 mb-8" />

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block font-sans text-sm font-semibold text-foreground mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-sans text-sm font-semibold text-foreground mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-mono" role="alert">
                {error}
              </p>
            )}

            {notice && (
              <p className="flex items-start gap-2 text-xs font-mono text-blue-700">
                <Check className="w-3.5 h-3.5 shrink-0 mt-px" />
                {notice}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-4 rounded-2xl",
                "font-syne font-bold text-lg tracking-tight shadow-xl shadow-blue-900/20",
                "hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300",
                "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                "flex items-center justify-center gap-2",
              )}
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <button
            type="button"
            onClick={handleReset}
            className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-blue-600 transition-colors"
          >
            Forgot password?
          </button>
        </div>
      </motion.div>
    </main>
  );
}
