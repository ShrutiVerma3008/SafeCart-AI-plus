// "use client";
// import { useUserMode } from "@/context/UserModeContext";
// import { useState } from "react";

// const mockEmotions = ["calm", "stressed", "focused"];

// export default function EmotionDetector() {
//   const { emotionMode, setEmotionType } = useUserMode();
//   const [loading, setLoading] = useState(false);
//   const [detected, setDetected] = useState<string | null>(null);

//   const simulateDetection = () => {
//     setLoading(true);
//     setDetected(null);

//     setTimeout(() => {
//       const random = mockEmotions[Math.floor(Math.random() * mockEmotions.length)];
//       setEmotionType(random as any);
//       setDetected(random);
//       setLoading(false);
//     }, 2000); // 2s fake detection
//   };

//   if (!emotionMode) return null;

//   return (
//     <div className="mt-6 w-full max-w-md bg-card p-4 border rounded-xl shadow space-y-3">
//       <h4 className="text-lg font-semibold text-primary">🎥 AI Emotion Detection</h4>
//       <p className="text-muted-foreground text-sm">
//         Click the button to simulate facial/voice-based emotion analysis like Affectiva or Azure.
//       </p>

//       <button
//         onClick={simulateDetection}
//         disabled={loading}
//         className="bg-chart-1 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
//       >
//         {loading ? "Analyzing..." : "🔍 Detect Emotion"}
//       </button>

//       {detected && (
//         <p className="text-sm text-green-700 mt-2">
//           ✅ Detected Emotion: <strong>{detected}</strong>
//         </p>
//       )}
//     </div>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useUserMode } from "@/context/UserModeContext";

export default function EmotionDetector() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [detected, setDetected] = useState<string | null>(null);
  const { emotionMode, setEmotionType } = useUserMode();

  useEffect(() => {
    if (!emotionMode) return;

    const loadModels = async () => {
      const MODEL_URL = "/models"; // we'll place model files in public/models
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
    };

    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      if (videoRef.current) videoRef.current.srcObject = stream;
    };

    loadModels().then(startVideo).then(() => setLoading(false));
  }, [emotionMode]);
const detect = async () => {
  if (!videoRef.current) return;

  const result = await faceapi
    .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
    .withFaceExpressions();

  if (!result || !result.expressions) {
    setDetected("No expression detected");
    return;
  }

  const best = Object.entries(result.expressions).sort((a, b) => b[1] - a[1])[0];
  const emotion = best[0];
  setDetected(emotion);

  if (["happy", "neutral", "surprised"].includes(emotion)) {
    setEmotionType("calm");
  } else if (["angry", "sad", "disgusted"].includes(emotion)) {
    setEmotionType("stressed");
  } else {
    setEmotionType("focused");
  }
};


  if (!emotionMode) return null;

  return (
    <div className="mt-6 w-full max-w-md bg-card p-4 border rounded-xl shadow space-y-3">
      <h4 className="text-lg font-semibold text-primary">🎥 AI Emotion Detection</h4>
      <p className="text-muted-foreground text-sm">
        Webcam-based real-time emotion analysis using FaceAPI.js.
      </p>

      <video ref={videoRef} autoPlay muted width={300} height={200} className="rounded border" />

      <button
        onClick={detect}
        disabled={loading}
        className="bg-chart-1 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
      >
        {loading ? "Loading..." : "🔍 Detect Emotion"}
      </button>

      {detected && (
        <p className="text-sm text-green-700 mt-2">
          ✅ Detected Expression: <strong>{detected}</strong>
        </p>
      )}
    </div>
  );
}
