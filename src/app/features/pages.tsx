export default function FeaturesPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Features Overview</h1>
      <p className="text-muted-foreground text-lg mb-4">
        Explore the four key pillars of SafeCart+: ShopSync, NeuroCart, ShelfTalk, and SafeCart AI.
      </p>

      <ul className="space-y-4 mt-6">
        <li className="p-4 bg-card rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-chart-1">ShopSync</h2>
          <p>Emotion-aware AI that adapts UI based on mood and stress levels.</p>
        </li>
        <li className="p-4 bg-card rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-chart-2">NeuroCart</h2>
          <p>Low-stimulation mode and customization for neurodivergent shoppers.</p>
        </li>
        <li className="p-4 bg-card rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-chart-3">ShelfTalk</h2>
          <p>Live captions, sign-language avatars, and visual alerts.</p>
        </li>
        <li className="p-4 bg-card rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-chart-4">SafeCart AI</h2>
          <p>Privacy-focused GenAI and real-time threat detection while shopping.</p>
        </li>
      </ul>
    </main>
  );
}
