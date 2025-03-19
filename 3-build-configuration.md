# 3. Build Configuration

## Tasks
- [ ] Set up package.json targets:
  ```json
  {
    "targets": {
      "widget": {
        "source": "src/components/FormWidget.tsx",
        "context": "react-server"
      }
    }
  }
  ```
- [ ] Configure Parcel for minimal output
- [ ] Set up build scripts:
  - `build`: Generate production bundle
  - `dev`: Development with hot reload
- [ ] Ensure clean HTML output without extra markup

## Notes
- Focus on single component output
- Generate minimal JS bundle
- Keep build artifacts organized
- Make output Framer-friendly 