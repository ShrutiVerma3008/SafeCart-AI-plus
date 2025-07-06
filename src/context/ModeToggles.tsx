"use client";
import { useUserMode } from "@/context/UserModeContext";

export default function ModeToggles() {
  const { emotionMode, lowStimMode, signMode, touchVoiceMode, toggleMode } = useUserMode();

  const modes = [
    { label: "Emotion", active: emotionMode, key: "emotionMode" },
    { label: "Low-Stim", active: lowStimMode, key: "lowStimMode" },
    { label: "Sign Mode", active: signMode, key: "signMode" },
    { label: "Touch/Voice", active: touchVoiceMode, key: "touchVoiceMode" },
  ];

  return (
    <div className="flex gap-3 flex-wrap mt-6">
      {modes.map((mode) => (
        <button
          key={mode.key}
          onClick={() => toggleMode(mode.key as any)}
          className={`px-4 py-2 rounded-full text-sm font-medium border shadow ${
            mode.active
              ? "bg-chart-1 text-white"
              : "bg-background text-muted-foreground"
          } transition-all`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
