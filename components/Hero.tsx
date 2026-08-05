export default function Hero() {
  return (
    <section className="px-6 pt-2 pb-6 md:pt-24 md:pb-16 text-center max-w-[390px] md:max-w-4xl mx-auto">
      <h1 className="font-work text-bn-olive-light leading-[1.15]">
        <span className="block text-xl md:text-[50px] font-medium">
          PORTAFOLIO
        </span>
        {/* Copy 1:1 de Figma: mobile dice "GLP-1 FRIENDLY", desktop dice "GLP1 FRIENDLY" (sin guion) */}
        <span className="block text-4xl md:text-[80px] font-bold mt-1 md:leading-[82px]">
          <span className="md:hidden">GLP-1 FRIENDLY</span>
          <span className="hidden md:inline">GLP1 FRIENDLY</span>
        </span>
      </h1>
      <p className="font-nunito text-[#263238] text-[15px] md:text-[28px] leading-relaxed tracking-[0.3px] mt-4 md:mt-8">
        Durante tu tratamiento GLP-1, la alimentación es tan importante como el
        medicamento. Descubre nuestro portafolio de productos con fibra y
        proteína, y recetas pensadas para acompañarte en tu bienestar diario.
      </p>
    </section>
  );
}
