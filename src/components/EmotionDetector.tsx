"use client";
import { useUserMode } from "@/context/UserModeContext";
import { useState } from "react";

const mockEmotions = ["calm", "stressed", "focused"];

export default function EmotionDetector() {
  const { emotionMode, setEmotionType } = useUserMode();
  const [loading, setLoading] = useState(false);
  const [detected, setDetected] = useState<string | null>(null);

  const simulateDetection = () => {
    setLoading(true);
    setDetected(null);

    setTimeout(() => {
      const random = mockEmotions[Math.floor(Math.random() * mockEmotions.length)];
      setEmotionType(random as any);
      setDetected(random);
      setLoading(false);
    }, 2000); // 2s fake detection
  };

  if (!emotionMode) return null;

  return (
    <div className="mt-6 w-full max-w-md bg-card p-4 border rounded-xl shadow space-y-3">
      <h4 className="text-lg font-semibold text-primary">🎥 AI Emotion Detection</h4>
      <p className="text-muted-foreground text-sm">
        Click the button to simulate facial/voice-based emotion analysis like Affectiva or Azure.
      </p>

      <button
        onClick={simulateDetection}
        disabled={loading}
        className="bg-chart-1 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
      >
        {loading ? "Analyzing..." : "🔍 Detect Emotion"}
      </button>

      {detected && (
        <p className="text-sm text-green-700 mt-2">
          ✅ Detected Emotion: <strong>{detected}</strong>
        </p>
      )}
    </div>
  );
}
