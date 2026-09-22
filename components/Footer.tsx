import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.name} · {siteConfig.location}
        </p>
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
