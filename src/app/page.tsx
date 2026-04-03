const landlordServices = [
  "Rental valuation and tailored letting advice",
  "Guidance on landlord compliance and safety regulations",
  "Tenant sourcing, marketing, and accompanied viewings",
  "Full references, credit checks, and tenancy setup",
  "Detailed written and video inventories",
  "Monthly rent collection and landlord statements",
  "Property inspections, maintenance coordination, and renewals",
  "Seamless end-of-tenancy check-out and re-letting support",
];

const tenantBenefits = [
  "Well-managed homes with required gas and electrical safety checks",
  "Protected deposits held in a dedicated client account",
  "24/7 support line for urgent issues",
  "Clear communication throughout the tenancy",
  "Straightforward move-in costs and holding deposit process",
  "Responsive help with maintenance and tenancy questions",
];

const properties = [
  {
    title: "Trent Street, Gainsborough",
    type: "4 bedroom terraced home",
    price: "Available — £600 PCM",
    bullets: ["2 living rooms", "Downstairs bathroom", "Enclosed rear garden"],
  },
  {
    title: "Chesterfield Road South, Mansfield",
    type: "Care facility",
    price: "Available — £2,500 PCM",
    bullets: [
      "Class C3(B) permission",
      "Up to six residents",
      "Lease terms negotiable",
    ],
  },
  {
    title: "White Hart Street, Mansfield",
    type: "HMO rooms",
    price: "From £100–£120 per week",
    bullets: ["En-suite rooms available", "Town centre location", "Bills included"],
  },
];

const stats = [
  { value: "10+", label: "Years of landlord experience behind the business" },
  { value: "24/7", label: "Urgent tenant support line" },
  { value: "10%", label: "Management commission on rent collected" },
  { value: "£100", label: "Arrangement fee per new let" },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-slate-900">
      <header className="border-b border-white/10 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">PremierLet</p>
            <p className="mt-1 text-sm text-slate-300">Nottinghamshire lettings & property management</p>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#landlords" className="transition hover:text-white">Landlords</a>
            <a href="#tenants" className="transition hover:text-white">Tenants</a>
            <a href="#properties" className="transition hover:text-white">Properties</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Get in touch
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.12),_transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              A modern proposal concept for PremierLet
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                A cleaner, more premium website for landlords and tenants.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                This concept keeps PremierLet’s services and local focus, but presents them with a more
                trusted, professional structure inspired by established property brands like Martin & Co.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#properties"
                className="rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                View available properties
              </a>
              <a
                href="#landlords"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/6"
              >
                Explore landlord services
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-3 lg:px-8">
          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Why this direction</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Sharper structure, stronger first impression</h3>
            <p className="mt-4 leading-7 text-slate-600">
              The goal is not to copy Martin & Co literally, but to borrow the cleaner layout hierarchy,
              stronger sectioning, and more polished presentation style.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">What stays</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">PremierLet’s real services and identity</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Existing landlord, tenant, property, and contact information stays central — it is simply
              reorganised into a more modern experience.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">What gets cut</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Only the pages PremierLet actually needs</h3>
            <p className="mt-4 leading-7 text-slate-600">
              No unnecessary estate-agency extras. Just a focused lettings site with simpler navigation and
              better page flow.
            </p>
          </div>
        </div>
      </section>

      <section id="landlords" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Landlords"
            title="A management offer that feels credible from the first click"
            text="PremierLet began by managing Fraser Brown’s own properties and grew through reputation. This section reframes that story in a more professional, confidence-building way for prospective landlords."
          />
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {landlordServices.map((service) => (
                <div key={service} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium leading-6 text-slate-700">
                  {service}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">Current fee structure</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-3xl font-semibold">£100</p>
                  <p className="mt-2 text-sm text-slate-300">Arrangement fee each time a property is let to a new tenant.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">10%</p>
                  <p className="mt-2 text-sm text-slate-300">Management commission on rent collected, paid with statements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tenants" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="grid gap-4">
              {tenantBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-slate-200">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Tenants"
              title="Simple, transparent information for applicants and renters"
              text="PremierLet’s tenant information is useful, but the current presentation is basic. Here it is turned into a clearer, easier-to-trust section that explains deposits, rent, and support in a cleaner format."
            />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <h3 className="text-xl font-semibold text-white">Fees & payments overview</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7">
                <li>• One month’s rent is payable in advance at the start of the tenancy.</li>
                <li>• A security deposit equal to one month’s rent is required at move-in.</li>
                <li>• Holding deposits are typically equivalent to one week’s rent.</li>
                <li>• Holding deposits are deducted from move-in monies when the tenancy proceeds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Properties"
            title="A more polished way to present available homes and rooms"
            text="Instead of a basic category archive, this concept uses cleaner cards and clearer pricing so availability feels more current and professional."
          />
          <a href="#contact" className="text-sm font-semibold text-slate-950 underline decoration-amber-400 underline-offset-4">
            Ask about current availability
          </a>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {properties.map((property) => (
            <article key={property.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.45)]">
              <div className="h-52 bg-[linear-gradient(135deg,#e2e8f0,#cbd5e1_50%,#f8fafc)]" />
              <div className="space-y-5 p-7">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Featured property</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{property.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{property.type}</p>
                </div>
                <ul className="space-y-2 text-sm leading-7 text-slate-600">
                  {property.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <div className="border-t border-slate-200 pt-5">
                  <p className="text-lg font-semibold text-slate-950">{property.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-slate-950 px-8 py-10 text-white lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-12">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built to make contacting PremierLet easier</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                This section gives the owner a more modern contact presentation while keeping the same core
                details already published on the current website.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Call</p>
                <p className="mt-3 text-xl font-semibold">01159 654 919</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Email</p>
                <p className="mt-3 text-xl font-semibold">info@premierlet.co.uk</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Office</p>
                <p className="mt-3 text-xl font-semibold">Long Ridge, School Lane, Eakring, NG22 0DE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
