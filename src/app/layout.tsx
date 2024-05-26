import { Exo } from 'next/font/google';
import './globals.css';
import { exo } from '@/components/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased`}>{children}</body>
    </html>
  );
}