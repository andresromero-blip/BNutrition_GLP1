import { Search } from "lucide-react";

// Nota: el Figma trae el isotipo de B Nutrition como imagen (logo real, sin
// texto adicional). No se pudo descargar ese asset SVG en este entorno, así
// que aquí se usa el wordmark como placeholder — sin inventar texto extra.
// Sustituir por el logo real antes de producción.
const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "bimbo Nutrición", href: "#" },
  { label: "Aprender te alimenta", href: "#" },
  { label: "Recetas", href: "#" },
  { label: "Club B Nutrition", href: "#" },
];

export default function Header() {
  return (
    <>
      {/* Mobile: barra fija solo con el logo */}
      <header className="md:hidden fixed top-0 left-0 z-40 w-full h-[64px] bg-white flex items-center justify-center border-b border-black/5">
        <span className="font-work font-extrabold text-xl text-bn-olive tracking-wide">
          BNUTRITION
        </span>
      </header>

      {/* Desktop: nav superior con logo, links y buscador */}
      <header className="hidden md:flex sticky top-0 z-40 w-full bg-white items-center justify-between gap-10 px-[100px] py-3 shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
        <span className="font-work font-extrabold text-2xl text-bn-olive tracking-wide shrink-0">
          BNUTRITION
        </span>
        <nav className="flex items-center justify-center gap-10 font-nunito font-bold text-base capitalize whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? "text-[#ea1946]" : "text-[#212b65]"}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-[5px] h-11 rounded-full border border-[#d0d5dd] shadow-sm bg-white pl-3 pr-3 w-[314px] shrink-0">
          <Search size={20} className="text-[#667085] shrink-0" />
          <input
            placeholder="Buscar..."
            className="flex-1 text-sm text-[#0f100f] placeholder:text-[rgba(15,16,15,0.3)] outline-none bg-transparent"
          />
        </div>
      </header>
    </>
  );
}
