import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-intro">
      <h1>ScamGuard Legal</h1>
      <p>Legal documents for the ScamGuard mobile app.</p>
      <div className="home-links">
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/support">Support</Link>
      </div>
    </div>
  );
}
