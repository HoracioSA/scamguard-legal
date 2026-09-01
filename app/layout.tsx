import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoMark from '../public/logo-mark.png';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScamGuard Legal',
  description: 'Terms and Conditions and Privacy Policy for the ScamGuard app.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="site-header">
            <Link href="/" className="brand">
              <Image src={logoMark} alt="" width={24} height={32} priority />
              ScamGuard
            </Link>
            <nav>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
            </nav>
          </header>
          <main className="content">{children}</main>
          <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} ScamGuard</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
