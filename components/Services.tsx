import { services } from "@/lib/config";

export default function Services() {
  return (
    <section id="services" className="border-t hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What we do
        </h2>
        <div className="mt-8 border-t hairline">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-2 border-b py-6 hairline sm:grid-cols-4 sm:gap-8"
            >
              <p className="font-serif text-lg font-semibold text-ink sm:col-span-1">
                {service.title}
              </p>
              <p className="max-w-prose text-sm leading-relaxed text-slate sm:col-span-3">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
