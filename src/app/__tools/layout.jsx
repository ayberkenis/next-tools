import ToolsLayout from '../../next-tools/layout';

export const metadata = {
  title: 'Next.js Tools',
  description: 'Developer dashboard for Next.js',
  robots: 'noindex, nofollow',
};

export default function Layout({ children }) {
  return <ToolsLayout>{children}</ToolsLayout>;
}
