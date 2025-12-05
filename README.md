# Next.js Tools Plugin

A fully modular and pluggable Next.js developer toolkit.

## Installation

```bash
npm install git+https://github.com/your-username/next-tools.git
# or
npm install ./local-path-to/next-tools
```

### Note on Next.js 16+ or Peer Dependency Conflicts

If you are using Next.js 16 (Canary/Beta) or encounter peer dependency conflicts (e.g. with `next-intl`), install with the legacy flag:

```bash
npm install git+https://github.com/ayberkenis/next-tools.git --legacy-peer-deps
```

## Configuration (Required)

Since this package is distributed as raw source code (JSX), you **must** add it to `transpilePackages` in your `next.config.js`:

`next.config.js` or `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-tools"],
};

module.exports = nextConfig;
```

## Usage

Add the `<NextTools />` component to your root layout.

`src/app/layout.jsx`:

```jsx
import NextTools from "next-tools";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Add this component at the end of your body */}
        <NextTools />
      </body>
    </html>
  );
}
```

The tool will appear as a floating action button in the bottom-right corner of your application.
