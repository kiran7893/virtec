import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-6 lg:pt-14">
      <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
            Global heat & flow leaders
            <span className="h-1.5 w-1.5 rounded-full bg-primary-yellow" />
            ISO-certified systems
          </div>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Precision heat and flow management, engineered for a greener
            tomorrow.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            Virtec designs ultrasonic and electromagnetic measurement systems
            that deliver absolute accuracy, low power usage, and long-term
            stability for HVAC, district energy, and water applications.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#products"
              className="rounded-full bg-primary-yellow px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95"
            >
              Explore products
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:text-slate-900"
            >
              Talk to an engineer
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl gap-6 sm:grid-cols-2">
            <div>
              <div className="text-2xl font-semibold text-slate-900">40+</div>
              <div className="text-sm text-slate-600">
                Countries with Virtec installations
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">99.7%</div>
              <div className="text-sm text-slate-600">
                Measurement accuracy across core devices
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">
                Remote monitoring & diagnostics support
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">15 yrs</div>
              <div className="text-sm text-slate-600">
                Long-term stability with low power consumption
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                  Product portfolio
                </p>
                <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900">
                  Smart metering suite
                </h2>
              </div>
              <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700">
                2026
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Flow meters",
                  description:
                    "Ultrasonic & electromagnetic measurement for water and HVAC.",
                },
                {
                  title: "Heat meters",
                  description:
                    "District heating, cooling, and energy management systems.",
                },
                {
                  title: "Variable speed drives",
                  description:
                    "Optimized motor control for energy efficiency.",
                },
                {
                  title: "IAQ sensors",
                  description:
                    "Temperature, humidity, CO₂, and air quality analytics.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-10 -left-6 hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.15)] lg:block">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-600">
              Performance promise
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-900">
              Seamless integration + full system accountability
            </div>
            <p className="mt-2 text-xs text-slate-600">
              We design, supply, and own the outcome across installed systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
