import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="brightness-0 invert mb-3"
            />
            <p className="text-stone-400 text-sm leading-relaxed">
              Perkhidmatan katering halal yang dipercayai untuk perkahwinan,
              seminar, jamuan dan pelbagai acara lain.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-stone-300">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+601163301068" className="hover:text-white transition-colors">
                  6011-63301068
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:amimy06@gmail.com" className="hover:text-white transition-colors">
                  amimy06@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-stone-300">
              Lokasi Kami
            </h4>
            <p className="text-stone-400 text-sm leading-relaxed">
                Seksyen U12, Shah Alam
            </p>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 text-center">
          <p className="text-stone-500 text-xs">
            © 2019 - {year} Amimy Kitchen & Catering
          </p>
        </div>
      </div>
    </footer>
  );
}