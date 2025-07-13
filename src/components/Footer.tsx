// export default function Footer() {
//   return (
//     <footer className="w-full py-6 text-center text-xs text-muted-foreground border-t mt-10">
//       Built with ❤️ by Team SafeCart+ · Gati Shakti Vishwavidyalaya · Hackathon 2025
//     </footer>
//   );
// }


// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full border-t bg-background px-4 py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p>
          © {year} SafeCart<span className="text-chart-1 font-bold">+</span> ·
          Inclusive • Secure • Smart
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/ShrutiVerma3008/SafeCart-AI-plus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="mailto:team@safecart.ai"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
