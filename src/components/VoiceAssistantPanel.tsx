// // 'use client';
// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { useUserMode } from '@/context/UserModeContext';
// // import { useCartMemory } from '@/context/CartContext';

// // const getSpeechRecognition = () => {
// //   if (typeof window === 'undefined') return null;
// //   return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
// // };

// // export default function VoiceAssistantPanel() {
// //   const [listening, setListening] = useState(false);
// //   const [transcript, setTranscript] = useState('');
// //   const router = useRouter();
// //   const { toggleMode } = useUserMode();
// //   const { updateMemory } = useCartMemory();

// //   const handleCommand = (command: string) => {
// //     const clean = command.toLowerCase().trim();

// //     if (clean.includes("start checkout")) {
// //       toggleMode("signMode");
// //       updateMemory({ preferredLayout: "grid" });
// //       alert("✅ Sign Mode ON + Grid layout set for checkout");
// //     }

// //     if (clean.includes("go to cart")) {
// //       router.push("/cart");
// //     }

// //     if (clean.includes("activate low stim")) {
// //       toggleMode("lowStimMode");
// //       alert("🧘 Low-Stimulation Mode activated");
// //     }

// //     if (clean.includes("start scanning")) {
// //       toggleMode("emotionMode");
// //       alert("🧠 Emotion Mode activated. Camera scanning your emotion.");
// //     }
// //   };

// // //   useEffect(() => {
// // //     const SpeechRecognition = getSpeechRecognition();
// // //     if (!SpeechRecognition) return;

// // //     const recognition = new SpeechRecognition();
// // //     recognition.continuous = false;
// // //     recognition.lang = 'en-US';
// // //     recognition.interimResults = false;

// // //     recognition.onstart = () => setListening(true);
// // //     recognition.onend = () => setListening(false);
// // //     recognition.onresult = (event: any) => {
// // //       const text = event.results[0][0].transcript;
// // //       setTranscript(text);
// // //       handleCommand(text);
// // //     };

// // //     if (listening) recognition.start();

// // //     return () => recognition.stop();
// // //   }, [listening]);

// // useEffect(() => {
// //   const SpeechRecognition = getSpeechRecognition();
// //   if (!SpeechRecognition) {
// //     console.log("❌ SpeechRecognition not supported");
// //     return;
// //   }

// //   const recognition = new SpeechRecognition();
// //   recognition.continuous = false;
// //   recognition.lang = 'en-US';
// //   recognition.interimResults = false;

// //   recognition.onstart = () => {
// //     console.log("🎙️ Voice started");
// //     setListening(true);
// //   };

// //   recognition.onend = () => {
// //     console.log("🛑 Voice stopped");
// //     setListening(false);
// //   };

// //   recognition.onresult = (event: any) => {
// //     const text = event.results[0][0].transcript;
// //     console.log("✅ You said:", text);
// //     setTranscript(text);
// //     handleCommand(text);
// //   };

// //   if (listening) {
// //     console.log("🔁 Starting recognition");
// //     recognition.start();
// //   }

// //   return () => {
// //     console.log("🧹 Cleaning up recognition");
// //     recognition.stop();
// //   };
// // }, [listening]);


// //   return (
// //     <div className="mt-8 p-6 border rounded-xl shadow-md bg-white max-w-xl w-full">
// //       <h3 className="text-xl font-bold mb-2 text-primary">🗣️ Voice Assistant</h3>

// //       <button
// //         onClick={() => setListening(!listening)}
// //         className={`rounded-full px-6 py-3 font-semibold text-white text-lg shadow transition ${
// //           listening ? 'bg-red-500' : 'bg-green-600'
// //         }`}
// //       >
// //         {listening ? '🎙️ Listening…' : '🎤 Speak Command'}
// //       </button>

// //       {transcript && (
// //         <p className="mt-2 text-sm text-muted-foreground">
// //           🧾 You said: <span className="font-semibold">{transcript}</span>
// //         </p>
// //       )}

// //       <div className="mt-4 text-sm text-muted-foreground">
// //         <h4 className="font-semibold mb-1">Try saying:</h4>
// //         <ul className="list-disc list-inside leading-relaxed space-y-1">
// //           <li><strong>“Start checkout”</strong> – Sign Mode + Grid layout</li>
// //           <li><strong>“Go to cart”</strong> – Navigate to Cart</li>
// //           <li><strong>“Activate low stim”</strong> – Calming visual mode</li>
// //           <li><strong>“Start scanning”</strong> – Turn on Emotion Detection</li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }



// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useUserMode } from '@/context/UserModeContext';
// import { useCartMemory } from '@/context/CartContext';

// const getSpeechRecognition = () => {
//   if (typeof window === 'undefined') return null;
//   return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
// };

// export default function VoiceAssistantPanel({
//   addItemToCart,
// }: {
//   addItemToCart: (item: string) => void;
// }) {
//   const [listening, setListening] = useState(false);
//   const [transcript, setTranscript] = useState('');
//   const router = useRouter();
//   const { toggleMode } = useUserMode();
//   const { updateMemory } = useCartMemory();

//   const handleCommand = (command: string) => {
//     const clean = command.toLowerCase().trim();

//     if (clean.startsWith("add ")) {
//       const item = clean.replace("add ", "").trim();
//       if (item.length > 1) {
//         addItemToCart(item);
//         alert(`🛒 Added "${item}" to your cart.`);
//       }
//     }

//     if (clean.includes("start checkout")) {
//       toggleMode("signMode");
//       updateMemory({ preferredLayout: "grid" });
//       alert("✅ Sign Mode ON + Grid layout set for checkout");
//     }

//     if (clean.includes("go to cart")) {
//       router.push("/cart");
//     }

//     if (clean.includes("activate low stim")) {
//       toggleMode("lowStimMode");
//       alert("🧘 Low-Stimulation Mode activated");
//     }

//     if (clean.includes("start scanning")) {
//       toggleMode("emotionMode");
//       alert("🧠 Emotion Mode activated. Camera scanning your emotion.");
//     }
//   };

//   useEffect(() => {
//     const SpeechRecognition = getSpeechRecognition();
//     if (!SpeechRecognition) {
//       console.log("❌ SpeechRecognition not supported");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.continuous = false;
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     recognition.onstart = () => {
//       console.log("🎙️ Voice started");
//       setListening(true);
//     };

//     recognition.onend = () => {
//       console.log("🛑 Voice stopped");
//       setListening(false);
//     };

//     recognition.onresult = (event: any) => {
//       const text = event.results[0][0].transcript;
//       console.log("✅ You said:", text);
//       setTranscript(text);
//       handleCommand(text);
//     };

//     if (listening) {
//       console.log("🔁 Starting recognition");
//       recognition.start();
//     }

//     return () => {
//       console.log("🧹 Cleaning up recognition");
//       recognition.stop();
//     };
//   }, [listening]);

//   return (
//     <div className="mt-8 p-6 border rounded-xl shadow-md bg-white max-w-xl w-full">
//       <h3 className="text-xl font-bold mb-2 text-primary">🗣️ Voice Assistant</h3>

//       <button
//         onClick={() => setListening(!listening)}
//         className={`rounded-full px-6 py-3 font-semibold text-white text-lg shadow transition ${
//           listening ? 'bg-red-500' : 'bg-green-600'
//         }`}
//       >
//         {listening ? '🎙️ Listening…' : '🎤 Speak Command'}
//       </button>

//       {transcript && (
//         <p className="mt-2 text-sm text-muted-foreground">
//           🧾 You said: <span className="font-semibold">{transcript}</span>
//         </p>
//       )}

//       <div className="mt-4 text-sm text-muted-foreground">
//         <h4 className="font-semibold mb-1">Try saying:</h4>
//         <ul className="list-disc list-inside leading-relaxed space-y-1">
//           <li><strong>“Add rice”</strong> – Add item to SmartCart</li>
//           <li><strong>“Start checkout”</strong> – Sign Mode + Grid layout</li>
//           <li><strong>“Go to cart”</strong> – Navigate to Cart</li>
//           <li><strong>“Activate low stim”</strong> – Calming visual mode</li>
//           <li><strong>“Start scanning”</strong> – Turn on Emotion Detection</li>
//         </ul>
//       </div>
//     </div>
//   );
// }




'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserMode } from '@/context/UserModeContext';
import { useCartMemory } from '@/context/CartContext';

const getSpeechRecognition = () => {
  if (typeof window === 'undefined') return null;
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
};

export default function VoiceAssistantPanel({
  addItemToCart,
}: {
  addItemToCart?: (item: string) => void;
}) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const router = useRouter();
  const { toggleMode } = useUserMode();
  const { updateMemory } = useCartMemory();

  const handleCommand = (command: string) => {
    const clean = command.toLowerCase().trim();

    // ✅ Only run addItem if function was passed (e.g. from /cart)
    if (clean.startsWith("add ") && addItemToCart) {
      const item = clean.replace("add ", "").trim();
      if (item.length > 1) {
        addItemToCart(item);
        alert(`🛒 Added "${item}" to your cart.`);
      }
    }

    if (clean.includes("start checkout")) {
      toggleMode("signMode");
      updateMemory({ preferredLayout: "grid" });
      alert("✅ Sign Mode ON + Grid layout set for checkout");
    }

    if (clean.includes("go to cart")) {
      router.push("/cart");
    }

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
    if (!SpeechRecognition) {
      console.log("❌ SpeechRecognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("🎙️ Voice started");
      setListening(true);
    };

    recognition.onend = () => {
      console.log("🛑 Voice stopped");
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      console.log("✅ You said:", text);
      setTranscript(text);
      handleCommand(text);
    };

    if (listening) {
      console.log("🔁 Starting recognition");
      recognition.start();
    }

    return () => {
      console.log("🧹 Cleaning up recognition");
      recognition.stop();
    };
  }, [listening]);

  return (
    <div className="mt-8 p-6 border rounded-xl shadow-md bg-white max-w-xl w-full">
      <h3 className="text-xl font-bold mb-2 text-primary">🗣️ Voice Assistant</h3>

      <button
        onClick={() => setListening(!listening)}
        className={`rounded-full px-6 py-3 font-semibold text-white text-lg shadow transition ${
          listening ? 'bg-red-500' : 'bg-green-600'
        }`}
      >
        {listening ? '🎙️ Listening…' : '🎤 Speak Command'}
      </button>

      {transcript && (
        <p className="mt-2 text-sm text-muted-foreground">
          🧾 You said: <span className="font-semibold">{transcript}</span>
        </p>
      )}

      <div className="mt-4 text-sm text-muted-foreground">
        <h4 className="font-semibold mb-1">Try saying:</h4>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li><strong>“Add rice”</strong> – Add item to SmartCart</li>
          <li><strong>“Start checkout”</strong> – Sign Mode + Grid layout</li>
          <li><strong>“Go to cart”</strong> – Navigate to Cart</li>
          <li><strong>“Activate low stim”</strong> – Calming visual mode</li>
          <li><strong>“Start scanning”</strong> – Turn on Emotion Detection</li>
        </ul>
      </div>
    </div>
  );
}
