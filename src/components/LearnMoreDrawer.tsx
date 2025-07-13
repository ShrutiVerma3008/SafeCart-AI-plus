// components/LearnMoreDrawer.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function LearnMoreDrawer({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.7 }}
            className="fixed bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-background z-50 shadow-2xl"
          >
            {/* Header */}
            <header className="flex justify-between items-center px-6 pt-6">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Discover&nbsp;
                <span className="text-chart-1">SafeCart+</span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition"
              >
                <X className="w-6 h-6" />
              </button>
            </header>

            {/* Content */}
            <section className="space-y-14 p-6 pb-20">
              {/* 1️⃣ Universal Personalisation */}
              <article className="flex flex-col md:flex-row gap-8 items-center">
                {/* <Image
                  src="/images/personalisation.svg"
                  alt=""
                  width={260}
                  height={260}
                  className="flex-shrink-0"
                /> */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Universal&nbsp;Personalisation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Emotion detection, low‑stim layouts, sign‑language avatars,
                    voice + touch modes – every shopper gets a custom interface
                    in <em>one tap</em>.
                  </p>
                </div>
              </article>

              {/* 2️⃣ Privacy Copilot */}
              <article className="flex flex-col md:flex-row-reverse gap-8 items-center">
                {/* <Image
                  src="/images/privacy.svg"
                  alt=""
                  width={260}
                  height={260}
                  className="flex-shrink-0"
                /> */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Privacy&nbsp;Copilot
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real‑time permission monitor, clipboard scrubber, focus
                    alerts, one‑click “panic” wipe, and 🧠 AI tips for safer
                    settings.
                  </p>
                </div>
              </article>

              {/* 3️⃣ SmartCart Core */}
              <article className="flex flex-col md:flex-row gap-8 items-center">
                {/* <Image
                  src="/images/smartcart.svg"
                  alt=""
                  width={260}
                  height={260}
                  className="flex-shrink-0"
                /> */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    SmartCart&nbsp;Engine
                  </h3>
                  <ul className="list-disc list-inside leading-relaxed text-muted-foreground">
                    <li>Voice‑driven item add ⬆️</li>
                    <li>Live price prediction 💸</li>
                    <li>Adaptive checkout animation 🚀</li>
                    <li>Real‑time sign avatar at POS 🤟</li>
                  </ul>
                </div>
              </article>

              {/* 4️⃣ Extensible API */}
              <article className="flex flex-col md:flex-row-reverse gap-8 items-center">
                {/* <Image
                  src="/images/api.svg"
                  alt=""
                  width={260}
                  height={260}
                  className="flex-shrink-0"
                /> */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Plug‑and‑Play&nbsp;API
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    REST + GraphQL endpoints, WebSocket events, and drop‑in
                    React hooks let retailers integrate SafeCart+ in hours, not
                    weeks.
                  </p>
                </div>
              </article>
            </section>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
