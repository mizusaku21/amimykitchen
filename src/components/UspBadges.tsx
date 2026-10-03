const BADGES = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Halal Certified",
    desc: "Bahan-bahan halal yang dijamin untuk ketenangan anda.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Harga Terendah",
    desc: "Kualiti terbaik, harga tak dapat ditandingi.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Penghantaran Percuma",
    desc: "Nikmati penghantaran percuma untuk setiap tempahan.",
  },
];

export default function UspBadges() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {BADGES.map((badge) => (
          <div
            key={badge.title}
            className="text-center p-8 rounded-2xl bg-section-light border border-stone-100 hover:border-primary/20 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-primary mb-5">
              {badge.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{badge.title}</h3>
            <p className="text-stone-500 text-sm">{badge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}