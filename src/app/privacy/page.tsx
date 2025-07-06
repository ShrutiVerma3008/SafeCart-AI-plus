export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Copilot</h1>
      <p className="text-muted-foreground mb-4">
        This AI assistant informs you in real-time if your data is being tracked and lets you opt-out immediately.
      </p>
      <div className="rounded-xl border p-6 shadow-md bg-card text-muted-foreground">
        🔐 Simulated privacy alert and opt-out toggles will appear here.
      </div>
    </main>
  );
}
