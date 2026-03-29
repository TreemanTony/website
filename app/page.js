export default function TreeManTonyWebsite() {
  const services = [
    {
      title: "Tree Trimming",
      description:
        "Professional pruning and shaping to improve tree health, appearance, and safety.",
    },
    {
      title: "Tree Removal",
      description:
        "Safe removal of hazardous, damaged, or unwanted trees with careful site protection.",
    },
    {
      title: "Stump Grinding",
      description:
        "Clean, efficient stump grinding to restore curb appeal and open your yard for new use.",
    },
    {
      title: "Lot Clearing",
      description:
        "Brush, tree, and debris clearing for residential, commercial, and new construction sites.",
    },
    {
      title: "Storm Cleanup",
      description:
        "Fast response for fallen limbs, storm-damaged trees, and property cleanup after severe weather.",
    },
    {
      title: "Emergency Tree Service",
      description:
        "Urgent help when trees or limbs threaten homes, driveways, vehicles, or power access areas.",
    },
  ];

  const reasons = [
    "Reliable, local arborist service",
    "Safety-first approach on every job",
    "Residential and commercial work",
    "Clean job sites and honest service",
    "Free estimates available",
    "Experienced with difficult removals and trimming",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-lime-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-lime-300 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                Trusted Arborist Services
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Tree Man Tony
              </h1>
              <p className="mt-4 text-xl font-medium text-lime-100">
                Professional tree care, safe removals, and dependable service.
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-green-50/90 sm:text-lg">
                From tree trimming and removals to stump grinding, lot clearing, and storm cleanup,
                Tree Man Tony helps keep your property safe, clean, and looking its best.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-green-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  Get a Free Estimate
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="rounded-[1.5rem] bg-stone-100 p-8 text-stone-900 shadow-inner">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-800 text-3xl text-white">
                      🌳
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                        TreeManTony.com
                      </p>
                      <h2 className="text-2xl font-bold">Healthy Trees. Safer Property.</h2>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-green-800">Core Service</p>
                      <p className="mt-2 text-lg font-bold">Tree Trimming</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-green-800">Specialty</p>
                      <p className="mt-2 text-lg font-bold">Hazard Tree Removal</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-green-800">Property Care</p>
                      <p className="mt-2 text-lg font-bold">Stump Grinding</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-green-800">Site Prep</p>
                      <p className="mt-2 text-lg font-bold">Lot Clearing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10" id="services">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Arborist services for homes, businesses, and landowners
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Whether you need routine maintenance, emergency help, or a full property cleanup, Tree Man Tony delivers dependable tree care with attention to safety and detail.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl">
                🌲
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tree service you can trust from start to finish
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-green-50/85">
              Tree work should be done carefully, professionally, and with respect for your property. Tree Man Tony focuses on safe practices, clear communication, and quality results.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-base font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Professional tree care with a local touch</h2>
            <p className="mt-5 text-base leading-7 text-stone-600">
              Tree Man Tony provides arborist services designed to protect your property, improve tree health, and take care of the tough work safely. From trimming overgrown branches to clearing lots and grinding stumps, every project is handled with professionalism and pride.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-600">
              This website layout is designed to give customers a clean, trustworthy first impression and make it easy for them to request service.
            </p>
          </div>

          <div className="rounded-3xl bg-lime-100 p-8 shadow-sm ring-1 ring-lime-200" id="contact">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-800">Contact</p>
            <h2 className="mt-3 text-2xl font-bold text-green-950">Request a quote</h2>
            <p className="mt-4 text-sm leading-6 text-green-900/80">
              Add your phone number, email, service area, and hours here so customers can quickly reach out.
            </p>

            <div className="mt-6 space-y-3 text-sm text-green-950">
              <div className="rounded-2xl bg-white/70 p-4">
                <span className="font-semibold">Phone:</span> (555) 555-5555
              </div>
              <div className="rounded-2xl bg-white/70 p-4">
                <span className="font-semibold">Email:</span> info@treemantony.com
              </div>
              <div className="rounded-2xl bg-white/70 p-4">
                <span className="font-semibold">Service Area:</span> Add your city and surrounding areas
              </div>
            </div>

            <a
              href="mailto:info@treemantony.com"
              className="mt-6 inline-block rounded-2xl bg-green-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Email Tree Man Tony
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© 2026 Tree Man Tony. All rights reserved.</p>
          <p>Tree trimming • Tree removal • Stump grinding • Lot clearing • Emergency service</p>
        </div>
      </footer>
    </div>
  );
}
