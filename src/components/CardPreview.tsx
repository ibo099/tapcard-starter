"use client";

import React from "react";

/**
 * CardPreview
 *
 * A visual representation of a TapCard business card. This
 * component displays a cover area, a circular avatar, the person's
 * name and bio, and leaves space for call‑to‑action buttons.
 *
 * The primaryColor prop drives the accent color for the avatar,
 * giving users the ability to customise the look of their card in
 * real time. If no values are provided, placeholder text is used.
 */
export default function CardPreview({
  name,
  bio,
  primaryColor,
}: {
  name: string;
  bio: string;
  primaryColor: string;
}) {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-3xl p-6 shadow-lg w-80 sm:w-96">
      {/* Cover image placeholder */}
      <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl w-full h-32" />
      {/* Avatar */}
      <div className="flex justify-center -mt-12 mb-4">
        <div
          className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white"
          style={{ backgroundColor: primaryColor || "#6E35E9" }}
        >
          {/* Simple placeholder icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 0112 12.75 3.75 3.75 0 018.25 9 3.75 3.75 0 0112 5.25 3.75 3.75 0 0115.75 9zM4.5 18a7.5 7.5 0 0115 0v.75A2.25 2.25 0 0117.25 21H6.75A2.25 2.25 0 014.5 18.75V18z"
            />
          </svg>
        </div>
      </div>
      {/* Name and bio */}
      <div className="text-center">
        <h2 className="font-semibold text-lg mb-1">
          {name?.trim() || "Name Last name"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {bio?.trim() || "Bio"}
        </p>
      </div>
    </div>
  );
}