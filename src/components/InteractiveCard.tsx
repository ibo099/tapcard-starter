"use client";

import React, { useRef, useEffect } from "react";

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

  // Update the card transform based off of the pointer position on desktop
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    // Skip tilt on small screens (we will handle scroll flip instead)
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const rect = card.getBoundingClientRect();
    // Center offsets
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    // Limit the rotation to ±10 degrees
    const rotateX = (-offsetY / rect.height) * 10;
    const rotateY = (offsetX / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  // Reset the transform when the pointer leaves (desktop)
  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    // Only reset on desktop; mobile resets via scroll observer
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  // Flip the card on scroll for mobile devices
  useEffect(() => {
    if (typeof window === "undefined") return;
    const card = cardRef.current;
    if (!card) return;
    const handleScroll = () => {
      // Only apply the flip animation on small screens
      if (window.innerWidth >= 768) return;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const ratio = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
      const rotation = ratio * 180;
      card.style.transform = `rotateY(${rotation}deg)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}