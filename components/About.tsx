export default function About() {
  return (
    <section id="about" className="border-t hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-5 sm:gap-8">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:col-span-2 sm:text-3xl">
            Why the same team does both
          </h2>
          <div className="max-w-prose space-y-4 text-sm leading-relaxed text-slate sm:col-span-3">
            <p>
              Most small businesses end up hiring a web developer for their
              online presence and a separate accountant for their books —
              two vendors, two timelines, two people to chase for updates.
            </p>
            <p>
              We started this studio to close that gap: a developer
              handling the site and the tech, and a finance professional
              working alongside a practicing Chartered Accountant handling
              the compliance side. One conversation covers both.
            </p>
            <p>
              We're just getting started, which means early projects get
              closer attention and founder-level pricing — not a junior
              account manager passed between departments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
