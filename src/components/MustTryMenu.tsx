import Image from "next/image";

const MENUS = [
  { name: "Malay Cuisine", image: "/images/menu-malay.jpg" },
  { name: "Chinese Cuisine", image: "/images/menu-chinese.jpg" },
  { name: "Indian Cuisine", image: "/images/menu-indian.jpg" },
  { name: "BBQ Live Station", image: "/images/menu-bbq.jpg" },
  { name: "Thai Cuisine", image: "/images/menu-thai.jpg" },
  { name: "Western Cuisine", image: "/images/menu-western.jpg" },
];

export default function MustTryMenu() {
  return (
    <section id="menu" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Sajian <span className="text-primary">Pelbagai Jenis</span>
        </h2>
        <p className="section-subtitle">
          Pilihan sajian yang pasti memukau tetamu anda.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {MENUS.map((menu) => (
            <div key={menu.name} className="flex flex-col items-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg mb-4">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover scale-200"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-stone-700 text-center">
                {menu.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}