// export default function FeaturesPage() {
//   return (
//     <main className="min-h-screen px-6 py-10 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-primary">Features Overview</h1>
//       <p className="text-muted-foreground text-lg mb-4">
//         Explore the four key pillars of SafeCart+: ShopSync, NeuroCart, ShelfTalk, and SafeCart AI.
//       {/* </p> */}

//       <ul className="space-y-4 mt-6">
//         <li className="p-4 bg-card rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold text-chart-1">ShopSync</h2>
//           <p>Emotion-aware AI that adapts UI based on mood and stress levels.</p>
//         </li>
//         <li className="p-4 bg-card rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold text-chart-2">NeuroCart</h2>
//           <p>Low-stimulation mode and customization for neurodivergent shoppers.</p>
//         </li>
//         <li className="p-4 bg-card rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold text-chart-3">ShelfTalk</h2>
//           <p>Live captions, sign-language avatars, and visual alerts.</p>
//         </li>
//         <li className="p-4 bg-card rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold text-chart-4">SafeCart AI</h2>
//           <p>Privacy-focused GenAI and real-time threat detection while shopping.</p>
//         </li>
//       </ul>
//     </main>
//   );
// }
// src/app/features/page.tsx
'use client';
import { useUserMode } from '@/context/UserModeContext';
import { useCartMemory } from '@/context/CartContext';
import Link from 'next/link';

export default function FeaturesPage() {
  const { emotionMode, lowStimMode, signMode, touchVoiceMode } = useUserMode();
  const { memory } = useCartMemory();

  return (
    <main className="min-h-screen px-4 pt-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">🚀 SmartCart+ Features</h1>

      <section className="grid md:grid-cols-2 gap-6 text-left">
        {/* Feature Card */}
        <FeatureCard
          title="🧠 Emotion Mode"
          active={emotionMode}
          id="shopSync"
          description="Uses AI to detect user emotions and adapt UI — calming layout for stressed users, focus mode for engaged ones."
        />

        <FeatureCard
          title="🧘 Low-Stimulation Mode"
          active={lowStimMode}
          id="neuroCart"
          description="Minimizes visual stimulation by disabling motion, increasing contrast and simplifying layout for neurodivergent users."
        />

        <FeatureCard
          title="🧏 Sign Avatar"
          active={signMode}
          id="shelfTalk"
          description="Displays a looping or context-aware sign-language avatar that communicates key instructions visually."
        />

        <FeatureCard
          title="🖐️ Touch/Voice Mode"
          active={touchVoiceMode}
          id="safeCartAI"
          description="Expands button sizes, enables voice input, and improves layout spacing for easier accessibility."
        />

        <FeatureCard
          title="🔐 Privacy Copilot"
          active={false}
          id="privacy"
          description="Coming soon: Inline privacy alerts and personalized suggestions to help you shop securely."
        />
      </section>

      <div className="mt-10 text-sm text-muted-foreground text-center">
        Built with ❤️ for inclusive, secure, and personalized retail experiences.
        <br />
        <Link href="/" className="underline mt-2 block text-chart-2">← Back to Home</Link>
      </div>
    </main>
  );
}

// Sub-component
function FeatureCard({
  title,
  description,
  active,
  id,
}: {
  title: string;
  description: string;
  active?: boolean;
  id: string;
}) {
  return (
    <div id={id} className="p-6 bg-card border rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-1 text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {active !== undefined && (
        <span
          className={`inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full ${
            active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'
          }`}
        >
          {active ? 'Active Now' : 'Inactive'}
        </span>
      )}
    </div>
  );
}
