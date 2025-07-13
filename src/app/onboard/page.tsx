// // 'use client';
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { useCartMemory } from "@/context/CartContext";

// // const stressOptions = ["Crowds", "Noise", "Bright Lights"];
// // const dietaryOptions = ["Vegan", "Gluten-Free", "Nut-Free", "Dairy-Free"];

// // export default function OnboardPage() {
// //   const { updateMemory } = useCartMemory();
// //   const router = useRouter();

// //   const [layout, setLayout] = useState("grid");
// //   const [stress, setStress] = useState<string[]>([]);
// //   const [contrast, setContrast] = useState("normal");
// //   const [fontSize, setFontSize] = useState("medium");
// //   const [dietary, setDietary] = useState<string[]>([]);

// //   const toggleMulti = (value: string, list: string[], setList: any) => {
// //     setList(
// //       list.includes(value)
// //         ? list.filter((v) => v !== value)
// //         : [...list, value]
// //     );
// //   };

// //   const handleSubmit = () => {
// //     updateMemory({
// //       preferredLayout: layout,
// //       stressTriggers: stress,
// //       dietaryPrefs: dietary,
// //       visualPrefs: { contrast, fontSize },
// //     });
// //     router.push("/cart");
// //   };

// //   return (
// //     <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto space-y-8">
// //       <h1 className="text-3xl font-bold text-primary">🧠 Personalize Your SmartCart</h1>

// //       {/* Layout Preference */}
// //       <div>
// //         <label className="font-medium block mb-2">Preferred Layout:</label>
// //         <select
// //           value={layout}
// //           onChange={(e) => setLayout(e.target.value)}
// //           className="px-4 py-2 border rounded w-full"
// //         >
// //           <option value="grid">Grid</option>
// //           <option value="list">List</option>
// //         </select>
// //       </div>

// //       {/* Stress Triggers */}
// //       <div>
// //         <label className="font-medium block mb-2">Stress Triggers:</label>
// //         <div className="flex flex-wrap gap-2">
// //           {stressOptions.map((option) => (
// //             <button
// //               key={option}
// //               onClick={() => toggleMulti(option, stress, setStress)}
// //               className={`px-3 py-1 rounded-full border ${
// //                 stress.includes(option)
// //                   ? "bg-chart-1 text-white"
// //                   : "bg-background text-muted-foreground"
// //               }`}
// //             >
// //               {option}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Visual Preferences */}
// //       <div>
// //         <label className="font-medium block mb-2">Contrast:</label>
// //         <select
// //           value={contrast}
// //           onChange={(e) => setContrast(e.target.value)}
// //           className="px-4 py-2 border rounded w-full"
// //         >
// //           <option value="normal">Normal</option>
// //           <option value="high">High Contrast</option>
// //         </select>

// //         <label className="font-medium block mt-4 mb-2">Font Size:</label>
// //         <select
// //           value={fontSize}
// //           onChange={(e) => setFontSize(e.target.value)}
// //           className="px-4 py-2 border rounded w-full"
// //         >
// //           <option value="small">Small</option>
// //           <option value="medium">Medium</option>
// //           <option value="large">Large</option>
// //         </select>
// //       </div>

// //       {/* Dietary Preferences */}
// //       <div>
// //         <label className="font-medium block mb-2">Dietary Preferences:</label>
// //         <div className="flex flex-wrap gap-2">
// //           {dietaryOptions.map((option) => (
// //             <button
// //               key={option}
// //               onClick={() => toggleMulti(option, dietary, setDietary)}
// //               className={`px-3 py-1 rounded-full border ${
// //                 dietary.includes(option)
// //                   ? "bg-chart-1 text-white"
// //                   : "bg-background text-muted-foreground"
// //               }`}
// //             >
// //               {option}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <button
// //         onClick={handleSubmit}
// //         className="mt-4 bg-chart-1 px-6 py-2 rounded text-white hover:scale-105 transition"
// //       >
// //         Save Preferences → Go to SmartCart
// //       </button>
// //     </main>
// //   );
// // }



// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCartMemory } from '@/context/CartContext';

// const layoutOptions = [
//   { label: 'Grid', icon: '🔲' },
//   { label: 'List', icon: '📄' },
// ];

// const triggers = ['Crowds', 'Noise', 'Bright Lights'];
// const contrasts = ['Normal', 'High'];
// const fontSizes = ['Medium', 'Large'];
// const dietaryOptions = ['Vegan', 'Gluten-Free', 'Nut-Free', 'Dairy-Free'];

// export default function OnboardPage() {
//   const router = useRouter();
//   const { updateMemory } = useCartMemory();

//   const [layout, setLayout] = useState('Grid');
//   const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
//   const [contrast, setContrast] = useState('Normal');
//   const [fontSize, setFontSize] = useState('Medium');
//   const [dietaryPrefs, setDietaryPrefs] = useState<string[]>([]);
//   const [saved, setSaved] = useState(false);

//   const toggleItem = (item: string, list: string[], setter: (val: string[]) => void) => {
//     setter(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
//   };

//   const handleSave = () => {
//     updateMemory({
//       preferredLayout: layout.toLowerCase(),
//       stressTriggers: selectedTriggers,
//       visualPrefs: {
//         contrast: contrast.toLowerCase(),
//         fontSize: fontSize.toLowerCase(),
//       },
//       dietaryPrefs,
//     });
//     setSaved(true);
//     setTimeout(() => router.push('/cart'), 1200);
//   };

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-background">
//       <div className="max-w-xl w-full space-y-6">
//         <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
//           🧠 Personalize Your SmartCart
//         </h1>

//         <div className="space-y-1">
//           <label className="font-medium text-sm">Preferred Layout:</label>
//           <div className="flex gap-3">
//             {layoutOptions.map(opt => (
//               <button
//                 key={opt.label}
//                 onClick={() => setLayout(opt.label)}
//                 className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all
//                   ${layout === opt.label ? 'bg-chart-1 text-white shadow' : 'bg-muted text-foreground'}`}
//               >
//                 <span>{opt.icon}</span> {opt.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="font-medium text-sm mb-1 block">Stress Triggers:</label>
//           <div className="flex flex-wrap gap-2">
//             {triggers.map(t => (
//               <button
//                 key={t}
//                 onClick={() => toggleItem(t, selectedTriggers, setSelectedTriggers)}
//                 className={`px-3 py-1 rounded-full text-sm border transition-all
//                   ${selectedTriggers.includes(t) ? 'bg-red-100 border-red-300 text-red-700' : 'bg-muted text-muted-foreground'}`}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 gap-4">
//           <div>
//             <label className="font-medium text-sm mb-1 block">Contrast:</label>
//             <select
//               value={contrast}
//               onChange={e => setContrast(e.target.value)}
//               className="w-full border rounded-md px-3 py-2 text-sm"
//             >
//               {contrasts.map(c => <option key={c}>{c}</option>)}
//             </select>
//           </div>
//           <div>
//             <label className="font-medium text-sm mb-1 block">Font Size:</label>
//             <select
//               value={fontSize}
//               onChange={e => setFontSize(e.target.value)}
//               className="w-full border rounded-md px-3 py-2 text-sm"
//             >
//               {fontSizes.map(f => <option key={f}>{f}</option>)}
//             </select>
//           </div>
//         </div>

//         <div>
//           <label className="font-medium text-sm mb-1 block">Dietary Preferences:</label>
//           <div className="flex flex-wrap gap-2">
//             {dietaryOptions.map(opt => (
//               <button
//                 key={opt}
//                 onClick={() => toggleItem(opt, dietaryPrefs, setDietaryPrefs)}
//                 className={`px-3 py-1 rounded-full text-sm border transition-all
//                   ${dietaryPrefs.includes(opt) ? 'bg-green-100 border-green-300 text-green-700' : 'bg-muted text-muted-foreground'}`}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={handleSave}
//           className="mt-4 w-full bg-chart-1 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
//         >
//           {saved ? '🎉 Preferences Saved!' : 'Save Preferences → Go to SmartCart'}
//         </button>
//       </div>
//     </main>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { useUserMode } from '@/context/UserModeContext';
import { useCartMemory } from '@/context/CartContext';
import SignAvatar from '@/components/SignAvatar';
import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';
import EmotionDetector from '@/components/EmotionDetector';
import Link from 'next/link';

export default function SmartCartPage() {
  const {
    emotionMode,
    emotionType,
    lowStimMode,
    signMode,
    touchVoiceMode,
  } = useUserMode();

  const { memory } = useCartMemory();

  const [cartItems, setCartItems] = useState<string[]>(['Milk']);
  const [cartPrices, setCartPrices] = useState<{ [item: string]: number }>({ Milk: 30 });
  const [newItem, setNewItem] = useState<string>('');
  const [dopamineTheme, setDopamineTheme] = useState<string>('');

  const addItemToCart = (item: string) => {
    const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
    setCartItems((prev) => [...prev, capitalized]);
    setCartPrices((prev) => ({
      ...prev,
      [capitalized]: Math.floor(Math.random() * 100) + 10,
    }));
  };

  const handleManualAdd = () => {
    if (newItem.trim().length > 0) {
      addItemToCart(newItem);
      setNewItem('');
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (cartPrices[item] || 0), 0);

  useEffect(() => {
    if (!emotionMode) return;
    switch (emotionType) {
      case 'calm':
        setDopamineTheme('bg-blue-50 text-blue-900');
        break;
      case 'stressed':
        setDopamineTheme('bg-red-100 text-red-900');
        break;
      case 'focused':
        setDopamineTheme('bg-yellow-50 text-yellow-900');
        break;
      default:
        setDopamineTheme('');
    }
  }, [emotionType, emotionMode]);

  return (
    <main className={`min-h-screen py-16 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto space-y-12 transition-all duration-500 ${dopamineTheme}`}>
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20">
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-chart-1 animate-pulse">
            Personalize SmartCart
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Your personalized, neuroadaptive, and privacy-focused shopping assistant. Shop safely, smartly, and seamlessly—tailored just for you.
          </p>
          {/* <div className="space-x-4">
            <Link href="/features" className="bg-chart-1 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              Learn More
            </Link>
            <Link href="/onboard" className="bg-muted border border-border text-foreground px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              Personalize SmartCart
            </Link>
          </div> */}
        </div>

        {/* <div className="flex-1">
          <div className="w-72 h-72 md:w-80 md:h-80 bg-muted rounded-3xl flex items-center justify-center shadow-xl border border-border">
            <span className="text-7xl md:text-8xl" role="img" aria-label="cart">🛒</span>
          </div>
        </div> */}
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
            <h2 className="text-lg font-semibold mb-2">💡 Live Modes</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Emotion Mode: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
              <li>Low-Stim: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
              <li>Voice Assist: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
              <li>Sign Support: <strong>{signMode ? 'On' : 'Off'}</strong></li>
              <li>Layout: <strong>{memory.preferredLayout}</strong></li>
            </ul>
          </div>

          <VoiceAssistantPanel addItemToCart={addItemToCart} />

          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2 text-primary">✍️ Manually Add Item</h3>
            <div className="flex gap-2">
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                placeholder="e.g. Shampoo"
                className="w-full px-4 py-2 rounded border"
              />
              <button
                onClick={handleManualAdd}
                className="px-4 py-2 bg-chart-1 text-white rounded shadow hover:scale-105 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {emotionMode && <EmotionDetector />}

          {signMode && (
            <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
              <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
              <SignAvatar context="checkout" />
            </div>
          )}

          <CartDemo
            isGrid={memory.preferredLayout === 'grid'}
            items={cartItems}
            prices={cartPrices}
            total={total}
          />
        </div>
      </section>

      <div className="pt-10 text-sm text-muted-foreground text-center">
        <Link href="/" className="underline">← Return Home</Link>
      </div>
    </main>
  );
}

function CartDemo({
  isGrid,
  items,
  prices,
  total,
}: {
  isGrid: boolean;
  items: string[];
  prices: { [item: string]: number };
  total: number;
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">🧾 Your Items</h2>
      <div className={`${isGrid ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
        {items.map((item, i) => (
          <div key={i} className="p-4 bg-card rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium">{item}</h4>
            <p className="text-xs text-muted-foreground">Price: ₹{prices[item] || 0}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right text-lg font-semibold text-primary">
        Total: ₹{total}
      </div>
    </div>
  );
}