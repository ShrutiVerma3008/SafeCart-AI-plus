import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 pb-8">
      <nav className="w-full py-4 flex justify-end gap-4 text-sm">
        <Link href="#shopsync">ShopSync</Link>
        <Link href="#neurocart">NeuroCart</Link>
        <Link href="#shelftalk">ShelfTalk</Link>
        <Link href="#safecart-ai">SafeCart AI</Link>
      </nav>
      <section className="flex-1 w-full flex flex-col md:flex-row items-center md:justify-between mt-10 max-w-5xl gap-8">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary max-w-xl">
            SafeCart<span className="text-chart-1">+</span>
          </h1>
          <h2 className="text-xl md:text-2xl max-w-lg text-muted-foreground">
            All-in-one AI-powered retail assistant— personalizes shopping for <span className="font-bold">everyone</span>, protects privacy, enhances experience from shelf to checkout.
          </h2>
          <div className="flex gap-4 mt-2">
            <Link
              className="rounded-lg bg-chart-1 px-6 py-3 text-white font-semibold text-lg shadow-md hover:scale-[1.04] duration-150"
              href="#onboard"
            >
              Quickstart Demo
            </Link>
            <Link href="#features" className="px-6 py-3 rounded-lg border">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Hero illustration placeholder: Could be replaced with AI/Emotion/Shopping SVG */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-6xl md:text-8xl" role="img" aria-label="cart">🛒</span>
          </div>
        </div>
      </section>
      <section className="w-full pt-12 max-w-5xl" id="features">
        <h3 className="text-2xl font-semibold mb-6 text-center">Inclusive. Adaptive. Secure. Smart.</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2 text-xl text-chart-1">ShopSync</h4>
            <p className="text-sm text-muted-foreground">Emotion-aware AI guides shopping with empathy & real-time context.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2 text-xl text-chart-2">NeuroCart</h4>
            <p className="text-sm text-muted-foreground">Neurodivergent-friendly: adaptive cues, calming modes, customization.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2 text-xl text-chart-3">ShelfTalk</h4>
            <p className="text-sm text-muted-foreground">Assistive comms: live captions, sign-language avatars, visual alerts.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2 text-xl text-chart-4">SafeCart AI</h4>
            <p className="text-sm text-muted-foreground">GenAI security, real-time threat detection, privacy controls, and personalization.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
