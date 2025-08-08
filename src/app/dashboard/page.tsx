"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InteractiveCard from "@/components/InteractiveCard";
import CardPreview from "@/components/CardPreview";

/**
 * Dashboard page
 *
 * Provides a simple editor for users to customise the name, bio and
 * primary colour of their TapCard. A live preview updates in real
 * time as the user modifies the fields. This page is client‑side
 * rendered to enable interactivity without a backend.
 */
export default function Dashboard() {
  const router = useRouter();
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("");
  const [color, setColor] = useState("#6E35E9");
  const [links, setLinks] = useState<{ title: string; url: string }[]>([]);
  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");

  // Redirect to signin if not logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("loggedIn");
      if (loggedIn !== "true") {
        router.replace("/signin");
      }
    }
  }, [router]);

  function addLink() {
    if (!newLinkTitle && !newLinkUrl) return;
    setLinks((prev) => [
      ...prev,
      { title: newLinkTitle.trim() || newLinkUrl.trim(), url: newLinkUrl.trim() },
    ]);
    setNewLinkTitle("");
    setNewLinkUrl("");
  }

  function removeLink(index: number) {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-8 gap-10">
      {/* Editor column */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Edit your card</h1>
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="bio">
            Bio
          </label>
          <input
            id="bio"
            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Your profession or tagline"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="color">
            Accent Colour
          </label>
          <input
            id="color"
            type="color"
            className="border border-gray-300 dark:border-gray-600 rounded w-12 h-12 p-0"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        {/* Links editor */}
        <div className="mt-4 flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Links</h2>
          {links.map((link, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded px-2 py-1"
            >
              <div className="flex-1">
                <p className="font-medium">{link.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {link.url}
                </p>
              </div>
              <button
                onClick={() => removeLink(idx)}
                className="text-red-500 text-sm px-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="text"
              placeholder="Link title (e.g. Website)"
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
              value={newLinkTitle}
              onChange={(e) => setNewLinkTitle(e.target.value)}
            />
            <input
              type="url"
              placeholder="https://example.com"
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
              value={newLinkUrl}
              onChange={(e) => setNewLinkUrl(e.target.value)}
            />
            <button
              type="button"
              onClick={addLink}
              className="self-start px-4 py-2 rounded-full text-white text-sm"
              style={{ backgroundColor: "#6E35E9" }}
            >
              Add Link
            </button>
          </div>
        </div>
      </div>
      {/* Preview column */}
      <div className="flex-1 flex items-start justify-center">
        <InteractiveCard>
          <CardPreview
            name={name}
            bio={bio}
            primaryColor={color}
            links={links}
          />
        </InteractiveCard>
      </div>
    </div>
  );
}