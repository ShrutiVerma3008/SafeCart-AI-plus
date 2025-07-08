// // 'use client';
// // import { useState, useEffect } from 'react';

// // const SpeechRecognition =
// //   typeof window !== 'undefined' &&
// //   (window.SpeechRecognition || (window as any).webkitSpeechRecognition);

// // export default function VoiceMic() {
// //   const [listening, setListening] = useState(false);
// //   const [transcript, setTranscript] = useState('');

// //   useEffect(() => {
// //     if (!SpeechRecognition) return;

// //     const recognition = new SpeechRecognition();
// //     recognition.continuous = false;
// //     recognition.lang = 'en-US';
// //     recognition.interimResults = false;

// //     recognition.onstart = () => setListening(true);
// //     recognition.onend = () => setListening(false);
// //     recognition.onresult = (event: any) => {
// //       const text = event.results[0][0].transcript;
// //       setTranscript(text);
// //       console.log('Recognized:', text);
// //       // TODO: handleCommand(text); // Optional command parsing
// //     };

// //     if (listening) recognition.start();

// //     return () => {
// //       recognition.stop();
// //     };
// //   }, [listening]);

// //   return (
// //     <div className="mt-6">
// //       <button
// //         onClick={() => setListening(!listening)}
// //         className={`rounded-full px-6 py-3 font-semibold text-white text-lg shadow transition ${
// //           listening ? 'bg-red-500' : 'bg-green-600'
// //         }`}
// //       >
// //         {listening ? '🎙️ Listening…' : '🎤 Speak Command'}
// //       </button>

// //       {transcript && (
// //         <p className="mt-2 text-muted-foreground text-sm">
// //           🗣️ You said: <span className="font-semibold">{transcript}</span>
// //         </p>
// //       )}
// //     </div>
// //   );
// // }

// 'use client';
// import { useState, useEffect } from 'react';

// const getSpeechRecognition = () => {
//   if (typeof window === 'undefined') return null;

//   return (
//     (window as any).SpeechRecognition ||
//     (window as any).webkitSpeechRecognition ||
//     null
//   );
// };

// export default function VoiceMic() {
//   const [listening, setListening] = useState(false);
//   const [transcript, setTranscript] = useState('');

//   useEffect(() => {
//     const SpeechRecognition = getSpeechRecognition();
//     if (!SpeechRecognition) return;

//     const recognition = new SpeechRecognition();
//     recognition.continuous = false;
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);
//     recognition.onresult = (event: any) => {
//       const text = event.results[0][0].transcript;
//       setTranscript(text);
//       console.log('Recognized:', text);
//     };

//     if (listening) recognition.start();

//     return () => recognition.stop();
//   }, [listening]);

//   return (
//     <div className="mt-6">
//       <button
//         onClick={() => setListening(!listening)}
//         className={`rounded-full px-6 py-3 font-semibold text-white text-lg shadow transition ${
//           listening ? 'bg-red-500' : 'bg-green-600'
//         }`}
//       >
//         {listening ? '🎙️ Listening…' : '🎤 Speak Command'}
//       </button>

//       {transcript && (
//         <p className="mt-2 text-muted-foreground text-sm">
//           🗣️ You said: <span className="font-semibold">{transcript}</span>
//         </p>
//       )}
//     </div>
//   );
// }
// // 


'use client';
import { useState, useEffect } from 'react';
import { useUserMode } from '@/context/UserModeContext';
import { useCartMemory } from '@/context/CartContext';
import { useRouter } from "next/navigation";

const getSpeechRecognition = () => {
  if (typeof window === 'undefined') return null;
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
};

export default function VoiceMic() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const router = useRouter(); // ✅ used for navigation
  const { toggleMode } = useUserMode();
  const { updateMemory } = useCartMemory();

  const handleCommand = (command: string) => {
    const clean = command.toLowerCase().trim();

    if (clean.includes('start checkout')) {
      toggleMode("signMode"); // enable sign mode
      updateMemory({ preferredLayout: "grid" }); // switch to grid layout
      alert('✅ Sign Mode ON + Grid layout set for checkout');
    }
    if (clean.includes("go to cart")) {
    router.push("/cart");
  }
    // Add more commands here if needed
    if (clean.includes("activate low stim")) {
    toggleMode("lowStimMode");
    alert("🧘 Low-Stimulation Mode activated");
  }

  if (clean.includes("start scanning")) {
    toggleMode("emotionMode");
    alert("🧠 Emotion Mode activated. Camera scanning your emotion.");
  }


  };

  useEffect(() => {
    const SpeechRecognition = getSpeechRecognition();
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      handleCommand(text);
    };

    if (listening) recognition.start();

    return () => {
      recognition.stop();
    };
  }, [listening]);

  return (
    <div className="mt-6">
      <button
        onClick={() => setListening(!listening)}
        className={`rounded-full px-6 py-3 font-semibold text-white text-lg shadow transition ${
          listening ? 'bg-red-500' : 'bg-green-600'
        }`}
      >
        {listening ? '🎙️ Listening…' : '🎤 Speak Command'}
      </button>

      {transcript && (
        <p className="mt-2 text-muted-foreground text-sm">
          🗣️ You said: <span className="font-semibold">{transcript}</span>
        </p>
      )}
    </div>
  );
}
