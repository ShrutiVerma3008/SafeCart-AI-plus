'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartMemory } from "@/context/CartContext";

const stressOptions = ["Crowds", "Noise", "Bright Lights"];
const dietaryOptions = ["Vegan", "Gluten-Free", "Nut-Free", "Dairy-Free"];

export default function OnboardPage() {
  const { updateMemory } = useCartMemory();
  const router = useRouter();

  const [layout, setLayout] = useState("grid");
  const [stress, setStress] = useState<string[]>([]);
  const [contrast, setContrast] = useState("normal");
  const [fontSize, setFontSize] = useState("medium");
  const [dietary, setDietary] = useState<string[]>([]);

  const toggleMulti = (value: string, list: string[], setList: any) => {
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );
  };

  const handleSubmit = () => {
    updateMemory({
      preferredLayout: layout,
      stressTriggers: stress,
      dietaryPrefs: dietary,
      visualPrefs: { contrast, fontSize },
    });
    router.push("/cart");
  };

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-primary">🧠 Personalize Your SmartCart</h1>

      {/* Layout Preference */}
      <div>
        <label className="font-medium block mb-2">Preferred Layout:</label>
        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </div>

      {/* Stress Triggers */}
      <div>
        <label className="font-medium block mb-2">Stress Triggers:</label>
        <div className="flex flex-wrap gap-2">
          {stressOptions.map((option) => (
            <button
              key={option}
              onClick={() => toggleMulti(option, stress, setStress)}
              className={`px-3 py-1 rounded-full border ${
                stress.includes(option)
                  ? "bg-chart-1 text-white"
                  : "bg-background text-muted-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Preferences */}
      <div>
        <label className="font-medium block mb-2">Contrast:</label>
        <select
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        >
          <option value="normal">Normal</option>
          <option value="high">High Contrast</option>
        </select>

        <label className="font-medium block mt-4 mb-2">Font Size:</label>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Dietary Preferences */}
      <div>
        <label className="font-medium block mb-2">Dietary Preferences:</label>
        <div className="flex flex-wrap gap-2">
          {dietaryOptions.map((option) => (
            <button
              key={option}
              onClick={() => toggleMulti(option, dietary, setDietary)}
              className={`px-3 py-1 rounded-full border ${
                dietary.includes(option)
                  ? "bg-chart-1 text-white"
                  : "bg-background text-muted-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-chart-1 px-6 py-2 rounded text-white hover:scale-105 transition"
      >
        Save Preferences → Go to SmartCart
      </button>
    </main>
  );
}
