# B Nutrition — Catálogo GLP-1 Friendly (Prototipo)

Prototipo funcional (Next.js 14 + TypeScript + Tailwind) del catálogo GLP-1 Friendly, mobile-first y responsive a desktop, portado 1:1 desde Figma: nav, hero, buscador/filtros, carruseles de productos "Con fibra" / "Con proteína", carrusel de recetas, footer, modal de filtros y modal de ficha de producto — todo interactivo.

Figma de referencia:
- Mobile (carrusel): https://www.figma.com/design/6BqLI829jWxSRIICYMI0Ft/Prototipos-B-Nutrition?node-id=2387-5707
- Desktop: https://www.figma.com/design/6BqLI829jWxSRIICYMI0Ft/Prototipos-B-Nutrition?node-id=2419-8754
- Ficha de producto (modal): https://www.figma.com/design/6BqLI829jWxSRIICYMI0Ft/Prototipos-B-Nutrition?node-id=1641-1116

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

- `app/` — layout, página principal (`page.tsx`), estilos globales.
- `components/` — Header, Hero, SearchAndFilters, ProductCard/Section, FiltrosModal, FichaModal, BottomNav, Footer.
- `lib/products.ts` — datos de los 12 productos (6 "Con fibra" + 6 "Con proteína").
- `lib/filters.ts` — subcategorías de filtro por macro-categoría.
- `public/images/products/` — fotografía real de producto (México).

## Pendientes antes de producción

1. **Logo**: tanto el header mobile como el nav desktop usan el wordmark "BNUTRITION" como placeholder de texto. Falta el isotipo real de Bimbo (asset de imagen en Figma, no se pudo descargar en este entorno).
2. **Foto de recetas**: la sección "Conoce recetas" no tiene fotografía real disponible (las carpetas conectadas solo tienen renders de empaque de producto, no fotos de platillos). Se usa un placeholder visual neutro en su lugar — falta reemplazar con fotografía real antes de producción.
3. **Footer desktop**: el Figma desktop trae 4 columnas de sitemap (MPN/ATA/RCT/Other) cuyo texto de links no pude leer completo en este entorno. El footer desktop reutiliza el mismo contenido verificado del footer mobile (Ayuda y soporte, Social, legales) reordenado en fila — no inventé los nombres de esas 4 columnas.
4. **Datos nutricionales**: solo 2 productos (Totopos Ancestrales, Barra Natura Mora) tienen valores confirmados contra etiqueta real. El resto usa datos de ejemplo, marcados con `verified: false` en `lib/products.ts` y con aviso visible en la ficha de producto. Deben confirmarse con etiqueta real (y aprobación de Legal/R&D para claims nutricionales) antes de publicar.
5. **Íconos**: se usó `lucide-react` + SVGs propios simples como sustituto fiel de los íconos de Figma (Heroicons/Feather) — no se pudieron descargar los assets SVG exactos.
6. **Copy "GLP1" vs "GLP-1"**: se respetó tal cual el Figma — el hero mobile dice "GLP-1 FRIENDLY" y el hero desktop dice "GLP1 FRIENDLY" (sin guion). Es una inconsistencia real del archivo de diseño, no del código.

## Deploy a GitHub + Vercel

No tengo un conector con permisos de escritura a GitHub, así que estos pasos son manuales:

1. Crea un repo vacío en GitHub (sin README/gitignore).
2. En este proyecto (ya tiene `git init` + commit inicial):
   ```bash
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. En Vercel: **New Project** → importa el repo → framework detectado automáticamente como Next.js → Deploy.

No hace falta configurar variables de entorno.
