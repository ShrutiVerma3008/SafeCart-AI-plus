'use client';
import { useCartMemory } from '@/context/CartContext';

export default function TouchVoiceLayoutDemo() {
  const { memory } = useCartMemory();
  const isGrid = memory.preferredLayout === 'grid';

  return (
    <section className="mt-8 w-full max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-primary text-center">
        🖐️ Layout Preference: {isGrid ? 'Grid View' : 'List View'}
      </h2>

      <div className={`gap-4 ${isGrid ? 'grid grid-cols-2' : 'flex flex-col'}`}>
        <div className="p-4 bg-card border rounded shadow">🛒 Item A</div>
        <div className="p-4 bg-card border rounded shadow">🛍️ Item B</div>
        <div className="p-4 bg-card border rounded shadow">📦 Item C</div>
      </div>
    </section>
  );
}
