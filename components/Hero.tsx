import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid gap-12 sm:grid-cols-5 sm:items-center sm:gap-10">
        <div className="sm:col-span-3">
          <p className="font-sans text-sm tracking-wide text-slate">
            {siteConfig.location}
          </p>
          <h1 className="mt-4 max-w-prose font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Ideas today.
            <br />
            <span className="text-brass">Presence that grows tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate">
            We help small businesses look and sound as good online as they
            do in person — websites, social content and a brand presence
            built to actually bring customers in, not just look nice.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block border-b-2 border-brass pb-1 font-sans text-base font-medium text-ink"
          >
            Start a project
          </a>
        </div>

        {/*
          Photo panel — replace the placeholder below with a real photo
          of you two working (desk setup, a content shoot, anything
          unstaged) using next/image, e.g.:
          <Image src="/hero.jpg" alt="..." fill className="object-cover" />
          A real, slightly imperfect photo will do more for trust here
          than any stock image or illustration.
        */}
        <div className="sm:col-span-2">
          <div className="relative flex aspect-[4/5] flex-col justify-between border hairline bg-ink/[0.03] p-6">
            <p className="font-sans text-xs uppercase tracking-widest text-slate">
              Photo
            </p>
            <div className="flex-1" />
            <div>
              <p className="font-serif text-lg leading-snug text-ink">
                Two founders, one team.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                A developer and a content/growth specialist — the site,
                the content and the strategy behind it come from the
                same place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
