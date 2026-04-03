'use client';

import { useMemo, useState } from 'react';

type Property = {
  id: number;
  title: string;
  type: 'house' | 'hmo' | 'maisonette';
  beds: number;
  price: number;
  status: 'available' | 'let';
  desc: string;
  image: string;
  location: string;
};

const DEFAULT_BLURRY_HOUSE_IMAGE = 'https://picsum.photos/id/1005/800/600';

const propertiesData: Property[] = [
  {
    id: 1,
    title: 'Trent Street, Gainsborough, DN21',
    type: 'house',
    beds: 4,
    price: 600,
    status: 'available',
    desc: 'Spacious 4-bedroom terraced house with two living rooms, downstairs bathroom and enclosed rear garden.',
    image: DEFAULT_BLURRY_HOUSE_IMAGE,
    location: 'Gainsborough',
  },
  {
    id: 2,
    title: 'Chesterfield Road South, Mansfield, NG19',
    type: 'hmo',
    beds: 6,
    price: 2500,
    status: 'available',
    desc: 'Well-appointed care facility / HMO with permission for up to six residents. Lease terms negotiable.',
    image: DEFAULT_BLURRY_HOUSE_IMAGE,
    location: 'Mansfield',
  },
  {
    id: 3,
    title: 'Stella Street, Mansfield, NG18',
    type: 'hmo',
    beds: 5,
    price: 480,
    status: 'available',
    desc: 'Premium HMO – rooms £100–£120 pw including bills. Shared kitchen & bathroom, CCTV, town centre.',
    image: DEFAULT_BLURRY_HOUSE_IMAGE,
    location: 'Mansfield',
  },
  {
    id: 4,
    title: 'Priestsic Road, Sutton in Ashfield, NG17',
    type: 'hmo',
    beds: 5,
    price: 480,
    status: 'available',
    desc: 'Modern HMO with off-street parking, CCTV, bills included. Perfect for professionals or students.',
    image: DEFAULT_BLURRY_HOUSE_IMAGE,
    location: 'Sutton in Ashfield',
  },
  {
    id: 5,
    title: 'Chaucer Street, Mansfield, NG18',
    type: 'hmo',
    beds: 4,
    price: 440,
    status: 'available',
    desc: 'HMO rooms available with shared facilities, enclosed garden and town centre location.',
    image: DEFAULT_BLURRY_HOUSE_IMAGE,
    location: 'Mansfield',
  },
  {
    id: 6,
    title: 'White Hart Street, Mansfield, NG18',
    type: 'hmo',
    beds: 5,
    price: 500,
    status: 'available',
    desc: 'High-spec HMO with en-suite options, CCTV and weekly rates including all bills.',
    image: DEFAULT_BLURRY_HOUSE_IMAGE,
    location: 'Mansfield',
  },
];

export default function Home() {
  const [bedFilter, setBedFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    let filtered = [...propertiesData];

    if (bedFilter) {
      if (bedFilter === 'HMO') {
        filtered = filtered.filter((p) => p.type === 'hmo');
      } else {
        const minBeds = parseInt(bedFilter, 10);
        filtered = filtered.filter((p) => p.beds >= minBeds);
      }
    }

    if (typeFilter) {
      filtered = filtered.filter((p) => p.type === typeFilter);
    }

    return filtered;
  }, [bedFilter, typeFilter]);

  const toggleInterest = (value: string) => {
    setSelectedInterest((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  const resetFilters = () => {
    setBedFilter('');
    setTypeFilter('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('✅ Thank you! Your message has been sent to PremierLet.\n\n(In production this would use Resend, EmailJS or a Next.js API route.)');
    e.currentTarget.reset();
    setSelectedInterest([]);
  };

  return (
    <main className="tail-container min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-screen-2xl px-6 py-5">
          <div className="flex items-center justify-between gap-6">
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
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/25">
              Premium letting & property management
            </span>
            <h1 className="heading-font mt-8 text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Nottinghamshire&apos;s Premier Letting Agency
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Quality homes, expert service, full tenant and landlord support across Nottinghamshire.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#properties" className="rounded-full bg-emerald-500 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-emerald-400">
                View Properties
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Contact PremierLet
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-x-2">
                <span className="text-emerald-300">✓</span>
                <span>Quality homes</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="flex items-center gap-x-2">
                <span className="text-emerald-300">✓</span>
                <span>Expert property management</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="flex items-center gap-x-2">
                <span className="text-emerald-300">✓</span>
                <span>Gas & electrical safety certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="landlords" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="sticky top-8">
                <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">For Landlords</span>
                <h2 className="heading-font mt-2 mb-6 text-5xl font-bold tracking-tighter text-slate-900">
                  Let your property with complete confidence
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  We handle everything — from marketing and tenant sourcing to rent collection and maintenance — so you enjoy maximum returns with zero hassle.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="text-4xl font-semibold text-emerald-600">10%</div>
                  <div className="leading-none text-slate-500">
                    management fee
                    <br />
                    <span className="text-sm">+ £100 arrangement fee</span>
                  </div>
                </div>
                <a href="#contact" className="mt-8 inline-flex h-12 items-center justify-center rounded-3xl bg-slate-900 px-8 text-center font-semibold text-white transition-colors hover:bg-emerald-600">
                  <span className="text-white">Get a free rental valuation</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-3xl text-emerald-600">🔍</div>
                  <h3 className="mb-2 text-xl font-semibold">Full Property Management</h3>
                  <ul className="space-y-4 text-[15px] text-slate-600">
                    {[
                      'Tenant sourcing & viewings',
                      'Comprehensive referencing',
                      'Monthly rent collection + statements',
                      'Regular inspections & repairs',
                      'End-of-tenancy management',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-xs text-emerald-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm">
                  <div className="flex-1">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-3xl text-emerald-600">📋</div>
                    <h3 className="mb-2 text-xl font-semibold">Compliance & Protection</h3>
                    <p className="text-slate-600">
                      Gas Safety, NICEIC electrical certification, deposit protection, and specialist landlord insurance advice.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t pt-8 text-sm">
                    <div>Multi-property discounts</div>
                    <div className="font-semibold text-emerald-600">Available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-8 rounded-3xl bg-white p-8 text-slate-700 shadow-sm sm:col-span-2">
                  <div>
                    <div className="text-6xl font-semibold text-emerald-600">£100</div>
                    <div className="text-xs uppercase tracking-widest">Arrangement fee per new tenancy</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-emerald-600">+ 10% of rent collected</div>
                    <div className="mt-1 text-sm text-slate-400">Monthly payments direct to your bank</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tenants" className="py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex flex-col gap-16 md:flex-row">
            <div className="flex-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">For Tenants</span>
              <h2 className="heading-font mt-2 mb-6 text-5xl font-bold tracking-tighter text-slate-900">Your home, our priority</h2>
              <div className="text-slate-600">
                <p className="text-lg">
                  We make renting simple, secure, and supported. Every property is fully compliant, deposits are protected, and you have 24/7 access to our team.
                </p>
              </div>

              <div className="mt-12 space-y-8">
                {[
                  {
                    number: '01',
                    title: 'Find & apply in minutes',
                    text: 'Browse our portfolio. Pay a small holding deposit to secure your new home. Full referencing completed swiftly.',
                  },
                  {
                    number: '02',
                    title: 'Move in stress-free',
                    text: 'Detailed video + written inventory. Utilities transferred. Clear communication from day one.',
                  },
                  {
                    number: '03',
                    title: '24/7 support throughout',
                    text: 'Urgent repairs? Maintenance request? We’re here. We act as the bridge between you and your landlord.',
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="font-mono text-7xl font-bold text-emerald-200">{step.number}</div>
                    <div>
                      <h4 className="text-xl font-semibold">{step.title}</h4>
                      <p className="text-slate-500">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-3xl bg-slate-900 p-10 text-white">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-3xl font-semibold">Tenant benefits</h3>
                  <div className="text-6xl text-emerald-400">🛡️</div>
                </div>
                <ul className="space-y-6">
                  {[
                    ['Deposit held safely', 'Client money account'],
                    ['Fully certified properties', 'Gas & electrical safety'],
                    ['24/7 emergency helpline', 'Always answered'],
                    ['Transparent fees only', 'No hidden costs'],
                  ].map(([label, value], index) => (
                    <li key={label} className={`flex justify-between ${index < 3 ? 'border-b border-white/10 pb-6' : ''}`}>
                      <span className="text-emerald-300">{label}</span>
                      <span className="font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 rounded-3xl bg-white/10 p-6 text-sm backdrop-blur">
                Holding deposit = 1 week’s rent. Security deposit = 1 month’s rent. One month’s rent in advance.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Available now</span>
              <h2 className="heading-font text-5xl font-bold tracking-tighter text-slate-900">Properties to rent in Nottinghamshire</h2>
            </div>

            <div className="hidden items-center gap-x-4 text-sm md:flex">
              <select value={bedFilter} onChange={(e) => setBedFilter(e.target.value)} className="h-11 rounded-3xl border border-slate-200 bg-white px-5 focus:border-emerald-300 focus:outline-none">
                <option value="">Any bedrooms</option>
                <option value="2">2 bedrooms</option>
                <option value="3">3 bedrooms</option>
                <option value="4">4+ bedrooms</option>
                <option value="HMO">HMO / Rooms</option>
              </select>

              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="h-11 rounded-3xl border border-slate-200 bg-white px-5 focus:border-emerald-300 focus:outline-none">
                <option value="">All types</option>
                <option value="house">House</option>
                <option value="hmo">HMO</option>
                <option value="maisonette">Maisonette</option>
              </select>

              <button onClick={resetFilters} className="flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-400 hover:text-slate-600">
                Clear
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((prop) => (
                <button key={prop.id} onClick={() => setSelectedProperty(prop)} className="property-card overflow-hidden rounded-3xl border border-transparent bg-white text-left">
                  <div className="relative">
                    <img src={prop.image} alt={prop.title} className="property-img h-56 w-full object-cover" />
                    <div className="absolute top-4 right-4 flex h-7 items-center rounded-3xl bg-white px-4 text-xs font-semibold text-emerald-600 shadow">
                      £{prop.price} pcm
                    </div>
                    {prop.status === 'available' ? (
                      <div className="absolute top-4 left-4 flex h-7 items-center rounded-3xl bg-emerald-500 px-3 text-xs font-medium text-white">
                        AVAILABLE NOW
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="text-lg font-semibold">{prop.title}</div>
                    <div className="mt-1 flex items-center gap-x-3 text-sm text-slate-500">
                      <span>{prop.beds} bed {prop.type}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-400" />
                      <span>{prop.location}</span>
                    </div>
                    <p className="mt-4 line-clamp-2 text-sm text-slate-500">{prop.desc}</p>
                  </div>
                </button>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-400">
                No properties match your filters yet.
                <br />
                Try broadening your search.
              </div>
            )}
          </div>

        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="heading-font mb-6 text-5xl font-bold tracking-tighter text-slate-900">Let&apos;s find your perfect match</h2>
              <p className="text-lg text-slate-600">
                Whether you&apos;re a landlord looking to let or a tenant searching for a home, our friendly team is ready to help.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-8 text-3xl text-emerald-600">☎</div>
                  <div>
                    <div className="font-semibold">Call us</div>
                    <a href="tel:01159654919" className="text-3xl font-medium">0115 965 4919</a>
                    <div className="mt-1 text-xs text-slate-400">
                      or mobile <a href="tel:07813694659" className="underline">07813 694659</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 text-3xl text-emerald-600">✉</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@premierlet.co.uk" className="text-xl hover:underline">info@premierlet.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 text-3xl text-emerald-600">📍</div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-slate-600">
                      Long Ridge, School Lane
                      <br />
                      Eakring, Nottinghamshire NG22 0DE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-slate-500">Name</label>
                    <input type="text" required className="w-full rounded-2xl border border-slate-200 px-6 py-4 outline-none focus:border-emerald-300" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-slate-500">Email</label>
                    <input type="email" required className="w-full rounded-2xl border border-slate-200 px-6 py-4 outline-none focus:border-emerald-300" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-slate-500">Message</label>
                  <textarea rows={5} className="w-full resize-none rounded-3xl border border-slate-200 px-6 py-4 outline-none focus:border-emerald-300" />
                </div>

                <button type="submit" className="flex h-14 w-full items-center justify-center gap-x-3 rounded-3xl bg-emerald-600 text-lg font-semibold text-white transition-all hover:bg-emerald-700">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-screen-2xl px-6 pb-8 pt-16 md:px-12">
          <div className="grid gap-y-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="mb-4 flex items-center gap-x-3 text-white">
                <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
                  <path d="M24 8L8 22V40H16V28H32V40H40V22L24 8Z" fill="currentColor" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M20 28H28V40H20V28Z" fill="#0f172a" />
                  <circle cx="24" cy="18" r="3" fill="#fff" />
                </svg>
                <span className="heading-font text-4xl font-bold tracking-tighter">PremierLet</span>
              </div>
              <p className="max-w-xs text-slate-300">
                Premium letting & management in Nottinghamshire. Founded on 10+ years of hands-on landlord expertise.
              </p>
              <div className="mt-8 flex gap-x-6 text-xs">
                <div>© 2026 PremierLet</div>
                <div className="cursor-pointer hover:text-white">Privacy & Cookies</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="mb-6 text-xs font-semibold uppercase text-emerald-300">Company</div>
              <a href="#landlords" className="block py-2 hover:text-white">For Landlords</a>
              <a href="#tenants" className="block py-2 hover:text-white">For Tenants</a>
              <a href="#properties" className="block py-2 hover:text-white">Properties</a>
            </div>

            <div className="md:col-span-2">
              <div className="mb-6 text-xs font-semibold uppercase text-emerald-300">Quick links</div>
              <a href="#" className="block py-2 hover:text-white">How we work</a>
              <a href="#" className="block py-2 hover:text-white">Fees explained</a>
              <a href="#" className="block py-2 hover:text-white">Tenant guides</a>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-3xl bg-slate-800 p-6 text-sm text-white">
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    Long Ridge, School Lane
                    <br />
                    Eakring NG22 0DE
                  </div>
                  <div className="text-left sm:text-right">
                    0115 965 4919
                    <br />
                    info@premierlet.co.uk
                  </div>
                </div>
                <div className="text-xs font-medium text-emerald-400">Open Monday–Friday 9am–5:30pm • 24/7 emergency tenant line</div>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {selectedProperty ? (
        <div onClick={() => setSelectedProperty(null)} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white">
            <div className="p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">{selectedProperty.title}</h2>
                  <p className="mt-1 text-4xl font-light text-emerald-600">£{selectedProperty.price} pcm</p>
                </div>
                <button onClick={() => setSelectedProperty(null)} className="text-4xl leading-none text-slate-300 hover:text-slate-500">×</button>
              </div>
              <img src={selectedProperty.image} className="property-img my-8 h-80 w-full rounded-3xl object-cover" alt={selectedProperty.title} />
              <div className="grid grid-cols-1 gap-4 text-center text-sm sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 py-4"><strong>{selectedProperty.beds}</strong> bedrooms</div>
                <div className="rounded-3xl bg-slate-100 py-4">Fully compliant</div>
                <div className="rounded-3xl bg-slate-100 py-4">Deposit protected</div>
              </div>
              <p className="mt-8">{selectedProperty.desc}</p>
              <div className="mt-10 flex gap-4">
                <button onClick={() => setSelectedProperty(null)} className="flex-1 rounded-3xl border border-slate-300 py-6 font-medium text-slate-400">Close</button>
                <a href="#contact" onClick={() => setSelectedProperty(null)} className="flex-1 rounded-3xl bg-emerald-600 py-6 text-center font-semibold text-white">
                  Apply now or book viewing
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
