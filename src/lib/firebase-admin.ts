import "server-only";

import { type App, cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

let cached: App | null = null;

/**
 * Lazily initialised so that importing this module never throws. If it ran at
 * module scope, `next build` would fail while collecting routes whenever the
 * service-account variables are absent, instead of failing at request time
 * with a message that names the missing variable.
 */
function app() {
  if (cached) return cached;

  cached = getApps().length
    ? getApp()
    : initializeApp({
        credential: cert({
          projectId: requireEnv("FIREBASE_PROJECT_ID"),
          clientEmail: requireEnv("FIREBASE_CLIENT_EMAIL"),
          // Vercel stores the key on one line with literal \n sequences.
          privateKey: requireEnv("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n"),
        }),
      });

  return cached;
}

export const getAdminAuth = () => getAuth(app());
export const getAdminDb = () => getFirestore(app());
