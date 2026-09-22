import { process } from "@/lib/config";

export default function Process() {
  return (
    <section id="process" className="border-t hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          How a project runs
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {process.map((item) => (
            <div key={item.step}>
              <p className="font-serif text-sm font-semibold text-brass">
                {item.step}
              </p>
              <p className="mt-2 font-serif text-lg font-semibold text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
