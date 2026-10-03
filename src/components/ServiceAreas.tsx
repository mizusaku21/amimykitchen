const KL_AREAS = [
  "Cheras", "Kepong", "Setapak", "Wangsa Maju", "Mont Kiara",
  "Bukit Bintang", "TTDI", "Segambut", "Sentul", "Titiwangsa",
  "Bangsar", "Desa Petaling", "Sri Petaling", "Kuchai Lama",
  "Taman Tun Dr Ismail", "Damansara", "Hartamas", "Setiawangsa",
];

export default function ServiceAreas() {
  return (
    <section id="kawasan" className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">
          Kawasan <span className="text-primary">Liputan Kami</span>
        </h2>
        <p className="section-subtitle">
          Kami menawarkan perkhidmatan katering di seluruh Kuala Lumpur.
          WhatsApp kami sekarang!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {KL_AREAS.map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-white rounded-full text-sm text-stone-600 font-medium shadow-sm border border-stone-100"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}