import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
