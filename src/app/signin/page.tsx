"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * SignIn page
 *
 * A very simple authentication page that stores a flag in
 * localStorage to simulate a logged‑in user. In a real
 * application this would be replaced with proper authentication
 * (e.g. Supabase, NextAuth or custom backend). If the user is
 * already logged in, they are redirected straight to the
 * dashboard. Otherwise they can enter any email and password to
 * "log in".
 */
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("loggedIn");
      if (loggedIn === "true") {
        router.replace("/dashboard");
      }
    }
  }, [router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In a real app you'd verify credentials here
    if (typeof window !== "undefined") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email);
    }
    router.replace("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="rounded px-4 py-2 text-white font-medium"
          style={{ backgroundColor: "#6E35E9" }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}