// // export default function PrivacyPage() {
// //   return (
// //     <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Copilot</h1>
// //       <p className="text-muted-foreground mb-4">
// //         This AI assistant informs you in real-time if your data is being tracked and lets you opt-out immediately.
// //       </p>
// //       <div className="rounded-xl border p-6 shadow-md bg-card text-muted-foreground">
// //         🔐 Simulated privacy alert and opt-out toggles will appear here.
// //       </div>
// //     </main>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';

// export default function ClientBody() {
//   const [cameraAllowed, setCameraAllowed] = useState<boolean | null>(null);
//   const [micAllowed, setMicAllowed] = useState<boolean | null>(null);
//   const [tabFocused, setTabFocused] = useState(true);
//   const [clipboardAccessed, setClipboardAccessed] = useState(false);
//   const [privacyMode, setPrivacyMode] = useState(false);

//   const [toast, setToast] = useState<string | null>(null);

//     useEffect(() => {
//       if (!tabFocused) {
//         setToast("🔒 You're not on this tab. Watch out for background access.");
//       }
//     }, [tabFocused]);

//     useEffect(() => {
//       if (clipboardAccessed) {
//         setToast("📋 Your clipboard was accessed!");
//       }
//     }, [clipboardAccessed]);


//   // 🔍 Detect camera permission
//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(() => setCameraAllowed(true))
//       .catch(() => setCameraAllowed(false));

//     navigator.mediaDevices.getUserMedia({ audio: true })
//       .then(() => setMicAllowed(true))
//       .catch(() => setMicAllowed(false));
//   }, []);

//   // 🧠 Tab focus monitor
//   useEffect(() => {
//     const handleFocus = () => setTabFocused(true);
//     const handleBlur = () => setTabFocused(false);
//     window.addEventListener("focus", handleFocus);
//     window.addEventListener("blur", handleBlur);
//     return () => {
//       window.removeEventListener("focus", handleFocus);
//       window.removeEventListener("blur", handleBlur);
//     };
//   }, []);

//   // 🕵️ Device fingerprint check
//     useEffect(() => {
//       const suspicious =
//         navigator.hardwareConcurrency < 2 ||
//         navigator.userAgent.includes('Headless') ||
//         !navigator.languages ||
//         navigator.maxTouchPoints === 0;

//       if (suspicious) {
//         alert("🚨 Possible spoofed or headless browser detected!");
//       }
//     }, []);

//     // 🌐 Referrer security check
//       useEffect(() => {
//         const ref = document.referrer;
//         if (ref && !ref.includes(window.location.hostname)) {
//           alert(`⚠️ You arrived from: ${ref}\nThis might be an unsafe source.`);
//         }
//       }, []);


//   // 📋 Clipboard watcher (simulate)
//   useEffect(() => {
//     const handlePaste = () => setClipboardAccessed(true);
//     window.addEventListener("paste", handlePaste);
//     return () => window.removeEventListener("paste", handlePaste);
//   }, []);

//   const togglePrivacyMode = () => {
//     setPrivacyMode((prev) => !prev);
//     if (!privacyMode) {
//       localStorage.clear();
//       navigator.clipboard.writeText('');
//     }
//   };

//   return (
//     <main className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-muted px-4 py-6 border-r">
//         <h2 className="text-xl font-bold mb-4">🛡️ Privacy Copilot</h2>
//         <div className="space-y-4 text-sm">
//           <div>
//             <label className="font-semibold">Privacy Mode</label>
//             <div className="flex items-center gap-2 mt-1">
//               <input
//                 type="checkbox"
//                 checked={privacyMode}
//                 onChange={togglePrivacyMode}
//               />
//               <span>{privacyMode ? "Enabled" : "Disabled"}</span>
//             </div>
//           </div>
//           <div>
//             <p>Camera: <span className={cameraAllowed ? 'text-green-600' : 'text-red-600'}>{cameraAllowed === null ? 'Checking...' : (cameraAllowed ? 'Allowed' : 'Blocked')}</span></p>
//             <p>Microphone: <span className={micAllowed ? 'text-green-600' : 'text-red-600'}>{micAllowed === null ? 'Checking...' : (micAllowed ? 'Allowed' : 'Blocked')}</span></p>
//           </div>
//         </div>
//       </aside>

//     {/* 🧾 Storage Summary */}
//       <section className="mb-6">
//         <h2 className="text-xl font-semibold text-primary mb-2">📦 Data Stored in Browser</h2>
//         <div className="text-sm bg-muted p-4 rounded border">
//           <p><strong>localStorage Items:</strong> {Object.keys(localStorage).length}</p>
//           <ul className="list-disc list-inside mt-2 space-y-1">
//             {Object.entries(localStorage).map(([key, val], i) => (
//               <li key={i}><code>{key}</code>: {val}</li>
//             ))}
//           </ul>
//           <p className="mt-4"><strong>Cookies:</strong> {document.cookie || 'None'}</p>
//         </div>
//       </section>


//       {/* Main privacy alerts panel */}
//       <section className="flex-1 px-8 py-10 space-y-6">
//         <h1 className="text-3xl font-bold text-primary mb-6">🔍 Live Privacy Checks</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <PrivacyCard
//             title="📷 Camera Access"
//             status={cameraAllowed === true ? 'Allowed' : cameraAllowed === false ? 'Blocked' : 'Checking...'}
//             critical={cameraAllowed === true}
//           />
//           <PrivacyCard
//             title="🎙️ Microphone Access"
//             status={micAllowed === true ? 'Allowed' : micAllowed === false ? 'Blocked' : 'Checking...'}
//             critical={micAllowed === true}
//           />
//           <PrivacyCard
//             title="🧭 Tab Visibility"
//             status={tabFocused ? 'Active Tab' : 'Not Focused'}
//             critical={!tabFocused}
//           />
//           <PrivacyCard
//             title="📋 Clipboard Activity"
//             status={clipboardAccessed ? 'Accessed' : 'No Paste Yet'}
//             critical={clipboardAccessed}
//           />
//         </div>
//       </section>
//     </main>
//     // {/* 🔔 Toast alert */}
//     {toast && (
//       <div className="fixed bottom-4 right-4 bg-red-600 text-white text-sm px-4 py-2 rounded shadow-lg z-50">
//         {toast}
//         <button className="ml-3 text-xs underline" onClick={() => setToast(null)}>Dismiss</button>
//       </div>
//     )}

//   );
// }

// function PrivacyCard({ title, status, critical }: { title: string; status: string; critical: boolean }) {
//   return (
//     <div className={`rounded-xl p-5 border shadow-sm ${critical ? 'bg-red-50 border-red-300' : 'bg-green-50 border-green-300'}`}>
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className={`mt-2 text-sm ${critical ? 'text-red-700' : 'text-green-700'}`}>
//         {status}
//       </p>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

export default function ClientBody() {
  const [cameraAllowed, setCameraAllowed] = useState<boolean | null>(null);
  const [micAllowed, setMicAllowed] = useState<boolean | null>(null);
  const [tabFocused, setTabFocused] = useState(true);
  const [clipboardAccessed, setClipboardAccessed] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const hasSuggestions = !privacyMode || cameraAllowed || micAllowed || clipboardAccessed || !tabFocused;

  function getInlineSuggestions({
    cameraAllowed,
    micAllowed,
    clipboardAccessed,
    tabFocused
  }: {
    cameraAllowed: boolean | null;
    micAllowed: boolean | null;
    clipboardAccessed: boolean;
    tabFocused: boolean;
  }) {
    const tips: string[] = [];

    if (cameraAllowed) tips.push("🔍 Don’t forget to turn off the camera after scanning.");
    if (micAllowed) tips.push("🎤 Keep your microphone off unless you're using voice input.");
    if (clipboardAccessed) tips.push("📋 Avoid copying passwords or personal data.");
    if (!tabFocused) tips.push("⚠️ This tab is out of focus. Watch out for background tracking.");

    return tips;
  }


  // 🔍 Detect camera/mic permissions
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setCameraAllowed(true))
      .catch(() => setCameraAllowed(false));

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => setMicAllowed(true))
      .catch(() => setMicAllowed(false));
  }, []);

  // 🧠 Tab focus monitor
  useEffect(() => {
    const handleFocus = () => setTabFocused(true);
    const handleBlur = () => setTabFocused(false);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  // 📋 Clipboard watcher
  useEffect(() => {
    const handlePaste = () => setClipboardAccessed(true);
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  // 🧼 Privacy mode
  const togglePrivacyMode = () => {
    setPrivacyMode((prev) => !prev);
    if (!privacyMode) {
      localStorage.clear();
      navigator.clipboard.writeText('');
    }
  };

  // 🕵️ Device fingerprint detection
  useEffect(() => {
    const suspicious =
      navigator.hardwareConcurrency < 2 ||
      navigator.userAgent.includes('Headless') ||
      !navigator.languages ||
      navigator.maxTouchPoints === 0;

    if (suspicious) {
      setToast("🚨 Suspicious browser/device configuration detected!");
    }
  }, []);

  // 🌐 Referrer alert
  useEffect(() => {
    const ref = document.referrer;
    if (ref && !ref.includes(window.location.hostname)) {
      setToast(`⚠️ You arrived from: ${ref}`);
    }
  }, []);

  // 🔔 Toast triggers
  useEffect(() => {
    if (!tabFocused) {
      setToast("🔒 You're not on this tab. Watch out for background access.");
    }
  }, [tabFocused]);

  useEffect(() => {
    if (clipboardAccessed) {
      setToast("📋 Your clipboard was accessed!");
    }
  }, [clipboardAccessed]);

  return (
    <>
      <main className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-muted px-4 py-6 border-r">
          <h2 className="text-xl font-bold mb-4">🛡️ Privacy Copilot</h2>
          <div className="space-y-4 text-sm">
            <div>
              <label className="font-semibold">Privacy Mode</label>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={privacyMode}
                  onChange={togglePrivacyMode}
                />
                <span>{privacyMode ? "Enabled" : "Disabled"}</span>
              </div>
            </div>
            <div>
              <p>Camera: <span className={cameraAllowed ? 'text-green-600' : 'text-red-600'}>{cameraAllowed === null ? 'Checking...' : (cameraAllowed ? 'Allowed' : 'Blocked')}</span></p>
              <p>Microphone: <span className={micAllowed ? 'text-green-600' : 'text-red-600'}>{micAllowed === null ? 'Checking...' : (micAllowed ? 'Allowed' : 'Blocked')}</span></p>
            </div>
          </div>
        </aside>

        {/* Main Panel */}
        <section className="flex-1 px-8 py-10 space-y-6">
          <h1 className="text-3xl font-bold text-primary mb-6">🔍 Live Privacy Checks</h1>

          {/* Storage Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-primary mb-2">📦 Data Stored in Browser</h2>
            <div className="text-sm bg-muted p-4 rounded border">
              <p><strong>localStorage Items:</strong> {Object.keys(localStorage).length}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {Object.entries(localStorage).map(([key, val], i) => (
                  <li key={i}><code>{key}</code>: {val}</li>
                ))}
              </ul>
              <p className="mt-4"><strong>Cookies:</strong> {document.cookie || 'None'}</p>
            </div>
          </section>

          {/* Privacy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrivacyCard
              title="📷 Camera Access"
              status={cameraAllowed === true ? 'Allowed' : cameraAllowed === false ? 'Blocked' : 'Checking...'}
              critical={cameraAllowed === true}
            />
            <PrivacyCard
              title="🎙️ Microphone Access"
              status={micAllowed === true ? 'Allowed' : micAllowed === false ? 'Blocked' : 'Checking...'}
              critical={micAllowed === true}
            />
            <PrivacyCard
              title="🧭 Tab Visibility"
              status={tabFocused ? 'Active Tab' : 'Not Focused'}
              critical={!tabFocused}
            />
            <PrivacyCard
              title="📋 Clipboard Activity"
              status={clipboardAccessed ? 'Accessed' : 'No Paste Yet'}
              critical={clipboardAccessed}
            />
          </div>
        </section>

      {/* 🧠 Inline Suggestions */}
      {getInlineSuggestions({ cameraAllowed, micAllowed, clipboardAccessed, tabFocused }).length > 0 && (
        <section className="mt-10 px-6 py-4 bg-blue-50 border-l-4 border-blue-400 rounded-md">
          <h4 className="text-base font-bold text-blue-800 mb-2">🔐 Privacy Suggestions (Live)</h4>
          <ul className="list-disc list-inside text-sm text-blue-900 space-y-1">
            {getInlineSuggestions({ cameraAllowed, micAllowed, clipboardAccessed, tabFocused }).map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}


      {/* 🤖 Floating AI Privacy Copilot */}
      <div className="fixed bottom-6 right-6 z-50">
        {showSuggestions ? (
          <div className="bg-yellow-50 border border-yellow-400 shadow-lg rounded-xl p-5 max-w-sm w-full animate-fade-in">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-base font-bold text-yellow-800 flex gap-1 items-center">🧠 AI Privacy Copilot</h4>
              <button
                onClick={() => setShowSuggestions(false)}
                className="text-xs text-yellow-700 underline"
              >
                Hide
              </button>
            </div>
            <ul className="text-sm text-yellow-900 space-y-1 list-disc list-inside">
              {!privacyMode && <li>Enable <strong>Privacy Mode</strong> to block tracking.</li>}
              {cameraAllowed && <li>Turn off <strong>camera access</strong> if not used.</li>}
              {micAllowed && <li>Disable <strong>microphone</strong> unless using voice.</li>}
              {clipboardAccessed && <li>Avoid copying passwords. Clipboard accessed.</li>}
              {!tabFocused && <li>Your tab is inactive. Watch for hidden tracking.</li>}
              {privacyMode && !(cameraAllowed || micAllowed || clipboardAccessed || !tabFocused) && (
                <li>✅ You're browsing securely.</li>
              )}
            </ul>
          </div>
        ) : hasSuggestions ? (
          <button
            onClick={() => setShowSuggestions(true)}
            className="bg-yellow-400 text-yellow-900 font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition flex items-center gap-2"
          >
            🧠 AI Copilot Tips
          </button>
        ) : null}
      </div>



      </main>

      {/* 🔔 Global Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white text-sm px-4 py-2 rounded shadow-lg z-50">
          {toast}
          <button
            className="ml-3 text-xs underline"
            onClick={() => setToast(null)}
          >
            Dismiss
          </button>
        </div>
      )}
    </>
  );
}

// 🔲 Reusable card
function PrivacyCard({
  title,
  status,
  critical,
}: {
  title: string;
  status: string;
  critical: boolean;
}) {
  return (
    <div className={`rounded-xl p-5 border shadow-sm ${critical ? 'bg-red-50 border-red-300' : 'bg-green-50 border-green-300'}`}>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className={`mt-2 text-sm ${critical ? 'text-red-700' : 'text-green-700'}`}>
        {status}
      </p>
    </div>
  );
}

