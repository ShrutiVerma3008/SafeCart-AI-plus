"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Features", href: "/features" },
  { name: "SmartCart", href: "/cart" },
  { name: "Privacy", href: "/privacy" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="w-full py-4 flex justify-end gap-6 px-6 text-sm font-medium text-muted-foreground">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition hover:text-foreground ${
            path === item.href ? "text-foreground font-semibold" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
