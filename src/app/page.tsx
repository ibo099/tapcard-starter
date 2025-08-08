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
    <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-extrabold mb-4 max-w-2xl leading-tight">
        Your modern digital business card
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
        Build and share a beautiful card in minutes. Customise your profile,
        choose your colours and connect all of your contact methods in one place.
      </p>
      <div className="mb-10">
        <InteractiveCard>
          <CardPreview
            name="Name Last name"
            bio="Your bio"
            primaryColor="#6E35E9"
            phone=""
            email=""
            links={[{ title: "Website", url: "#" }]}
          />
        </InteractiveCard>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-2">
        <a
          href="/waitlist"
          className="inline-block px-8 py-3 rounded-full text-white font-semibold"
          style={{ backgroundColor: "#6E35E9" }}
        >
          Join the waitlist
        </a>
        <a
          href="/dashboard"
          className="inline-block px-8 py-3 rounded-full border font-semibold"
          style={{ borderColor: "#6E35E9", color: "#6E35E9" }}
        >
          Try the editor
        </a>
        <a
          href="/buy"
          className="inline-block px-8 py-3 rounded-full border font-semibold"
          style={{ borderColor: "#6E35E9", color: "#6E35E9" }}
        >
          Buy a card
        </a>
      </div>
    </section>
  );
}
