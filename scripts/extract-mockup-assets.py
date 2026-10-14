"""Recorta del mockup (docs/ux/Caso2.jpg) las imágenes e iconos de la landing.

Coordenadas en píxeles del mockup (768 x 1344), medidas detectando bordes.
Cada recorte se amplía x4 con Lanczos y un enfoque suave, para que no se vea
borroso a 1440 px ni en pantallas de alta densidad.

Uso: python scripts/extract-mockup-assets.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "docs" / "ux" / "Caso2.jpg"
OUT = ROOT / "public" / "img" / "mockup"
SCALE = 4


def circle(cx, cy, r):
    return (cx - r, cy - r, cx + r, cy + r)


ASSETS = {
    # hero: zona interior del aro blanco
    "hero-main": circle(187.5, 223, 93),
    "hero-top": circle(603.5, 174, 41),
    "hero-bottom": circle(603.5, 280, 41),
    # bestsellers: zona de imagen de cada tarjeta (el corazón se tapa abajo)
    "p-truffle": (92, 524, 217, 597),
    "p-chocochip": (246, 524, 371, 597),
    "p-tropical": (399, 524, 524, 597),
    "p-butterscotch": (551, 524, 676, 597),
    # galería (3 px hacia dentro para no arrastrar el fondo de las esquinas)
    "g-1": (387, 778, 525, 883),
    "g-2": (540, 778, 678, 885),
    "g-3": (387, 898, 525, 1005),
    "g-4": (540, 898, 678, 1005),
    "g-5": (387, 1019, 525, 1127),
    "g-6": (540, 1020, 678, 1127),
    # avatares
    "a-1": circle(105, 1105, 11.5),
    "a-2": circle(132, 1105, 11.5),
    "a-3": circle(159.5, 1105, 11.5),
    "a-4": circle(187, 1105, 11.5),
    "a-5": circle(214.5, 1105, 11.5),
    # ilustración del ticket con confeti
    "ticket": (92, 928, 182, 1042),
    # iconos de categorías (sobre la tarjeta blanca)
    "c-classic": (323, 386, 363, 422),
    "c-gourmet": (415, 386, 455, 422),
    "c-desserts": (507, 386, 547, 422),
    "c-cookies": (599, 386, 639, 422),
    # círculos de promesa (aro incluido)
    "pr-delivery": circle(123, 833, 23),
    "pr-designs": circle(185.5, 833, 23),
    "pr-orders": circle(248, 833, 23),
    "pr-fresh": circle(311, 833, 23),
    # círculos rápidos del menú
    "m-1": circle(101, 437, 16),
    "m-2": circle(138, 437, 16),
    "m-3": circle(174.5, 437, 16),
}

# corazón rojo de cada tarjeta, en coordenadas locales del recorte de producto
HEART = (5, 53, 19, 67)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC).convert("RGB")
    for name, box in ASSETS.items():
        box = tuple(round(v) for v in box)
        crop = src.crop(box)
        if name.startswith("p-"):
            ImageDraw.Draw(crop).rectangle(HEART, fill=(254, 254, 254))
        big = crop.resize((crop.width * SCALE, crop.height * SCALE), Image.LANCZOS)
        big = big.filter(ImageFilter.UnsharpMask(radius=2, percent=70, threshold=2))
        big.save(OUT / f"{name}.webp", quality=92, method=6)
        print(f"{name:15} {box} -> {big.size}")


if __name__ == "__main__":
    main()
