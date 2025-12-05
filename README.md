# Next.js Tools Plugin

A fully modular and pluggable Next.js developer toolkit.

## Installation

```bash
npm install git+https://github.com/your-username/next-tools.git
# or
npm install ./local-path-to/next-tools
```

## Usage

1. Create the tools route in your App Router:

`src/app/__tools/layout.jsx`:
```jsx
import ToolsLayout from 'next-tools/layout';

export const metadata = {
  title: 'Next.js Tools',
  robots: 'noindex, nofollow',
};

export default function Layout({ children }) {
  return <ToolsLayout>{children}</ToolsLayout>;
}
```

`src/app/__tools/page.jsx`:
```jsx
import ToolsPage from 'next-tools/page';

export default function Page() {
  return <ToolsPage />;
}
```

2. Configure (Optional) in `src/next-tools.config.js` or pass props.

