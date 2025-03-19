# React Server Components Widget Implementation Plan

## Overview

Create a self-contained widget that leverages React Server Components (RSC) for optimal initial render and hydration, while maintaining a minimal output footprint suitable for embedding.

## Current Output Structure (dist/)

```
dist/
├── Form.html          # Static markup + embedded RSC payload
├── Form.ec3c8d0b.js   # Client bundle with hydration (stable hash)
└── Form.d5bfb115.css  # Extracted styles (stable hash)
```

## Target Output

- Single HTML snippet (form markup with embedded RSC payload)
- Minimal JS bundle (hydration + interactivity)
- Embedded CSS (scoped to widget)

## Component Architecture

```
src/
├── Form.tsx           # Server Component - Static markup
├── FormClient.tsx     # Client Component - Interactive form
└── styles.css         # Widget styles
```

## Implementation Status

### ✅ Phase 1: Basic RSC Setup

- Implemented server component entry point
- Setup client component with hydration
- Configured Parcel react-static target
- Basic form structure with styles

### 🚧 Phase 2: Asset Optimization

- [x] Configure stable filenames (using --no-content-hash)
- [ ] Setup public URL for assets
- [ ] Test with GitHub Pages deployment
- [ ] Verify Framer embedding

### 🔲 Phase 3: Framer Integration

- [ ] Split output for Framer's security model:
  - HTML content (direct embed)
  - Head content (CSS)
  - Body scripts (JS + RSC payload)
- [ ] Test hydration in Framer context
- [ ] Verify asset loading from external domain

### 🔲 Phase 4: Production Ready

- [ ] Optimize bundle size
- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Add form validation
- [ ] Setup analytics

## Technical Details

### RSC Integration

The RSC payload is embedded directly in the HTML output:

```html
<link rel="stylesheet" href="/Form.d5bfb115.css" data-precedence="default">
<script src="/Form.ec3c8d0b.js" type="module" async></script>
<div class="form-widget">
    <h1>Form Widget</h1>
    <div class="form-container"></div>
</div>
<script>(self.__FLIGHT_DATA ||= []).push("...")</script>
```

### Hydration Setup

```typescript
// FormClient.tsx
'use client'
import { hydrate } from '@parcel/rsc/client'

// Initialize hydration at module level
hydrate()

export function FormClient() {
  // Interactive form logic
}
```

## Next Steps

1. ✅ Configure stable filenames in Parcel
2. Setup GitHub Pages repository
3. Configure public URL for assets
4. Test GitHub Pages deployment
5. Implement Framer embedding strategy

## Open Questions

- Best strategy for hosting assets (GitHub Pages vs custom domain)
- Security implications of external asset loading in Framer
- Optimal way to version assets for production updates
