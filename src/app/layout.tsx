import type { Metadata } from 'next';
import './globals.css';
import './case-styles.css';

export const metadata: Metadata = {
  title: 'JohnDera — Frontend Engineer',
  description: 'Frontend engineer building thoughtful, responsive and technically ambitious digital products.',
  metadataBase: new URL('https://github.com/bos-code'),
  openGraph: {
    title: 'JohnDera — Frontend Engineer',
    description: 'Selected product, interface and frontend engineering work by Chidera Okonkwo.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
