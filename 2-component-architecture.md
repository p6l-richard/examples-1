# 2. Component Architecture

## Tasks
- [ ] Create FormWidget.tsx with:
  ```typescript
  // Server Component
  export default function FormWidget() {
    return (
      <>
        <ClientForm />
        <script src="form-widget.js" />
      </>
    )
  }

  // Client Component
  'use client'
  function ClientForm() {
    // Interactive form logic
  }
  ```
- [ ] Implement minimal state management
- [ ] Add form validation
- [ ] Set up co-located hydration script
- [ ] Add basic styling

## Notes
- Keep component self-contained
- Ensure minimal client-side JavaScript
- Focus on clean separation between server/client parts
- Make hydration script path configurable 