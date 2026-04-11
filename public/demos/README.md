# Demos de carruseles

Tres implementaciones de carrusel construidas desde cero en HTML, CSS y JavaScript. Sin frameworks, sin dependencias externas, 100% responsive.

El objetivo de estas demos es mostrar distintas técnicas de implementación según el caso de uso: una transición fade para contenido destacado, un carrusel multi-slide para testimonios, y un coverflow 3D para un portafolio visual.

## Demos incluidas

### 1. Restaurante — Fade carousel
Carrusel con transición por opacidad, pensado para destacar platos de un menú.

- Auto-play con pausa en hover
- Navegación con flechas, dots, teclado y swipe táctil
- Responsive: vista apilada en móvil
- Ruta: `restaurant/`

### 2. Agencia — Multi-slide responsive
Carrusel de testimonios que muestra 1, 2 o 3 tarjetas a la vez según el ancho de pantalla.

- Breakpoints dinámicos recalculados al redimensionar
- Desplazamiento con `transform: translateX` para animación fluida
- Soporte touch/swipe
- Auto-play con reinicio al interactuar
- Ruta: `services/`

### 3. Portafolio — Coverflow 3D
Carrusel con efecto de profundidad 3D al estilo coverflow.

- CSS 3D: `perspective`, `rotateY`, `translateZ`, `scale`
- Drag con mouse y swipe en móvil
- Navegación con teclado (flechas ← →)
- Click en slides laterales para saltar a ellos
- Loop infinito visual
- Ruta: `portfolio/`

## Estructura

```
demos/
├── index.html              Página índice con las 3 demos
├── restaurant/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── services/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── portfolio/
    ├── index.html
    ├── styles.css
    └── script.js
```

## Cómo probar localmente

Basta con abrir `index.html` en el navegador. No hay build ni servidor requerido.

```bash
open index.html
```

## Compatibilidad

Probado en Chrome, Firefox, Safari y navegadores móviles modernos. Funciona en resoluciones desde 320px hasta 4K.

## Notas técnicas

Cada carrusel está implementado como una clase JavaScript independiente, sin dependencias compartidas. El código está organizado pensando en que se pueda copiar un archivo individual a otro proyecto con cambios mínimos.

Los estilos usan variables mínimas y selectores de baja especificidad para facilitar la integración en sitios con otros CSS cargados (por ejemplo, dentro de un tema de WordPress).

---

Héctor Riquelme
