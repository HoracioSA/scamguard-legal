import Image from 'next/image';
import logoMark from '../public/logo-mark.png';

const FEATURES = [
  {
    title: 'AI-Powered Analysis',
    description:
      "Paste a message, share it in from any app, or upload a screenshot. Our AI checks it for scam patterns — phishing, fake prizes, romance scams, tech support scams, and more — and explains exactly why.",
  },
  {
    title: 'Community-Powered, Always Free',
    description:
      'Search or browse reports submitted by other users before you engage with an unfamiliar number, email, or handle. Found a scammer? Report them anonymously to help protect others.',
  },
  {
    title: 'Private by Design',
    description: 'No sign-up, no account, no email address required. ScamGuard works anonymously from the first launch.',
  },
  {
    title: 'Clear Safety Guidance',
    description:
      "Every verdict comes with plain-language, actionable steps for what to do — and what to avoid — specific to the type of scam detected.",
  },
];

export default function HomePage() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-content">
          <Image src={logoMark} alt="" width={56} height={72} priority />
          <h1>Know if it&apos;s a scam before you respond</h1>
          <p className="hero-subtitle">
            Check any suspicious message, call, or screenshot with AI — free to browse
            community-reported scammers, no account needed.
          </p>
        </div>
      </section>

      <section className="features">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="pro-note">
        <p>
          AI-powered analysis and screenshot scanning are part of <strong>ScamGuard Pro</strong>.
          Community reports, search, and your report history are always free.
        </p>
      </section>
    </div>
  );
}
