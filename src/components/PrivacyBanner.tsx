"use client";
import { useEffect, useState } from "react";

export default function PrivacyBanner() {
  const [trackingDetected, setTrackingDetected] = useState(false);
  const [optedOut, setOptedOut] = useState(false);

  // Fake detection after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTrackingDetected(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!trackingDetected || optedOut) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-red-100 text-red-800 p-4 rounded-xl shadow-lg max-w-sm z-50">
      <h4 className="font-semibold mb-2">⚠️ Tracking Detected</h4>
      <p className="text-sm mb-3">
        We noticed third-party trackers analyzing your shopping behavior.
      </p>
      <button
        className="bg-red-600 text-white px-3 py-1 rounded hover:scale-105 transition"
        onClick={() => setOptedOut(true)}
      >
        Opt Out
      </button>
    </div>
  );
}
