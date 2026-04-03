export default function Home() {
  return (
    <main className="tail-container min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-screen-2xl px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
                <path d="M24 8L8 22V40H16V28H32V40H40V22L24 8Z" fill="currentColor" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
                <path d="M20 28H28V40H20V28Z" fill="#0f172a" />
                <circle cx="24" cy="18" r="3" fill="#fff" />
              </svg>
              <div>
                <span className="heading-font text-3xl font-bold tracking-[-1px] text-slate-900">PremierLet</span>
              </div>
              <div className="hidden rounded-3xl bg-emerald-100 px-3 py-1 text-xs font-medium uppercase tracking-[2px] text-emerald-600 sm:block">
                Nottinghamshire
              </div>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#home" className="nav-link text-sm font-medium text-slate-700">Home</a>
              <a href="#landlords" className="nav-link text-sm font-medium text-slate-700">Landlords</a>
              <a href="#tenants" className="nav-link text-sm font-medium text-slate-700">Tenants</a>
              <a href="#properties" className="nav-link text-sm font-medium text-slate-700">Properties</a>
              <a href="#contact" className="nav-link text-sm font-medium text-slate-700">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-bg text-white">
        <div className="mx-auto max-w-screen-2xl px-6 py-28 sm:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/25">
              Premium letting & property management
            </span>
            <h1 className="heading-font mt-8 text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Nottinghamshire&apos;s Premier Letting Agency
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Quality homes, expert management, and dependable support for landlords and tenants across Nottinghamshire.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#properties" className="rounded-full bg-emerald-500 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-emerald-400">
                View Properties
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Contact PremierLet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <span className="text-xl">🏡</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Quality homes</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Carefully managed rental properties with a focus on quality accommodation and a smoother tenant experience.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <span className="text-xl">🛠️</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Full management</h3>
            <p className="mt-4 leading-7 text-slate-600">
              End-to-end landlord support including valuations, tenant sourcing, inspections, maintenance, and rent collection.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <span className="text-xl">🤝</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Trusted support</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Clear communication, tenant guidance, and responsive day-to-day support for both sides of the tenancy.
            </p>
          </div>
        </div>
      </section>

      <section id="landlords" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="max-w-3xl">
            <h2 className="section-header inline-block text-4xl font-semibold text-slate-900">For landlords</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              PremierLet began by managing Fraser Brown&apos;s own properties and grew through reputation, trust, and hands-on experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Rental valuation and tailored advice",
              "Compliance and safety guidance",
              "Tenant sourcing and accompanied viewings",
              "Referencing, agreements, and tenancy setup",
              "Inventories and check-in support",
              "Monthly rent collection and statements",
              "Property inspections and maintenance coordination",
              "Renewals, check-out, and re-letting support",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <p className="text-sm uppercase tracking-[2px] text-emerald-300">Arrangement fee</p>
              <p className="mt-3 text-4xl font-semibold">£100</p>
              <p className="mt-3 text-slate-300">Each time the property is let to a new tenant.</p>
            </div>
            <div className="rounded-3xl bg-emerald-600 p-8 text-white">
              <p className="text-sm uppercase tracking-[2px] text-emerald-100">Management commission</p>
              <p className="mt-3 text-4xl font-semibold">10%</p>
              <p className="mt-3 text-emerald-50">Of rent collected, with regular statements and prompt payment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tenants" className="bg-white py-20">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="section-header inline-block text-4xl font-semibold text-slate-900">For tenants</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              PremierLet provides clear tenancy guidance, properly managed properties, and responsive support throughout your tenancy.
            </p>
            <div className="mt-10 grid gap-4">
              {[
                "Gas Safety Certificates and electrical safety checks on managed homes",
                "Deposits held in a dedicated client account",
                "24/7 helpline for urgent issues",
                "Clear communication between tenant and landlord",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Fees & payments</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>• One month&apos;s rent is payable in advance at the start of the tenancy.</li>
              <li>• A security deposit equal to one month&apos;s rent is payable at move-in.</li>
              <li>• Holding deposits are usually equal to one week&apos;s rent.</li>
              <li>• If the tenancy proceeds, the holding deposit is deducted from the balance due.</li>
              <li>• Deposits are returned after the tenancy ends, subject to checks and any agreed deductions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="properties" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="max-w-3xl">
            <h2 className="section-header inline-block text-4xl font-semibold text-slate-900">Featured properties</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A cleaner property presentation for available homes, HMOs, and specialist listings.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Trent Street, Gainsborough",
                type: "4 Bedroom Terraced Property",
                price: "Available — £600 PCM",
                bullets: ["2 living rooms", "Downstairs bathroom", "Enclosed rear garden"],
              },
              {
                title: "Chesterfield Road South, Mansfield",
                type: "Care Facility",
                price: "Available — £2,500 PCM",
                bullets: ["Class C3(B) permission", "Up to six residents", "Lease terms negotiable"],
              },
              {
                title: "White Hart Street, Mansfield",
                type: "HMO Rooms",
                price: "£100–£120 per week incl. bills",
                bullets: ["En-suite rooms available", "Town centre location", "Bills included"],
              },
            ].map((property, index) => (
              <article key={property.title} className="property-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="property-img h-64 bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/premierlet-${index + 1}/900/700)` }} />
                <div className="p-7">
                  <p className="text-sm font-medium uppercase tracking-[2px] text-emerald-600">Featured listing</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">{property.title}</h3>
                  <p className="mt-2 text-slate-500">{property.type}</p>
                  <ul className="mt-5 space-y-2 text-slate-600">
                    {property.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t pt-5">
                    <p className="text-lg font-semibold text-slate-900">{property.price}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h2 className="section-header inline-block text-4xl font-semibold text-white">Contact PremierLet</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Speak to PremierLet about available properties, landlord services, or full property management support.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[2px] text-slate-300">Phone</p>
                <p className="mt-3 text-xl font-semibold">01159 654 919</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[2px] text-slate-300">Email</p>
                <p className="mt-3 text-xl font-semibold">info@premierlet.co.uk</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                <p className="text-sm uppercase tracking-[2px] text-slate-300">Address</p>
                <p className="mt-3 text-xl font-semibold">Long Ridge, School Lane, Eakring, NG22 0DE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
