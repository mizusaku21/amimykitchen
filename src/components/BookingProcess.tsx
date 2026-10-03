const STEPS = [
  {
    step: "01",
    title: "WhatsApp Kami",
    desc: "Hubungi kami melalui WhatsApp. Kami akan balas segera.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Dapatkan Sebut Harga",
    desc: "Maklumkan tarikh, lokasi dan bilangan tetamu acara anda.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Selesai!",
    desc: 'Bayar deposit melalui "Online-Banking" dan anda sudah selesai!',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function BookingProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Tempah Katering Dalam{" "}
          <span className="text-primary">5 Minit!</span>
        </h2>
        <p className="section-subtitle">
          Nikmati kemudahan menempah perkhidmatan katering dalam masa 5 minit sahaja.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.step} className="relative text-center">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-stone-200" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light text-primary mb-5">
                {step.icon}
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-stone-500 text-sm max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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