"use client";

import { useState } from "react";
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
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [color, setColor] = useState("#6E35E9");

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
            placeholder="John Doe"
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
            placeholder="What do you do?"
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
      </div>
      {/* Preview column */}
      <div className="flex-1 flex items-center justify-center">
        <InteractiveCard>
          <CardPreview name={name} bio={bio} primaryColor={color} />
        </InteractiveCard>
      </div>
    </div>
  );
}