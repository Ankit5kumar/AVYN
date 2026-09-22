import { featuredWork } from "@/lib/config";

// This section is meant to hold real pilot/case-study work once you
// have it. It's fine to leave it with placeholder entries for now, but
// swap them out before sharing the site with anyone — an empty
// portfolio section reads better than a fake one.
export default function FeaturedWork() {
  return (
    <section className="border-t hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Recent work
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featuredWork.map((item) => (
            <div key={item.title} className="border hairline p-6">
              <p className="font-sans text-xs uppercase tracking-widest text-brass">
                {item.tag}
              </p>
              <p className="mt-3 font-serif text-lg font-semibold text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
