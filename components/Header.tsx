// Nota: el Figma solo trae el isotipo/logo de B Nutrition como imagen (sin
// subtítulo debajo). No se pudo descargar ese asset SVG en este entorno, así
// que aquí se usa únicamente el wordmark como placeholder — sin inventar
// texto adicional que no esté en el diseño. Sustituir por el logo real antes
// de producción.
export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full h-[64px] bg-white flex items-center justify-center border-b border-black/5">
      <span className="font-work font-extrabold text-xl text-bn-olive tracking-wide">
        BNUTRITION
      </span>
    </header>
  );
}
