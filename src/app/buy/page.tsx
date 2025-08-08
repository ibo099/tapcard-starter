"use client";

/**
 * Buy page
 *
 * Displays pricing and benefits of purchasing a physical TapCard. At
 * the moment this is a placeholder page without real payment
 * integration. In a future iteration, integrating with Stripe or
 * another payment provider will turn this into a fully functional
 * checkout flow.
 */
export default function Buy() {
  const features = [
    {
      title: "Premium NFC Card",
      description:
        "High quality physical card with NFC chip to instantly share your profile.",
    },
    {
      title: "Customisable Profile",
      description:
        "Edit your card colours, links and bio any time from your dashboard.",
    },
    {
      title: "Analytics",
      description:
        "Track how many people view your card and which links are clicked (coming soon).",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center p-8 gap-8">
      <h1 className="text-4xl font-bold">Purchase TapCard</h1>
      <p className="max-w-xl text-center text-gray-600 dark:text-gray-400">
        Secure your own TapCard and start sharing your digital identity with a
        simple tap. For a one‑time fee you get lifetime access to the
        platform and all upcoming features.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col gap-2"
          >
            <h3 className="font-semibold text-lg">{feat.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-2xl font-bold mb-2">€19.99</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          One time purchase, lifetime access
        </p>
        <button
          className="px-6 py-3 rounded-full text-white font-medium"
          style={{ backgroundColor: "#6E35E9" }}
          onClick={() => alert("Payment integration coming soon!")}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}