---
name: Kinetic Engineering
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e1bfb2'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#a98a7e'
  outline-variant: '#594137'
  surface-tint: '#ffb596'
  primary: '#ffb596'
  on-primary: '#581e00'
  primary-container: '#ff6d1f'
  on-primary-container: '#5b1f00'
  inverse-primary: '#a43e00'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b6b4b7'
  tertiary: '#c8c6c9'
  on-tertiary: '#303033'
  tertiary-container: '#9b999d'
  on-tertiary-container: '#323235'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7d2d00'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e4e2e5'
  tertiary-fixed-dim: '#c8c6c9'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style

This design system is built for the intersection of high-performance engineering and minimalist digital utility. It targets a professional audience of engineers, developers, and data analysts who require a high-density, distraction-free environment.

The aesthetic is **Modern Minimalist** with a focus on technical precision. It leverages a dark-mode-first approach to reduce eye strain during prolonged technical work, while utilizing a sharp accent color to signal action and movement. The atmosphere is "calm but capable"—evoking the feeling of a well-oiled machine operating in a quiet lab. 

Key principles include:
- **Precision over Ornamentation:** Every line and space has a functional purpose.
- **Controlled Energy:** The vibrant orange is used sparingly to highlight performance metrics and primary actions.
- **Technical Clarity:** High-contrast text ensures legibility of complex data structures.

## Colors

The palette is optimized for a sophisticated dark theme. The primary color is a **High-Performance Deep Orange**, adjusted for maximum vibrancy against dark backgrounds without causing chromatic aberration.

- **Primary (#FF6D1F):** Used for critical calls to action, active states, and "kinetic" data points.
- **Surface Palette:** The background utilizes a near-black neutral (#0A0A0B), while containers use a slightly lighter "Zinc" gray to create depth without relying on heavy shadows.
- **Semantic Colors:** Error states should utilize a desaturated red, while success states use a technical emerald green to maintain the professional, balanced tone.
- **Text:** Pure white (#FFFFFF) is reserved for headers; secondary body text uses a subtle gray (#A1A1AA) to maintain the calm atmosphere.

## Typography

This design system uses **Sora** exclusively. As a geometric sans-serif with a technical spirit, it perfectly complements the engineering narrative.

- **Headlines:** Use SemiBold weights with tighter letter-spacing to create a "dense" and impactful look for titles.
- **Body:** Regular weights provide excellent legibility. The line height is intentionally generous (1.5x) to prevent dense technical blocks from becoming overwhelming.
- **Labels:** Small labels and data captions should use uppercase styling and increased letter-spacing to distinguish them from standard prose.

## Layout & Spacing

The layout is governed by a **Fixed Grid** system to ensure mathematical precision across all views.

- **The 8px Rule:** All spacing, padding, and margins must be multiples of 8px.
- **Grid Model:** A 12-column grid is used for desktop (1280px max-width), transitioning to a 4-column grid for mobile devices.
- **Refined Margins:** Generous outer margins (48px on desktop) are used to "frame" the content, reinforcing the minimalist aesthetic and creating a focused viewport.
- **Gutters:** A consistent 24px gutter provides enough breathing room to separate complex data modules without breaking the visual relationship between related elements.

## Elevation & Depth

To maintain a "calm" and professional atmosphere, this design system avoids heavy shadows and traditional skeuomorphism. Instead, it uses **Tonal Layering and Subtle Borders**.

- **Surface Levels:** Depth is communicated by lightening the background hex by small increments (e.g., Background -> Surface -> Overlay).
- **Subtle Borders:** Elements like cards and input fields use a 1px solid border. The border color should be only 5-10% lighter than the surface it sits on (#2D2D30).
- **Active State Glow:** Instead of a shadow, active or focused elements may use a very soft, low-opacity outer glow using the primary orange color to simulate a high-tech "powered-on" state.

## Shapes

The shape language is **Soft/Technical**. While sharp corners feel too aggressive and fully rounded "pill" shapes feel too consumer-focused, a subtle radius provides a modern, engineered feel.

- **Radius (0.25rem):** Used for standard buttons, input fields, and small UI components.
- **Large Radius (0.5rem):** Used for cards, containers, and modal windows.
- **Consistency:** All borders must maintain a consistent 1px thickness to reinforce the precision of the design system.

## Components

### Buttons
- **Primary:** Solid #FF6D1F with white or near-black text. No gradients.
- **Secondary:** Transparent background with a 1px border (#2D2D30). Text in white.
- **Interaction:** On hover, the primary button slightly increases in brightness; the secondary button gains a subtle background tint.

### Input Fields
- **Default:** Dark background (#1E1E20) with a subtle border.
- **Focus:** The border changes to the primary orange with a 1px thickness. No heavy glow.
- **Labels:** Labels sit above the field in the `label-sm` uppercase style for a technical data-entry feel.

### Cards & Modules
- Cards are used to group related metrics or data visualizations. 
- They should not have shadows; use the tonal layering approach with a 1px border.

### Chips & Tags
- Used for status indicators. High-contrast background with bold text. 
- Status: "Running" (Green), "Idle" (Gray), "Error" (Orange/Red).

### Data Tables
- High-density rows with 1px horizontal dividers. 
- Header rows use the `label-sm` style with a slightly darker background to anchor the data columns.