"use client";
import { useUserMode } from "@/context/UserModeContext";

const EMOTIONS = [
  { label: "😌 Calm", value: "calm" },
  { label: "😣 Stressed", value: "stressed" },
  { label: "🧠 Focused", value: "focused" },
];

export default function EmotionSelector() {
  const { emotionMode, emotionType, setEmotionType } = useUserMode();

  if (!emotionMode) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">How are you feeling?</h3>
      <div className="flex gap-3 flex-wrap">
        {EMOTIONS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setEmotionType(value as any)}
            className={`px-4 py-2 rounded-full border ${
              emotionType === value
                ? "bg-blue-500 text-white"
                : "bg-background text-muted-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
