# B Nutrition — Catálogo GLP-1 Friendly (Prototipo)

Prototipo funcional (Next.js 14 + TypeScript + Tailwind) del catálogo mobile GLP-1 Friendly, portado 1:1 desde Figma: catálogo con secciones "Con proteína" / "Con fibra", modal de filtros y modal de ficha de producto, todo interactivo.

Figma de referencia: https://www.figma.com/design/6BqLI829jWxSRIICYMI0Ft/Prototipos-B-Nutrition?node-id=1641-1116

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

1. **Logo**: el header usa un logo de texto placeholder ("B NUTRITION / BY GRUPO BIMBO"). Falta el asset SVG real de Bimbo (no se pudo descargar desde Figma en este entorno).
2. **Taxonomía de filtros "Con Proteína"**: en Figma el modal de filtros incluye por error 2 subcategorías que pertenecen a "Con Fibra" ("Multigrano y semillas", "Sin harinas refinadas"). Se excluyeron deliberadamente en el código (`lib/filters.ts`), dejando solo: Botanas, Pan blanco, Pan integral. Vale la pena confirmar con diseño si el Figma debe corregirse también.
3. **Datos nutricionales**: solo 2 productos (Totopos Ancestrales, Barra Natura Mora) tienen valores confirmados contra etiqueta real. El resto usa datos de ejemplo, marcados con `verified: false` en `lib/products.ts` y con aviso visible en la ficha de producto. Deben confirmarse con etiqueta real (y aprobación de Legal/R&D para claims nutricionales) antes de publicar.
4. **Íconos**: se usó `lucide-react` como sustituto fiel de los íconos de Figma (Heroicons/Feather) — no se pudieron descargar los assets SVG exactos.

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
