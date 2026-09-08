import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoMark from '../public/logo-mark.png';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScamGuard',
  description: 'Check any suspicious message, call, or screenshot for scam patterns with AI.',
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
          </header>
          <main className="content">{children}</main>
          <footer className="site-footer">
            <nav className="footer-links">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/support">Support</Link>
            </nav>
            <p>&copy; {new Date().getFullYear()} ScamGuard</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
