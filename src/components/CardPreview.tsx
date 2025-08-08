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
interface LinkItem {
  title: string;
  url: string;
}

export default function CardPreview({
  name,
  bio,
  primaryColor,
  phone,
  email,
  links = [],
}: {
  name: string;
  bio: string;
  primaryColor: string;
  phone?: string;
  email?: string;
  links?: LinkItem[];
}) {
  const accent = primaryColor || "#6E35E9";
  // Build a vCard for the Add to contacts button
  const vcardContent = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${name || ""}`,
    phone ? `TEL;TYPE=CELL:${phone}` : "",
    email ? `EMAIL:${email}` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");
  const vcardDataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(
    vcardContent
  )}`;
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-3xl p-6 shadow-xl w-80 sm:w-96">
      {/* Cover image placeholder */}
      <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl w-full h-32 mb-6" />
      {/* Avatar */}
      <div className="flex justify-center -mt-20 mb-4 relative">
        <div
          className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white"
          style={{ backgroundColor: accent }}
        >
          {/* Placeholder icon: silhouette */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
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
      <div className="text-center mb-4">
        <h2 className="font-semibold text-xl mb-1">
          {name?.trim() || "Name Last name"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {bio?.trim() || "Bio"}
        </p>
      </div>
      {/* Call to action buttons */}
      <div className="flex flex-col gap-2">
        {/* Add to contacts (download vCard) */}
        {(phone || email) && (
          <a
            href={vcardDataUri}
            download="contact.vcf"
            className="block text-center rounded-full px-4 py-2 text-sm font-medium"
            style={{
              border: `1px solid ${accent}`,
              color: accent,
            }}
          >
            Add to contacts
          </a>
        )}
        {/* Call button */}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="block text-center rounded-full px-4 py-2 text-sm font-medium"
            style={{
              border: `1px solid ${accent}`,
              color: accent,
            }}
          >
            Call me
          </a>
        )}
        {/* Email button */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="block text-center rounded-full px-4 py-2 text-sm font-medium"
            style={{
              border: `1px solid ${accent}`,
              color: accent,
            }}
          >
            Email me
          </a>
        )}
        {/* Dynamic links */}
        {links.length > 0 &&
          links.map((link) => (
            <a
              key={link.url}
              href={link.url || "#"}
              className="block text-center rounded-full px-4 py-2 text-sm font-medium truncate"
              style={{
                border: `1px solid ${accent}`,
                color: accent,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title || link.url}
            </a>
          ))}
      </div>
      {/* Footer with tapcard brand */}
      <div className="mt-6 flex justify-center">
        <span className="text-xs text-gray-400">tapcard</span>
      </div>
    </div>
  );
}