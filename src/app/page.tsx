// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 pb-8">
//       {/*/<nav className="w-full py-4 flex justify-end gap-4 text-sm">*/}
//         <nav className="w-full py-4 flex justify-end gap-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-all">

//         <Link href="#shopsync">ShopSync</Link>
//         <Link href="#neurocart">NeuroCart</Link>
//         <Link href="#shelftalk">ShelfTalk</Link>
//         <Link href="#safecart-ai">SafeCart AI</Link>
//       </nav>
//       <section className="flex-1 w-full flex flex-col md:flex-row items-center md:justify-between mt-10 max-w-5xl gap-8">
//         <div className="flex-1 flex flex-col items-start gap-6">
//           {/*<h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary max-w-xl">
//             SafeCart<span className="text-chart-1">+</span>
//           </h1>*/}
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-primary max-w-xl tracking-tight">
//             SafeCart<span className="text-chart-1">+</span>
//           </h1>

//           <h2 className="text-xl md:text-2xl max-w-lg text-muted-foreground leading-relaxed">
//             All-in-one AI-powered retail assistant— personalizes shopping for <span className="font-bold">everyone</span>, protects privacy, enhances experience from shelf to checkout.
//           </h2>
//           <div className="flex gap-4 mt-2">
//            {/* <Link
//               className="rounded-lg bg-chart-1 px-6 py-3 text-white font-semibold text-lg shadow-md hover:scale-[1.04] duration-150"
//               href="#onboard"
//             >*/}
//             <Link
//               className="rounded-xl bg-chart-1 px-6 py-3 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-200"
//               href="#onboard"
//             >

//               Quickstart Demo
//             </Link>
//             <Link href="#features" className="px-6 py-3 rounded-lg border">
//               Learn More
//             </Link>
//           </div>
//         </div>
//         <div className="flex-1 flex justify-center">
//           {/* Hero illustration placeholder: Could be replaced with AI/Emotion/Shopping SVG */}
//           <div className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-3xl flex items-center justify-center shadow-2xl border border-border hover:scale-105 transition-all duration-200">
//             <span className="text-6xl md:text-8xl" role="img" aria-label="cart">🛒</span>
//           </div>
//         </div>
//       </section>
//       <section className="w-full pt-12 max-w-5xl" id="features">
//         <h3 className="text-3xl font-bold mb-10 text-center text-primary">Inclusive. Adaptive. Secure. Smart.</h3>
        
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
//           <div className="bg-card p-6 rounded-lg shadow-md">
//             <h4 className="font-bold mb-2 text-xl text-chart-1">ShopSync</h4>
//             <p className="text-sm text-muted-foreground">Emotion-aware AI guides shopping with empathy & real-time context.</p>
//           </div>
//           <div className="bg-card p-6 rounded-lg shadow-md">
//             <h4 className="font-bold mb-2 text-xl text-chart-2">NeuroCart</h4>
//             <p className="text-sm text-muted-foreground">Neurodivergent-friendly: adaptive cues, calming modes, customization.</p>
//           </div>
//           <div className="bg-card p-6 rounded-lg shadow-md">
//             <h4 className="font-bold mb-2 text-xl text-chart-3">ShelfTalk</h4>
//             <p className="text-sm text-muted-foreground">Assistive comms: live captions, sign-language avatars, visual alerts.</p>
//           </div>
//           <div className="bg-card p-6 rounded-lg shadow-md">
//             <h4 className="font-bold mb-2 text-xl text-chart-4">SafeCart AI</h4>
//             <p className="text-sm text-muted-foreground">GenAI security, real-time threat detection, privacy controls, and personalization.</p>
//           </div>
//         </div> 
//       </section>
//     </main>
//   );
// }

// src/app/page.tsx

'use client'

import Link from "next/link";
import { useUserMode } from "@/context/UserModeContext";
import ModeToggles from "@/context/ModeToggles"; // ✅ corrected path
import EmotionSelector from "@/components/EmotionSelector"; // ✅ make sure you created this
import EmotionDetector from "@/components/EmotionDetector";
import SignAvatar from "@/components/SignAvatar";
import PrivacyBanner from "@/components/PrivacyBanner"
import TouchVoiceLayoutDemo from "@/components/TouchVoiceLayoutDemo";
import VoiceMic from '@/components/VoiceMic';
import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';

export default function Home() {
  // ✅ Only call the hook ONCE
  const {
    emotionMode,
    lowStimMode,
    signMode,
    touchVoiceMode,
    emotionType,
  } = useUserMode();

  const emotionStyles: Record<string, string> = {
    calm: "bg-blue-50 text-blue-900",
    stressed: "bg-red-50 text-red-900",
    focused: "bg-yellow-50 text-yellow-900",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 pb-8">
      {/* Navigation */}
      <nav className="w-full py-4 flex justify-end gap-6 text-sm font-medium text-muted-foreground">
        <Link href="/features">Features</Link>
        <Link href="/cart">SmartCart</Link>
        <Link href="/privacy">Privacy Copilot</Link>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 w-full flex flex-col md:flex-row items-center md:justify-between mt-10 max-w-5xl gap-8">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-primary max-w-xl tracking-tight">
            SafeCart<span className="text-chart-1">+</span>
          </h1>
          <h2 className="text-xl md:text-2xl max-w-lg text-muted-foreground leading-relaxed">
            All-in-one AI-powered retail assistant—personalizes shopping for <span className="font-bold">everyone</span>, protects privacy, and enhances experience from shelf to checkout.
          </h2>

          <div className="flex gap-4 mt-2 flex-wrap">
            <Link
              className="rounded-xl bg-chart-1 px-6 py-3 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-200"
              href="/features"
            >
              Quickstart Demo
            </Link>
            <Link href="#features" className="px-6 py-3 rounded-xl border">
              Learn More
            </Link>
            <Link
              className="rounded-xl bg-chart-1 px-6 py-3 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-200"
              href="/onboard"
            >
              Personalize SmartCart
            </Link>
          </div>

          {/* ✅ Mode Toggles + Emotion Selector */}
          <ModeToggles />
          <VoiceAssistantPanel />
          <VoiceMic />
          <EmotionSelector />
          <EmotionDetector />
          <SignAvatar context="general" />
          <SignAvatar context="checkout" />
          <SignAvatar context="greeting" />
          {/* <SignAvatar message="Welcome! Please take your cart." /> */}
          <PrivacyBanner />

        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-3xl flex items-center justify-center shadow-2xl border border-border hover:scale-105 transition-all duration-200">
            <span className="text-6xl md:text-8xl" role="img" aria-label="cart">🛒</span>
          </div>
        </div>
      </section>

      {/* Mode Demos */}
      <section className="w-full pt-16 max-w-5xl space-y-6" id="mode-demo">
        <h3 className="text-2xl font-semibold text-center text-primary">Live Mode Demo</h3>

        {/* Emotion Mode */}
        {emotionMode && (
          <div
            className={`p-6 rounded-xl shadow-inner border transition-all ${
              emotionType ? emotionStyles[emotionType] : "bg-blue-100 text-blue-900"
            }`}
          >
            🧠 Emotion Mode Active: {emotionType ? `You feel ${emotionType}` : "We've applied calming colors and softened the layout."}
          </div>
        )}

        {/* Low-Stimulation Mode */}
        {lowStimMode && (
          <div className="p-6 rounded-xl bg-gray-100 text-gray-800 shadow-none border border-muted">
            🧘 Low-Stimulation Mode Active: Animations and motion are minimized for a distraction-free experience.
          </div>
        )}

        {/* Sign Mode */}
        {signMode && (
          <div className="p-6 rounded-xl bg-purple-50 text-purple-900 border border-purple-300 shadow-sm">
            🧏 Sign Avatar Mode: A placeholder avatar would appear here for sign-language guidance.
          </div>
        )}

        {/* Touch/Voice Mode */}
        {touchVoiceMode && (
          <div className="p-6 rounded-xl bg-green-50 text-green-900 border border-green-200 shadow-sm">
            🖐️ Touch/Voice Mode: Interface adjusts for voice input or large touch targets.
          </div>
        )}
        {touchVoiceMode && <TouchVoiceLayoutDemo />}

      </section>

        <section className="mt-6 text-sm text-muted-foreground max-w-xl w-full">
          <h4 className="font-semibold text-base mb-2">🗣️ Try These Voice Commands:</h4>
          <ul className="list-disc list-inside leading-relaxed">
            <li><strong>“Start checkout”</strong> – Enables Sign Mode + switches to Grid layout</li>
            <li><strong>“Go to cart”</strong> – Navigates to Cart page</li>
            <li><strong>“Activate low stim”</strong> – Enables Low-Stimulation Mode</li>
            <li><strong>“Start scanning”</strong> – Activates Emotion Mode (camera input)</li>

          </ul>
        </section>

    </main>
  );
}
