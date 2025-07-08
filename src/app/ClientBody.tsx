// "use client";

// import { useEffect } from "react";

// export default function ClientBody({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Remove any extension-added classes during hydration
//   useEffect(() => {
//     // This runs only on the client after hydration
//     document.body.className = "antialiased";
//   }, []);

//   return <div className="antialiased">{children}</div>;
// }

// "use client";
// import { useEffect } from "react";
// import { useUserMode } from "@/context/UserModeContext";

// export default function ClientBody({ children }: { children: React.ReactNode }) {
//   const { lowStimMode } = useUserMode();

//   useEffect(() => {
//     document.body.className = lowStimMode ? "lowstim antialiased" : "antialiased";
//   }, [lowStimMode]);

//   return <div className="antialiased">{children}</div>;
// }

// "use client";
// import { useEffect } from "react";
// import { useUserMode } from "@/context/UserModeContext";

// export default function ClientBody({ children }: { children: React.ReactNode }) {
//   const { lowStimMode, touchVoiceMode } = useUserMode();

//   useEffect(() => {
//     let bodyClass = "antialiased";
//     if (lowStimMode) bodyClass += " lowstim";
//     if (touchVoiceMode) bodyClass += " touchvoice";
//     document.body.className = bodyClass;
//   }, [lowStimMode, touchVoiceMode]);

//   return <div className="antialiased">{children}</div>;
// }


"use client";
import { useEffect } from "react";
import { useUserMode } from "@/context/UserModeContext";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const { lowStimMode, touchVoiceMode } = useUserMode();

  useEffect(() => {
    let bodyClass = "antialiased";
    if (lowStimMode) bodyClass += " lowstim";
    if (touchVoiceMode) bodyClass += " touchvoice";
    document.body.className = bodyClass;
  }, [lowStimMode, touchVoiceMode]);

  return <div>{children}</div>;
}
