"use client";

import React, { useRef } from "react";

/**
 * InteractiveCard
 *
 * A wrapper component that adds a subtle 3D tilt effect based on
 * pointer movement. When the user moves their mouse over the card
 * the element rotates slightly on the X and Y axes, creating a
 * delightful interactive feel. When the pointer leaves the card
 * the transform resets smoothly back to its neutral state.
 */
export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Update the card transform based off of the pointer position
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    // Center offsets
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    // Limit the rotation to ±10 degrees
    const rotateX = (-offsetY / rect.height) * 10;
    const rotateY = (offsetX / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  // Reset the transform when the pointer leaves
  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // perspective gives the rotation depth and the transition ensures
      // that the card returns smoothly to its neutral state
      style={{ perspective: "1000px" }}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}