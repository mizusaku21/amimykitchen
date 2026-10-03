const PACKAGES = [
  {
    name: "Standard",
    price: "RM12",
    unit: "/pax",
    color: "border-stone-200",
    items: ["Nasi Minyak", "Ayam Masak Merah", "Acar Timun", "Papadom"],
    popular: false,
  },
  {
    name: "Deluxe",
    price: "RM18",
    unit: "/pax",
    color: "border-stone-200",
    items: [
      "Nasi Minyak",
      "Ayam Masak Merah",
      "Daging Hitam",
      "Acar Timun",
      "Papadom",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "RM22",
    unit: "/pax",
    color: "border-stone-200",
    items: [
      "Nasi Minyak",
      "Ayam Masak Merah",
      "Daging Hitam",
      "Acar Timun",
      "Papadom",
      "Kuih",
      "Buah",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="pakej" className="section-padding bg-section-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Buffet Katering Lazat, <span className="text-primary">Harga Rendah!</span>
        </h2>
        <p className="section-subtitle">
          Nikmati perkhidmatan katering berpatutan untuk semua acara anda!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`card border-2 ${pkg.color} relative flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-1">
                  {pkg.name} Package
                </h3>

                <ul className="space-y-2 my-6 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-stone-600">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-400 mb-1">Harga Pakej</p>
                  <p className="text-3xl font-bold text-primary">
                    {pkg.price}
                    <span className="text-base font-normal text-stone-400">
                      {pkg.unit}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/601163301068"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            WhatsApp Sekarang +6011-63301068
          </a>
        </div>
      </div>
    </section>
  );
}