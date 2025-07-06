// "use client";
// import { createContext, useContext, useState } from "react";

// type ModeContextType = {
//   emotionMode: boolean;
//   lowStimMode: boolean;
//   signMode: boolean;
//   touchVoiceMode: boolean;
//   toggleMode: (mode: keyof Omit<ModeContextType, "toggleMode">) => void;
// };

// const UserModeContext = createContext<ModeContextType | null>(null);

// export function UserModeProvider({ children }: { children: React.ReactNode }) {
//   const [emotionMode, setEmotionMode] = useState(false);
//   const [lowStimMode, setLowStimMode] = useState(false);
//   const [signMode, setSignMode] = useState(false);
//   const [touchVoiceMode, setTouchVoiceMode] = useState(false);

//   const toggleMode = (mode: keyof Omit<ModeContextType, "toggleMode">) => {
//     switch (mode) {
//       case "emotionMode": setEmotionMode(!emotionMode); break;
//       case "lowStimMode": setLowStimMode(!lowStimMode); break;
//       case "signMode": setSignMode(!signMode); break;
//       case "touchVoiceMode": setTouchVoiceMode(!touchVoiceMode); break;
//     }
//   };

//   return (
//     <UserModeContext.Provider
//       value={{ emotionMode, lowStimMode, signMode, touchVoiceMode, toggleMode }}
//     >
//       {children}
//     </UserModeContext.Provider>
//   );
// }

// export function useUserMode() {
//   const context = useContext(UserModeContext);
//   if (!context) throw new Error("useUserMode must be used within UserModeProvider");
//   return context;
// }


"use client";
import { createContext, useContext, useState } from "react";
import { useCartMemory } from "./CartContext";  // 👈 import SmartCart

type EmotionType = "calm" | "stressed" | "focused" | null;

type ModeContextType = {
  emotionMode: boolean;
  emotionType: EmotionType;
  setEmotionType: (e: EmotionType) => void;
  lowStimMode: boolean;
  signMode: boolean;
  touchVoiceMode: boolean;
  toggleMode: (mode: keyof Omit<ModeContextType, "toggleMode">) => void;
};

const UserModeContext = createContext<ModeContextType | null>(null);

export function UserModeProvider({ children }: { children: React.ReactNode }) {
  const [emotionMode, setEmotionMode] = useState(false);
  const [lowStimMode, setLowStimMode] = useState(false);
  const [signMode, setSignMode] = useState(false);
  const [touchVoiceMode, setTouchVoiceMode] = useState(false);

  const { updateMemory } = useCartMemory();  // ✅ Grab memory updater

  const toggleMode = (mode: keyof Omit<ModeContextType, "toggleMode">) => {
    switch (mode) {
      case "emotionMode":
        setEmotionMode((prev) => {
          const next = !prev;
          if (next) updateMemory({ stressTriggers: ["noise", "rush"] });
          return next;
        });
        break;

      case "lowStimMode":
        setLowStimMode((prev) => {
          const next = !prev;
          if (next)
            updateMemory({
              visualPrefs: { contrast: "high", fontSize: "large" },
            });
          return next;
        });
        break;

      case "signMode":
        setSignMode((prev) => {
          const next = !prev;
          if (next) updateMemory({ preferredLayout: "list" });
          return next;
        });
        break;

      case "touchVoiceMode":
        setTouchVoiceMode((prev) => {
          const next = !prev;
          if (next) updateMemory({ preferredLayout: "grid" });
          return next;
        });
        break;
    }
  };
  const [emotionType, setEmotionType] = useState<EmotionType>(null);
  return (
    <UserModeContext.Provider
      value={{ emotionMode,emotionType,   setEmotionType,  lowStimMode, signMode, touchVoiceMode, toggleMode }}
    >
      {children}
    </UserModeContext.Provider>
  );
}

export function useUserMode() {
  const context = useContext(UserModeContext);
  if (!context) throw new Error("useUserMode must be used within UserModeProvider");
  return context;
}
