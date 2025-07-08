// // // "use client";
// // // import { useUserMode } from "@/context/UserModeContext";

// // // export default function SignAvatar() {
// // //   const { signMode } = useUserMode();

// // //   if (!signMode) return null;

// // //   return (
// // //     <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-300 shadow-sm max-w-xl w-full">
// // //       <h3 className="text-lg font-semibold text-purple-900 mb-2">🧏 Sign Language Mode Active</h3>
// // //       <div className="flex items-center gap-4">
// // //         <div className="w-20 h-20 bg-white border rounded-full flex items-center justify-center text-3xl shadow-sm">
// // //           🤟
// // //         </div>
// // //         <p className="text-muted-foreground text-sm">
// // //           "Please scan your item or proceed to the self-checkout station."
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // "use client";
// // // import { useUserMode } from "@/context/UserModeContext";

// // // export default function SignAvatar() {
// // //   const { signMode } = useUserMode();

// // //   if (!signMode) return null;

// // //   return (
// // //     <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-300 shadow-sm max-w-xl w-full">
// // //       <h3 className="text-lg font-semibold text-purple-900 mb-2">🧏 Sign Language Mode Active</h3>
// // //       <div className="flex items-center gap-4">
// // //         <video
// // //           autoPlay
// // //           loop
// // //           muted
// // //           playsInline
// // //           className="w-32 h-32 rounded-lg border shadow"
// // //         >
// // //           <source src="/videos/sign-instruction.mp4" type="video/mp4" />
// // //           Your browser does not support the video tag.
// // //         </video>

// // //         <p className="text-muted-foreground text-sm">
// // //           Real-time instruction shown in sign language: "Please scan your item or proceed to the self-checkout station."
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

"use client";
import { useUserMode } from "@/context/UserModeContext";
import { useSignContext } from "@/context/SignContext";

type SignAvatarProps = {
  context: "general" |"greeting" | "checkout" | "error" | "thankYou";
};

const contextMap: Record<SignAvatarProps["context"], { video: string; text: string }> = {
  general:{
    video: "/videos/sign-instruction.mp4",
    text: "Welcome to SmartCart. Here you can add the general.",
  },
  greeting: {
    video: "/videos/sign-greeting.mp4",
    text: "Welcome to SmartCart. How can I assist you today?",
  },
  checkout: {
    video: "/videos/sign-checkout.mp4",
    text: "Please scan your item or proceed to the self-checkout station.",
  },
  error: {
    video: "/videos/sign-error.mp4",
    text: "Something went wrong. Please ask for assistance.",
  },
  thankYou: {
    video: "/videos/sign-thankyou.mp4",
    text: "Thank you for using SafeCart+. Have a great day!",
  },
};

export default function SignAvatar({ context }: SignAvatarProps) {
  const { signMode } = useUserMode();
  const { signContext } = useSignContext();
  
  if (!signMode) return null;

  const { video, text } = contextMap[context];

  return (
    <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-300 shadow-sm max-w-xl w-full">
      <h3 className="text-lg font-semibold text-purple-900 mb-2">🧏 Sign Language Mode Active</h3>
      <div className="flex items-center gap-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-32 h-32 rounded-lg border shadow"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p className="text-muted-foreground text-sm">{text}</p>
      </div>
    </div>
  );
}

// "use client";
// import { useUserMode } from "@/context/UserModeContext";
// import { useSignContext } from "@/context/SignContext";

// type SignAvatarProps = {
//   message?: string;
// };

// const contextMap = {
//   greeting: {
//     video: "/videos/sign-greeting.mp4",
//     text: "Welcome to SmartCart. How can I assist you today?",
//   },
//   checkout: {
//     video: "/videos/sign-checkout.mp4",
//     text: "Please scan your item or proceed to the self-checkout station.",
//   },
//   error: {
//     video: "/videos/sign-error.mp4",
//     text: "Something went wrong. Please ask for assistance.",
//   },
//   thankYou: {
//     video: "/videos/sign-thankyou.mp4",
//     text: "Thank you for using SafeCart+. Have a great day!",
//   },
// };

// export default function SignAvatar({ message }: SignAvatarProps) {
//   const { signMode } = useUserMode();
//   const { signContext } = useSignContext();

//   if (!signMode) return null;

//   // Custom message fallback
//   const isCustom = !!message;
//   const videoSrc = isCustom
//     ? "/videos/sign-generic.mp4"
//     : contextMap[signContext]?.video;

//   const displayText = message || contextMap[signContext]?.text || "";

//   return (
//     <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-300 shadow-sm max-w-xl w-full">
//       <h3 className="text-lg font-semibold text-purple-900 mb-2">🧏 Sign Language Mode Active</h3>
//       <div className="flex items-center gap-4">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-32 h-32 rounded-lg border shadow"
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <p className="text-muted-foreground text-sm">{displayText}</p>
//       </div>
//     </div>
//   );
// }




// import { useUserMode } from "@/context/UserModeContext";
// import { useSignContext } from "@/context/SignContext";

// type SignAvatarProps = {
//   message?: string;
// };

// const contextMap = {
//   greeting: {
//     video: "/videos/sign-greeting.mp4",
//     text: "Welcome to SmartCart. How can I assist you today?",
//   },
//   checkout: {
//     video: "/videos/sign-checkout.mp4",
//     text: "Please scan your item or proceed to the self-checkout station.",
//   },
//   error: {
//     video: "/videos/sign-error.mp4",
//     text: "Something went wrong. Please ask for assistance.",
//   },
//   thankYou: {
//     video: "/videos/sign-thankyou.mp4",
//     text: "Thank you for using SafeCart+. Have a great day!",
//   },
// } as const;

// type SignContextKey = keyof typeof contextMap;

// export default function SignAvatar({ message }: SignAvatarProps) {
//   const { signMode } = useUserMode();
//   const { signContext } = useSignContext();

//   if (!signMode) return null;

//   const isCustom = !!message;

//   const fallbackContext: SignContextKey = "greeting";
//   const currentContext = (signContext in contextMap ? signContext : fallbackContext) as SignContextKey;

//   const videoSrc = isCustom
//     ? "/videos/sign-generic.mp4"
//     : contextMap[currentContext].video;

//   const displayText = message || contextMap[currentContext].text;

//   return (
//     <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-300 shadow-sm max-w-xl w-full">
//       <h3 className="text-lg font-semibold text-purple-900 mb-2">🧏 Sign Language Mode Active</h3>
//       <div className="flex items-center gap-4">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-32 h-32 rounded-lg border shadow"
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <p className="text-muted-foreground text-sm">{displayText}</p>
//       </div>
//     </div>
//   );
// }
