import InteractiveCard from "@/components/InteractiveCard";
import CardPreview from "@/components/CardPreview";

/**
 * Home page
 *
 * Acts as the marketing landing page for TapCard. It introduces the
 * product and displays an interactive preview of a card. Primary call
 * to action drives users to the waitlist and secondary call invites
 * them to try the editor. This page is static and server‑rendered.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center">
      <h1 className="text-4xl font-bold">TapCard</h1>
      <p className="max-w-xl text-gray-600 dark:text-gray-400">
        Build and share your modern digital business card. Customise your
        profile, choose a colour palette and link all of your contact
        options in one place.
      </p>
      <InteractiveCard>
        <CardPreview name="Name Last name" bio="Your bio" primaryColor="#6E35E9" />
      </InteractiveCard>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="/waitlist"
          className="inline-block px-6 py-3 rounded-full text-white font-medium"
          style={{ backgroundColor: "#6E35E9" }}
        >
          Join the waitlist
        </a>
        <a
          href="/dashboard"
          className="inline-block px-6 py-3 rounded-full border font-medium"
          style={{ borderColor: "#6E35E9", color: "#6E35E9" }}
        >
          Live preview
        </a>
      </div>
    </div>
  );
}
