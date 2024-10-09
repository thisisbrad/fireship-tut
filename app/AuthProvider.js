"use client";

import { SessionProvider } from "next-auth";

export default function ({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
