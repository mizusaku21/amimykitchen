import Image from "next/image";

const CLIENTS = [
  { name: "Petronas", logo: "/images/clients/petronas.png" },
  { name: "Berita Harian", logo: "/images/clients/UOB.png" },
  { name: "Axiata", logo: "/images/clients/cimb-group.png" },
  { name: "Maybank", logo: "/images/clients/maybank.png" },
  { name: "Tourism Malaysia", logo: "/images/clients/tnb2.png" },
  { name: "Standard Chartered", logo: "/images/clients/standard-chartered.png" },
  { name: "Utopia", logo: "/images/clients/bank-negara.png" },
  { name: "Sime Darby", logo: "/images/clients/sime-darby.png" },
];

export default function Clients() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="section-title">
          Our <span className="text-primary">Satisfied Clients</span>
        </h2>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex w-max animate-scroll">
          {/* Render twice for seamless loop */}
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "150px", height: "200px" }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={120}
                className="max-w-[500px] max-h-500px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}