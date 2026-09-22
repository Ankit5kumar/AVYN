import { siteConfig } from "@/lib/config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How we work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b hairline">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#" className="font-serif text-xl font-semibold text-ink">
          {siteConfig.name}
        </a>
        <nav className="hidden gap-8 text-sm text-slate sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium text-ink underline decoration-brass decoration-2 underline-offset-4"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
