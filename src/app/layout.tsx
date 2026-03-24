import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Sandeep - Cloud Engineer & DevOps Specialist',
  description: 'Portfolio showcasing cloud engineering expertise in AWS, Azure, GCP, and DevOps solutions. Currently pursuing MS in Cloud Computing at NCI Ireland.',
  keywords: 'cloud engineer, devops, aws, azure, gcp, infrastructure, portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
