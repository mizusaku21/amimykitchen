import Image from "next/image";

const RENTAL_PACKAGES = [
  {
    name: "Sewa Meja & Kerusi",
    price: "RM50",
    unit: "/10 pax",
    image: "/images/rental-table-chair.jpg",
  },
  {
    name: "Meja, Kerusi & Kanopi",
    price: "RM90",
    unit: "/10 pax",
    image: "/images/rental-full-package.jpg",
  },
];

const OTHER_RENTALS = [
  { name: "Sewa Kerusi Majlis", icon: "🪑" },
  { name: "Peralatan Katering", icon: "🍽️" },
  { name: "Sewa Kanopi", icon: "⛺" },
  { name: "Sewa Air Cooler", icon: "❄️" },
  { name: "Sewa PA System", icon: "🔊" },
  { name: "Sewa Kipas Industri", icon: "🌀" },
];

export default function RentalPackages() {
  return (
    <section id="sewaan" className="section-padding bg-section-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          2 in 1 — Katering <span className="text-primary">& Sewaan!</span>
        </h2>
        <p className="section-subtitle">
          Kami juga menawarkan sewaan meja, kerusi dan kanopi untuk acara anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {RENTAL_PACKAGES.map((rental) => (
            <div key={rental.name} className="card">
              <div className="relative h-48">
                <Image
                  src={rental.image}
                  alt={rental.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-stone-800 mb-2">
                  {rental.name}
                </h3>
                <p className="text-xs text-stone-400 mb-1">Harga Pakej</p>
                <p className="text-2xl font-bold text-primary">
                  {rental.price}
                  <span className="text-sm font-normal text-stone-400">
                    {rental.unit}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-center mb-2">
            Perlukan Kerusi dan Meja Sahaja?
          </h3>
          <p className="text-stone-500 text-center text-sm mb-8">
            Kami ada pilihan lain untuk keperluan acara anda.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {OTHER_RENTALS.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-stone-100 cursor-pointer hover:border-primary/30"
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="text-sm font-medium text-stone-700">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}