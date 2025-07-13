// // // // // // // 'use client';
// // // // // // // import { useCartMemory } from "@/context/CartContext";

// // // // // // // export default function CartPage() {
// // // // // // //   const { memory, updateMemory } = useCartMemory();

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
// // // // // // //       <h1 className="text-3xl font-bold mb-6 text-primary">Your SmartCart Memory</h1>

// // // // // // //       <div className="space-y-6 bg-card rounded-xl p-6 shadow border text-muted-foreground">
// // // // // // //         <div>
// // // // // // //           <strong>Preferred Layout:</strong> {memory.preferredLayout}
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <strong>Stress Triggers:</strong> {memory.stressTriggers.join(", ") || "None"}
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <strong>Visual Preferences:</strong>
// // // // // // //           <ul className="list-disc list-inside ml-4">
// // // // // // //             <li>Contrast: {memory.visualPrefs.contrast}</li>
// // // // // // //             <li>Font Size: {memory.visualPrefs.fontSize}</li>
// // // // // // //           </ul>
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <strong>Dietary Preferences:</strong> {memory.dietaryPrefs.join(", ") || "None"}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <button
// // // // // // //         className="mt-6 bg-chart-1 px-4 py-2 rounded text-white shadow hover:scale-105 transition"
// // // // // // //         onClick={() => updateMemory({
// // // // // // //           stressTriggers: ["crowds", "noise"],
// // // // // // //           visualPrefs: { contrast: "high", fontSize: "large" },
// // // // // // //           dietaryPrefs: ["gluten-free", "vegan"],
// // // // // // //         })}
// // // // // // //       >
// // // // // // //         🔄 Demo: Update Preferences
// // // // // // //       {/* </button> */}
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }


// // // // // // // src/app/cart/page.tsx
// // // // // // 'use client';

// // // // // // import { useUserMode } from '@/context/UserModeContext';
// // // // // // import { useCartMemory } from '@/context/CartContext';
// // // // // // import SignAvatar from '@/components/SignAvatar';
// // // // // // import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';
// // // // // // import EmotionDetector from '@/components/EmotionDetector';
// // // // // // import Link from 'next/link';
// // // // // // import { useState } from 'react';

// // // // // // export default function SmartCartPage() {
// // // // // //   const {
// // // // // //     emotionMode,
// // // // // //     emotionType,
// // // // // //     lowStimMode,
// // // // // //     signMode,
// // // // // //     touchVoiceMode
// // // // // //   } = useUserMode();

// // // // // //   const { memory } = useCartMemory();

// // // // // //   return (
// // // // // //     <main className="min-h-screen py-10 px-6 max-w-5xl mx-auto space-y-8">
// // // // // //       <h1 className="text-4xl font-bold text-primary mb-4">🛒 SmartCart+</h1>

// // // // // //       {/* 💡 Dynamic status summary */}
// // // // // //       <section className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
// // // // // //         <h2 className="text-lg font-semibold mb-2">🧠 Current Modes:</h2>
// // // // // //         <ul className="list-disc list-inside space-y-1">
// // // // // //           <li>Emotion Mode: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
// // // // // //           <li>Low-Stim Mode: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
// // // // // //           <li>Touch/Voice Mode: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
// // // // // //           <li>Sign Mode: <strong>{signMode ? 'On' : 'Off'}</strong></li>
// // // // // //           <li>Preferred Layout: <strong>{memory.preferredLayout}</strong></li>
// // // // // //         </ul>
// // // // // //       </section>

// // // // // //       {/* 🎤 Voice + Emotion */}
// // // // // //       <VoiceAssistantPanel />

// // // // // //       {emotionMode && <EmotionDetector />}

// // // // // //       {/* 🧏 Sign guidance during checkout */}
// // // // // //       {signMode && (
// // // // // //         <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
// // // // // //           <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
// // // // // //           <SignAvatar context="checkout" />
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* 🧾 Demo Cart View */}
// // // // // //       <CartDemo isGrid={memory.preferredLayout === 'grid'} />

// // // // // //       {/* Navigation */}
// // // // // //       <div className="pt-10 text-sm text-muted-foreground text-center">
// // // // // //         <Link href="/" className="underline">← Return Home</Link>
// // // // // //       </div>
// // // // // //     </main>
// // // // // //   );
// // // // // // }

// // // // // // // CartDemo Component (simplified)
// // // // // // function CartDemo({ isGrid }: { isGrid: boolean }) {
// // // // // //   const items = ['Milk', 'Rice', 'Shampoo'];

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2 className="text-2xl font-semibold mb-3">🧾 Your Items</h2>
// // // // // //       <div className={`${isGrid ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
// // // // // //         {items.map((item, i) => (
// // // // // //           <div key={i} className="p-4 bg-card rounded-lg border shadow-sm">
// // // // // //             <h4 className="text-lg font-medium">{item}</h4>
// // // // // //             <p className="text-xs text-muted-foreground">Quantity: 1</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   // );
// // // // // // }
// // // // // // src/app/cart/page.tsx
// // // // // 'use client';

// // // // // import { useState } from 'react';
// // // // // import { useUserMode } from '@/context/UserModeContext';
// // // // // import { useCartMemory } from '@/context/CartContext';
// // // // // import SignAvatar from '@/components/SignAvatar';
// // // // // import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';
// // // // // import EmotionDetector from '@/components/EmotionDetector';
// // // // // import Link from 'next/link';

// // // // // export default function SmartCartPage() {
// // // // //   const {
// // // // //     emotionMode,
// // // // //     emotionType,
// // // // //     lowStimMode,
// // // // //     signMode,
// // // // //     touchVoiceMode
// // // // //   } = useUserMode();

// // // // //   const { memory } = useCartMemory();

// // // // //   const [cartItems, setCartItems] = useState<string[]>(['Milk']);
// // // // //   const [cartPrices, setCartPrices] = useState<{ [item: string]: number }>({ Milk: 30 });

// // // // //   const addItemToCart = (item: string) => {
// // // // //     const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
// // // // //     setCartItems((prev) => [...prev, capitalized]);
// // // // //     setCartPrices((prev) => ({ ...prev, [capitalized]: Math.floor(Math.random() * 100) + 10 }));
// // // // //   };

// // // // //   const total = cartItems.reduce((sum, item) => sum + (cartPrices[item] || 0), 0);

// // // // //   return (
// // // // //     <main className="min-h-screen py-10 px-6 max-w-5xl mx-auto space-y-8">
// // // // //       <h1 className="text-4xl font-bold text-primary mb-4">🛒 SmartCart+</h1>

// // // // //       <section className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
// // // // //         <h2 className="text-lg font-semibold mb-2">🧠 Current Modes:</h2>
// // // // //         <ul className="list-disc list-inside space-y-1">
// // // // //           <li>Emotion Mode: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
// // // // //           <li>Low-Stim Mode: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
// // // // //           <li>Touch/Voice Mode: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
// // // // //           <li>Sign Mode: <strong>{signMode ? 'On' : 'Off'}</strong></li>
// // // // //           <li>Preferred Layout: <strong>{memory.preferredLayout}</strong></li>
// // // // //         </ul>
// // // // //       </section>

// // // // //       <VoiceAssistantPanel addItemToCart={addItemToCart} />

// // // // //       {emotionMode && <EmotionDetector />}

// // // // //       {signMode && (
// // // // //         <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
// // // // //           <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
// // // // //           <SignAvatar context="checkout" />
// // // // //         </div>
// // // // //       )}

// // // // //       <CartDemo isGrid={memory.preferredLayout === 'grid'} items={cartItems} prices={cartPrices} total={total} />

// // // // //       <div className="pt-10 text-sm text-muted-foreground text-center">
// // // // //         <Link href="/" className="underline">← Return Home</Link>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // // function CartDemo({ isGrid, items, prices, total }: {
// // // // //   isGrid: boolean;
// // // // //   items: string[];
// // // // //   prices: { [item: string]: number };
// // // // //   total: number;
// // // // // }) {
// // // // //   return (
// // // // //     <div>
// // // // //       <h2 className="text-2xl font-semibold mb-3">🧾 Your Items</h2>
// // // // //       <div className={`${isGrid ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
// // // // //         {items.map((item, i) => (
// // // // //           <div key={i} className="p-4 bg-card rounded-lg border shadow-sm">
// // // // //             <h4 className="text-lg font-medium">{item}</h4>
// // // // //             <p className="text-xs text-muted-foreground">Price: ₹{prices[item] || 0}</p>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className="mt-6 text-right text-lg font-semibold text-primary">
// // // // //         Total: ₹{total}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // // src/app/cart/page.tsx
// // // 'use client';

// // // import { useState } from 'react';
// // // import { useUserMode } from '@/context/UserModeContext';
// // // import { useCartMemory } from '@/context/CartContext';
// // // import SignAvatar from '@/components/SignAvatar';
// // // import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';
// // // import EmotionDetector from '@/components/EmotionDetector';
// // // import Link from 'next/link';

// // // export default function SmartCartPage() {
// // //   const {
// // //     emotionMode,
// // //     emotionType,
// // //     lowStimMode,
// // //     signMode,
// // //     touchVoiceMode
// // //   } = useUserMode();

// // //   const { memory } = useCartMemory();

// // //   const [cartItems, setCartItems] = useState<string[]>(['Milk']);
// // //   const [cartPrices, setCartPrices] = useState<{ [item: string]: number }>({ Milk: 30 });
// // //   const [newItem, setNewItem] = useState<string>('');

// // //   const addItemToCart = (item: string) => {
// // //     const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
// // //     setCartItems((prev) => [...prev, capitalized]);
// // //     setCartPrices((prev) => ({ ...prev, [capitalized]: Math.floor(Math.random() * 100) + 10 }));
// // //   };

// // //   const handleManualAdd = () => {
// // //     if (newItem.trim().length > 0) {
// // //       addItemToCart(newItem);
// // //       setNewItem('');
// // //     }
// // //   };

// // //   const total = cartItems.reduce((sum, item) => sum + (cartPrices[item] || 0), 0);

// // //   return (
// // //     <main className="min-h-screen py-10 px-6 max-w-5xl mx-auto space-y-8">
// // //       <h1 className="text-4xl font-bold text-primary mb-4">🛒 SmartCart+</h1>

// // //       <section className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
// // //         <h2 className="text-lg font-semibold mb-2">🧠 Current Modes:</h2>
// // //         <ul className="list-disc list-inside space-y-1">
// // //           <li>Emotion Mode: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
// // //           <li>Low-Stim Mode: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
// // //           <li>Touch/Voice Mode: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
// // //           <li>Sign Mode: <strong>{signMode ? 'On' : 'Off'}</strong></li>
// // //           <li>Preferred Layout: <strong>{memory.preferredLayout}</strong></li>
// // //         </ul>
// // //       {/* </section> */}

// // //       <VoiceAssistantPanel addItemToCart={addItemToCart} />

// // //       {/* 🧑‍💻 Manual Add Section */}
// // //       <div className="mt-6 max-w-md">
// // //         <h3 className="text-md font-semibold mb-2 text-primary">✍️ Manually Add Item</h3>
// // //         <div className="flex gap-2">
// // //           <input
// // //             value={newItem}
// // //             onChange={(e) => setNewItem(e.target.value)}
// // //             type="text"
// // //             placeholder="e.g. Shampoo"
// // //             className="w-full px-4 py-2 rounded border"
// // //           />
// // //           <button
// // //             onClick={handleManualAdd}
// // //             className="px-4 py-2 bg-chart-1 text-white rounded shadow"
// // //           >
// // //             Add
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {emotionMode && <EmotionDetector />}

// // //       {signMode && (
// // //         <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
// // //           <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
// // //           <SignAvatar context="checkout" />
// // //         </div>
// // //       )}

// // //       <CartDemo isGrid={memory.preferredLayout === 'grid'} items={cartItems} prices={cartPrices} total={total} />

// // //       <div className="pt-10 text-sm text-muted-foreground text-center">
// // //         <Link href="/" className="underline">← Return Home</Link>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // // function CartDemo({ isGrid, items, prices, total }: {
// // //   isGrid: boolean;
// // //   items: string[];
// // //   prices: { [item: string]: number };
// // //   total: number;
// // // }) {
// // //   return (
// // //     <div>
// // //       <h2 className="text-2xl font-semibold mb-3">🧾 Your Items</h2>
// // //       <div className={`${isGrid ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
// // //         {items.map((item, i) => (
// // //           <div key={i} className="p-4 bg-card rounded-lg border shadow-sm">
// // //             <h4 className="text-lg font-medium">{item}</h4>
// // //             <p className="text-xs text-muted-foreground">Price: ₹{prices[item] || 0}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div className="mt-6 text-right text-lg font-semibold text-primary">
// // //         Total: ₹{total}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { useState } from 'react';
// // import { useUserMode } from '@/context/UserModeContext';
// // import { useCartMemory } from '@/context/CartContext';
// // import SignAvatar from '@/components/SignAvatar';
// // import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';
// // import EmotionDetector from '@/components/EmotionDetector';
// // import Link from 'next/link';

// // export default function SmartCartPage() {
// //   const {
// //     emotionMode,
// //     emotionType,
// //     lowStimMode,
// //     signMode,
// //     touchVoiceMode,
// //   } = useUserMode();

// //   const { memory } = useCartMemory();

// //   const [cartItems, setCartItems] = useState<string[]>(['Milk']);
// //   const [cartPrices, setCartPrices] = useState<{ [item: string]: number }>({ Milk: 30 });
// //   const [newItem, setNewItem] = useState<string>('');

// //   const addItemToCart = (item: string) => {
// //     const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
// //     setCartItems((prev) => [...prev, capitalized]);
// //     setCartPrices((prev) => ({
// //       ...prev,
// //       [capitalized]: Math.floor(Math.random() * 100) + 10,
// //     }));
// //   };

// //   const handleManualAdd = () => {
// //     if (newItem.trim().length > 0) {
// //       addItemToCart(newItem);
// //       setNewItem('');
// //     }
// //   };

// //   const total = cartItems.reduce((sum, item) => sum + (cartPrices[item] || 0), 0);

// //   return (
// //     <main className="min-h-screen py-10 px-6 max-w-5xl mx-auto space-y-8">
// //       <h1 className="text-4xl font-bold text-primary mb-4">🛒 SmartCart+</h1>

// //       {/* Smart status section */}
// //       <section className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
// //         <h2 className="text-lg font-semibold mb-2">🧠 Current Modes:</h2>
// //         <ul className="list-disc list-inside space-y-1">
// //           <li>Emotion Mode: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
// //           <li>Low-Stim Mode: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
// //           <li>Touch/Voice Mode: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
// //           <li>Sign Mode: <strong>{signMode ? 'On' : 'Off'}</strong></li>
// //           <li>Preferred Layout: <strong>{memory.preferredLayout}</strong></li>
// //         </ul>
// //       </section>

// //       {/* 🎤 Voice commands */}
// //       <VoiceAssistantPanel addItemToCart={addItemToCart} />

// //       {/* ✍️ Manual add input */}
// //       <div className="mt-6 max-w-md">
// //         <h3 className="text-md font-semibold mb-2 text-primary">✍️ Manually Add Item</h3>
// //         <div className="flex gap-2">
// //           <input
// //             value={newItem}
// //             onChange={(e) => setNewItem(e.target.value)}
// //             type="text"
// //             placeholder="e.g. Shampoo"
// //             className="w-full px-4 py-2 rounded border"
// //           />
// //           <button
// //             onClick={handleManualAdd}
// //             className="px-4 py-2 bg-chart-1 text-white rounded shadow"
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>

// //       {/* 🧠 Emotion mode scanner */}
// //       {emotionMode && <EmotionDetector />}

// //       {/* 🧏 Sign avatar */}
// //       {signMode && (
// //         <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
// //           <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
// //           <SignAvatar context="checkout" />
// //         </div>
// //       )}

// //       {/* 🛒 Cart Items + Total */}
// //       <CartDemo isGrid={memory.preferredLayout === 'grid'} items={cartItems} prices={cartPrices} total={total} />

// //       {/* ⬅️ Back Link */}
// //       <div className="pt-10 text-sm text-muted-foreground text-center">
// //         <Link href="/" className="underline">← Return Home</Link>
// //       </div>
// //     </main>
// //   );
// // }

// // function CartDemo({
// //   isGrid,
// //   items,
// //   prices,
// //   total,
// // }: {
// //   isGrid: boolean;
// //   items: string[];
// //   prices: { [item: string]: number };
// //   total: number;
// // }) {
// //   return (
// //     <div>
// //       <h2 className="text-2xl font-semibold mb-3">🧾 Your Items</h2>
// //       <div className={`${isGrid ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
// //         {items.map((item, i) => (
// //           <div key={i} className="p-4 bg-card rounded-lg border shadow-sm">
// //             <h4 className="text-lg font-medium">{item}</h4>
// //             <p className="text-xs text-muted-foreground">Price: ₹{prices[item] || 0}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="mt-6 text-right text-lg font-semibold text-primary">
// //         Total: ₹{total}
// //       </div>
// //     </div>
// //   );
// // }



// // // 'use client';

// // // import { useCartMemory } from '@/context/CartContext';
// // // import { useEffect, useState } from 'react';

// // // const demoItems = [
// // //   { id: 1, name: 'Almond Milk', price: 4.99 },
// // //   { id: 2, name: 'Brown Bread', price: 2.49 },
// // //   { id: 3, name: 'Gluten-Free Pasta', price: 5.29 },
// // //   { id: 4, name: 'Oat Cookies', price: 3.75 },
// // // ];

// // // export default function SmartCartPage() {
// // //   const { memory } = useCartMemory();
// // //   const [fontSizeClass, setFontSizeClass] = useState('');
// // //   const [contrastClass, setContrastClass] = useState('');

// // //   // Apply styles based on saved memory
// // //   useEffect(() => {
// // //     if (memory?.visualPrefs?.fontSize === 'large') {
// // //       setFontSizeClass('text-lg');
// // //     } else {
// // //       setFontSizeClass('text-base');
// // //     }

// // //     if (memory?.visualPrefs?.contrast === 'high') {
// // //       setContrastClass('bg-white text-black');
// // //     } else {
// // //       setContrastClass('bg-background text-foreground');
// // //     }
// // //   }, [memory]);

// // //   return (
// // //     <main
// // //       className={`min-h-screen p-8 transition-all ${fontSizeClass} ${contrastClass}`}
// // //     >
// // //       <h1 className="text-3xl font-bold mb-4 text-primary">🛒 Your SmartCart</h1>

// // //       {/* Layout Info */}
// // //       <div className="mb-6 text-sm text-muted-foreground">
// // //         <p>🧠 Layout: <strong>{memory.preferredLayout}</strong></p>
// // //         <p>🎨 Contrast: <strong>{memory.visualPrefs.contrast}</strong></p>
// // //         <p>🔠 Font Size: <strong>{memory.visualPrefs.fontSize}</strong></p>
// // //         <p>🥗 Dietary Prefs: <strong>{memory.dietaryPrefs.join(', ') || 'None'}</strong></p>
// // //       </div>

// // //       {/* Cart Items */}
// // //       <div
// // //         className={
// // //           memory.preferredLayout === 'grid'
// // //             ? 'grid grid-cols-2 md:grid-cols-3 gap-4'
// // //             : 'flex flex-col gap-4'
// // //         }
// // //       >
// // //         {demoItems.map((item) => (
// // //           <div
// // //             key={item.id}
// // //             className="p-4 border rounded-lg shadow hover:shadow-md transition"
// // //           >
// // //             <h2 className="font-semibold">{item.name}</h2>
// // //             <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </main>
// // //   );
// // // }



// 'use client';

// import { useState, useEffect } from 'react';
// import { useUserMode } from '@/context/UserModeContext';
// import { useCartMemory } from '@/context/CartContext';
// import SignAvatar from '@/components/SignAvatar';
// import VoiceAssistantPanel from '@/components/VoiceAssistantPanel';
// import EmotionDetector from '@/components/EmotionDetector';
// import Link from 'next/link';

// export default function SmartCartPage() {
//   const {
//     emotionMode,
//     emotionType,
//     lowStimMode,
//     signMode,
//     touchVoiceMode,
//   } = useUserMode();

//   const { memory } = useCartMemory();

//   const [cartItems, setCartItems] = useState<string[]>(['Milk']);
//   const [cartPrices, setCartPrices] = useState<{ [item: string]: number }>({ Milk: 30 });
//   const [newItem, setNewItem] = useState<string>('');

//   const addItemToCart = (item: string) => {
//     const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
//     setCartItems((prev) => [...prev, capitalized]);
//     setCartPrices((prev) => ({
//       ...prev,
//       [capitalized]: Math.floor(Math.random() * 100) + 10,
//     }));
//   };

//   const handleManualAdd = () => {
//     if (newItem.trim().length > 0) {
//       addItemToCart(newItem);
//       setNewItem('');
//     }
//   };

//   const total = cartItems.reduce((sum, item) => sum + (cartPrices[item] || 0), 0);

//   // Apply visual preferences
//   useEffect(() => {
//     document.body.classList.toggle('lowstim', lowStimMode);
//   }, [lowStimMode]);

//   return (
//     <main className={`min-h-screen py-10 px-6 max-w-5xl mx-auto space-y-8 ${memory.visualPrefs.fontSize === 'large' ? 'text-lg' : 'text-base'} ${memory.visualPrefs.contrast === 'high' ? 'bg-white text-black' : 'bg-background text-foreground'}`}>
//       <h1 className="text-4xl font-bold text-primary mb-4">🛒 SmartCart+</h1>

//       {/* Smart status section */}
//       <section className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
//         <h2 className="text-lg font-semibold mb-2">🧠 Current Modes:</h2>
//         <ul className="list-disc list-inside space-y-1">
//           <li>Emotion Mode: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
//           <li>Low-Stim Mode: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
//           <li>Touch/Voice Mode: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
//           <li>Sign Mode: <strong>{signMode ? 'On' : 'Off'}</strong></li>
//           <li>Preferred Layout: <strong>{memory.preferredLayout}</strong></li>
//           <li>Contrast: <strong>{memory.visualPrefs.contrast}</strong></li>
//           <li>Font Size: <strong>{memory.visualPrefs.fontSize}</strong></li>
//         </ul>
//       </section>

//       {/* 🎤 Voice commands */}
//       <VoiceAssistantPanel addItemToCart={addItemToCart} />

//       {/* ✍️ Manual add input */}
//       <div className="mt-6 max-w-md">
//         <h3 className="text-md font-semibold mb-2 text-primary">✍️ Manually Add Item</h3>
//         <div className="flex gap-2">
//           <input
//             value={newItem}
//             onChange={(e) => setNewItem(e.target.value)}
//             type="text"
//             placeholder="e.g. Shampoo"
//             className="w-full px-4 py-2 rounded border"
//           />
//           <button
//             onClick={handleManualAdd}
//             className="px-4 py-2 bg-chart-1 text-white rounded shadow"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* 🧠 Emotion mode scanner */}
//       {emotionMode && <EmotionDetector />}

//       {/* 🧏 Sign avatar */}
//       {signMode && (
//         <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
//           <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
//           <SignAvatar context="checkout" />
//         </div>
//       )}

//       {/* 🛒 Cart Items + Total */}
//       <CartDemo isGrid={memory.preferredLayout === 'grid'} items={cartItems} prices={cartPrices} total={total} />

//       {/* ⬅️ Back Link */}
//       <div className="pt-10 text-sm text-muted-foreground text-center">
//         <Link href="/" className="underline">← Return Home</Link>
//       </div>
//     </main>
//   );
// }

// function CartDemo({
//   isGrid,
//   items,
//   prices,
//   total,
// }: {
//   isGrid: boolean;
//   items: string[];
//   prices: { [item: string]: number };
//   total: number;
// }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-3">🧾 Your Items</h2>
//       <div className={`${isGrid ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
//         {items.map((item, i) => (
//           <div key={i} className="p-4 bg-card rounded-lg border shadow-sm">
//             <h4 className="text-lg font-medium">{item}</h4>
//             <p className="text-xs text-muted-foreground">Price: ₹{prices[item] || 0}</p>
//           </div>
//         ))}
//       </div>
//       <div className="mt-6 text-right text-lg font-semibold text-primary">
//         Total: ₹{total}
//       </div>
//     </div>
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
    <main className={`min-h-screen py-10 px-6 max-w-5xl mx-auto space-y-8 transition-all duration-500 ${dopamineTheme}`}>
      <h1 className="text-5xl font-extrabold tracking-tight text-chart-1 animate-pulse">
        🧠 Welcome to SmartCart+
      </h1>

      <section className="rounded-xl p-4 bg-muted border text-sm shadow-sm">
        <h2 className="text-lg font-semibold mb-2">💡 Live Modes:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Emotion: <strong>{emotionMode ? emotionType ?? 'Active' : 'Off'}</strong></li>
          <li>Low-Stim: <strong>{lowStimMode ? 'On' : 'Off'}</strong></li>
          <li>Voice: <strong>{touchVoiceMode ? 'On' : 'Off'}</strong></li>
          <li>Sign Mode: <strong>{signMode ? 'On' : 'Off'}</strong></li>
          <li>Layout: <strong>{memory.preferredLayout}</strong></li>
        </ul>
      </section>

      <VoiceAssistantPanel addItemToCart={addItemToCart} />

      <div className="mt-6 max-w-md">
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

      {emotionMode && <EmotionDetector />}

      {signMode && (
        <div className="border border-purple-200 p-4 bg-purple-50 rounded-xl">
          <h3 className="text-lg font-bold text-purple-700 mb-2">🧏 Sign Language Guidance:</h3>
          <SignAvatar context="checkout" />
        </div>
      )}

      <CartDemo isGrid={memory.preferredLayout === 'grid'} items={cartItems} prices={cartPrices} total={total} />

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
