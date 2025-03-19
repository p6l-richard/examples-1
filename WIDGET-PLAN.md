# React Server Components Widget Implementation Plan

## Overview

Create a self-contained widget that leverages React Server Components (RSC) for optimal initial render and hydration, while maintaining a minimal output footprint suitable for embedding.

## Current Output Structure (dist/)

```
dist/
├── index.html     # Static markup + embedded RSC payload (4.4KB)
└── pages.*.js     # Client bundle with React runtime & hydration
```

## Target Output

- Single HTML snippet (form markup with embedded RSC payload)
- Minimal JS bundle (hydration + interactivity)
- Embedded CSS (scoped to widget)

## Component Architecture

```
src/
├── components/
│   ├── Form.tsx          # Server Component - Static markup
│   ├── FormStep.tsx      # Client Component - Interactive form
│   └── Chart.tsx         # Client Component - Lazy loaded visualization
├── client.ts             # Hydration entry
└── widget-entry.tsx      # Server entry
```

## Implementation Phases

### Phase 1: Widget Entry Setup

- Create minimal RSC server entry point
- Remove page-related props/routing
- Configure build for widget output
- Setup basic hydration with embedded RSC payload

### Phase 2: Form Component Structure

- Implement static form markup as Server Component
  - Optimized initial load
  - No client-side dependencies
- Interactive form logic as Client Component
  - Form state management
  - Step transitions
  - Validation
- Lazy loaded chart visualization
  - Load on form completion
  - Minimal initial bundle

### Phase 3: Build Configuration

- Configure Parcel for widget-specific output
- Optimize bundle splitting
  - Core hydration
  - Form interactivity
  - Chart visualization
- Setup static generation pipeline
- Remove unnecessary page routing/navigation

## Technical Details

### RSC Integration

The RSC payload is embedded directly in the HTML output as `__FLIGHT_DATA`:

```html
<!-- Widget with embedded RSC payload -->
<div id="form-widget">
  <!-- Static HTML markup -->
  <form class="form-container">...</form>
  
  <!-- Embedded RSC payload -->
  <script>
    (self.__FLIGHT_DATA||=[]).push("...");
  </script>
</div>
```

### Hydration Setup

```typescript
// client.ts
import { hydrate } from '@parcel/rsc/client'

// Hydrate from embedded RSC payload
const updateRoot = hydrate()

// Initialize any client-side listeners
```

### Build Process

1. RSC generates static HTML with embedded payload at build time
2. Client components are compiled into minimal JS bundle
3. CSS is extracted and scoped
4. Output includes:

   ```
   widget/
   ├── widget.html    # Static markup + RSC payload
   ├── widget.js      # Hydration + interactivity
   └── widget.css     # Scoped styles
   ```

### Widget Embedding

Final output will be embeddable via:

```html
<!-- Widget Styles -->
<link rel="stylesheet" href="widget.css">

<!-- Widget with embedded RSC -->
<div id="form-widget">
  <!-- Paste widget.html content here -->
</div>

<!-- Widget Hydration -->
<script src="widget.js" async></script>
```

### Data Flow

1. Initial load: Static HTML with embedded RSC payload
2. Hydration: Restore interactivity using embedded payload
3. Form completion: Lazy load chart
4. Data submission: External handler (Hubspot)

## Next Steps

1. Implement Phase 1
2. Validate minimal RSC setup
3. Proceed with form implementation
4. Configure optimal build output
