import { siteConfig } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="border-t hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-5 sm:gap-8">
          <div className="sm:col-span-3">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Tell us about your business
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-slate">
              Send a note with what you're working on and whether you need
              a site, help with your books, or both. We'll reply with next
              steps within a couple of days.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-block border-b-2 border-brass pb-1 font-sans text-base font-medium text-ink"
            >
              Email {siteConfig.email}
            </a>
          </div>

          <div className="border-t pt-6 hairline sm:col-span-2 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0">
            <p className="font-sans text-sm text-slate">Phone</p>
            <p className="mt-1 font-serif text-base text-ink">
              {siteConfig.phone}
            </p>
            <p className="mt-6 font-sans text-sm text-slate">Find us</p>
            <div className="mt-1 flex gap-4 font-serif text-base text-ink">
              <a href={siteConfig.social.instagram} className="hover:text-brass">
                Instagram
              </a>
              <a href={siteConfig.social.facebook} className="hover:text-brass">
                Facebook
              </a>
              <a href={siteConfig.social.linkedin} className="hover:text-brass">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
