import { Facebook, Instagram, Youtube, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#212b65] text-white pt-10 md:pt-16 pb-8 px-6">
      <div className="max-w-[390px] md:max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-4 items-center md:items-start max-w-xs">
          <span className="font-work font-extrabold text-xl tracking-wide">
            BNUTRITION
          </span>
          <p className="font-montserrat text-base leading-relaxed">
            Alimentamos un mundo mejor con{" "}
            <span className="font-bold">nutrición y ciencia.</span>
            <br />
            Conocé más de{" "}
            <span className="font-bold underline">Grupo Bimbo.</span>
          </p>
          <div className="flex items-center gap-2 bg-white text-[#212b65] rounded-full px-3 py-2 text-sm font-montserrat font-semibold">
            <Globe size={16} />
            ES
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-16 w-full md:w-auto text-left">
          <div className="flex flex-col gap-3">
            <p className="font-montserrat font-semibold text-[17px]">
              Ayuda y soporte
            </p>
            <p className="font-montserrat text-sm">FAQs</p>
            <p className="font-montserrat text-sm">Contáctanos</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-montserrat font-semibold text-[17px]">
              Social
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Facebook size={18} /> Facebook
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Instagram size={18} /> Instagram
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Youtube size={18} /> Youtube
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[390px] md:max-w-5xl mx-auto w-full border-t border-white/20 mt-8 pt-6 flex flex-col gap-3 text-xs font-montserrat">
        <div className="flex justify-center md:justify-start gap-5 flex-wrap">
          <span>Cookies</span>
          <span>Verificación de edad</span>
          <span>Privacidad</span>
        </div>
        <div className="flex justify-center md:justify-start gap-5 flex-wrap">
          <span>Términos y condiciones</span>
          <span>© 2026 Bimbo Nutrición</span>
        </div>
      </div>
    </footer>
  );
}
