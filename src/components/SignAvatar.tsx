"use client";
import { useUserMode } from "@/context/UserModeContext";

export default function SignAvatar() {
  const { signMode } = useUserMode();

  if (!signMode) return null;

  return (
    <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-300 shadow-sm max-w-xl w-full">
      <h3 className="text-lg font-semibold text-purple-900 mb-2">🧏 Sign Language Mode Active</h3>
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-white border rounded-full flex items-center justify-center text-3xl shadow-sm">
          🤟
        </div>
        <p className="text-muted-foreground text-sm">
          "Please scan your item or proceed to the self-checkout station."
        </p>
      </div>
    </div>
  );
}
