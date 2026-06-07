# InfiniteScroll

An infinite scrolling gradient with interactive controls, multiple color themes, and mouse-reactive effects.

## Features

- **Smooth gradient animation** — Colors cycle continuously using CSS Houdini registered properties for buttery-smooth transitions
- **6 color themes** — Pastel, Neon, Ocean, Sunset, Forest, and Cosmic (Crisp)
- **Mouse-reactive gradient** — The gradient angle subtly follows your cursor for an immersive feel
- **Floating depth orbs** — O R B
- **Settings**:
  - Speed slider (0.25x – 4x)
  - Gradient angle slider (0° – 360°)
  - Saturation intensity control (20% – 150%)
  - Mouse reactivity toggle
  - Floating orbs toggle
- **Fullscreen mode** — Press F (to pay respects) or use the button
- **Keyboard shortcuts** — Space (pause), F (fullscreen), S (settings), +/- (speed)
- **PWA support** — Install as a standalone app on any device. for some reason
- **Single-file build** — Optionally bundle everything into one self-contained HTML file
- **Accessibility** — Respects `prefers-reduced-motion`, includes ARIA labels, keyboard navigable because well, why shouldn't I
- **Infinite scroll** — The page keeps extending as you scroll down. it's kinda the name

## Getting Started

```bash
cd Build
npm install
npm run dev
```

## Build

```bash
# Standard build (multiple files + PWA)
npm run build

# Single-file build (one self-contained HTML)
npm run build:single
```

## Keyboard Shortcuts

| Key   | Action            |
|-------|-------------------|
| Space | Pause / Play      |
| F     | Toggle Fullscreen |
| S     | Toggle Settings   |
| + / - | Adjust Speed      |
| Esc   | Close Settings    |

## License

MIT
See [LICENSE](./LICENSE)