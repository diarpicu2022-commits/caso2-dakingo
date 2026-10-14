# Caso 2 — Dakingo

Landing pixel perfect del mockup [`docs/ux/Caso2.jpg`](docs/ux/Caso2.jpg) con NestJS + Tailwind CSS.

```bash
npm install
npm start          # compila Tailwind + Nest y sirve en http://localhost:3000
npm run start:dev  # modo watch (para Tailwind en paralelo: npm run watch:css)
```

- `src/landing/landing.service.ts`: contenido (navegación, productos, galería, footer).
- `views/index.hbs` y `views/partials/icon-*.hbs`: plantilla e iconos SVG.
- `src/styles/input.css`: tokens de diseño y la escala proporcional de escritorio.
- `docs/ux/anexos/2026-10-14-caso2.md`: tokens medidos, decisiones y verificación.
