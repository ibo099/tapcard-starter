"use client";

import { useState, useEffect } from "react";
import InteractiveCard from "@/components/InteractiveCard";
import CardPreview from "@/components/CardPreview";

/**
 * Preview page
 *
 * Displays a read‑only version of the user's card. It reads
 * information from localStorage (set in the dashboard) and renders
 * the CardPreview component inside the InteractiveCard wrapper. If
 * no data is available it falls back to placeholder values. This
 * page allows users to see exactly how their card will appear when
 * shared.
 */
export default function PreviewPage() {
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [color, setColor] = useState<string>("#6E35E9");
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [links, setLinks] = useState<{ title: string; url: string }[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedName = localStorage.getItem("tapcard_name");
      const storedBio = localStorage.getItem("tapcard_bio");
      const storedColor = localStorage.getItem("tapcard_color");
      const storedPhone = localStorage.getItem("tapcard_phone");
      const storedEmail = localStorage.getItem("tapcard_email");
      const storedLinks = localStorage.getItem("tapcard_links");
      if (storedName) setName(storedName);
      if (storedBio) setBio(storedBio);
      if (storedColor) setColor(storedColor);
      if (storedPhone) setPhone(storedPhone);
      if (storedEmail) setEmail(storedEmail);
      if (storedLinks) {
        try {
          const parsed = JSON.parse(storedLinks);
          if (Array.isArray(parsed)) setLinks(parsed);
        } catch {
          // ignore
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Your Card Preview</h1>
      <InteractiveCard>
        <CardPreview
          name={name || "Name Last name"}
          bio={bio || "Bio"}
          primaryColor={color || "#6E35E9"}
          phone={phone}
          email={email}
          links={links}
        />
      </InteractiveCard>
      <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm max-w-md text-center">
        This is how others will see your card. Share this page’s URL to let
        people connect with you instantly.
      </p>
    </div>
  );
}