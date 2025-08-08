"use client";

import { useState } from "react";

/**
 * Waitlist page
 *
 * This page allows potential customers to sign up for updates before
 * TapCard officially launches. When a Web3Forms access key is
 * provided via the NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY environment
 * variable, submissions are sent to Web3Forms. Otherwise the form
 * simply displays a thank‑you message and logs the submission in
 * the console for easy local testing.
 */
export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      if (accessKey) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            subject: "TapCard Waitlist",
            message: "A new waitlist signup from TapCard",
          }),
        });
        if (res.ok) {
          setSuccess(true);
        }
      } else {
        // Fallback: log submission to the console for development
        console.log("Waitlist submission", { name, email });
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Join the Waitlist</h1>
      {success ? (
        <p className="text-green-600">Thank you for joining! We will be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="rounded px-4 py-2 text-white"
            style={{ backgroundColor: "#6E35E9" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join"}
          </button>
        </form>
      )}
    </div>
  );
}