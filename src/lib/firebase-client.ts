"use client";

import { getApp, getApps, initializeApp } from "firebase/app";
import {
  type Auth,
  getAuth,
  inMemoryPersistence,
  setPersistence,
} from "firebase/auth";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let cached: Promise<Auth> | null = null;

/**
 * Lazily initialised, so nothing Firebase runs at module scope. That keeps the
 * login page prerenderable and stops the build failing when the public config
 * is absent (a preview deploy without env vars, for example).
 *
 * Persistence is in-memory on purpose: the httpOnly session cookie is the
 * single source of truth for being logged in, and a second, longer-lived
 * session in browser storage could drift out of sync with it.
 */
export function getFirebaseAuth() {
  cached ??= (async () => {
    const app = getApps().length ? getApp() : initializeApp(config);
    const auth = getAuth(app);
    await setPersistence(auth, inMemoryPersistence);
    return auth;
  })();

  return cached;
}
