'use client';
import { useCartMemory } from "@/context/CartContext";

export default function CartPage() {
  const { memory, updateMemory } = useCartMemory();

  return (
    <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Your SmartCart Memory</h1>

      <div className="space-y-6 bg-card rounded-xl p-6 shadow border text-muted-foreground">
        <div>
          <strong>Preferred Layout:</strong> {memory.preferredLayout}
        </div>
        <div>
          <strong>Stress Triggers:</strong> {memory.stressTriggers.join(", ") || "None"}
        </div>
        <div>
          <strong>Visual Preferences:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Contrast: {memory.visualPrefs.contrast}</li>
            <li>Font Size: {memory.visualPrefs.fontSize}</li>
          </ul>
        </div>
        <div>
          <strong>Dietary Preferences:</strong> {memory.dietaryPrefs.join(", ") || "None"}
        </div>
      </div>

      <button
        className="mt-6 bg-chart-1 px-4 py-2 rounded text-white shadow hover:scale-105 transition"
        onClick={() => updateMemory({
          stressTriggers: ["crowds", "noise"],
          visualPrefs: { contrast: "high", fontSize: "large" },
          dietaryPrefs: ["gluten-free", "vegan"],
        })}
      >
        🔄 Demo: Update Preferences
      </button>
    </main>
  );
}
