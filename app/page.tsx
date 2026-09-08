import Image from 'next/image';
import logoMark from '../public/logo-mark.png';
import welcomeShot from '../public/screenshots/welcome.jpg';
import communityShot from '../public/screenshots/community.jpg';
import analysisShot from '../public/screenshots/analysis.jpg';
import searchShot from '../public/screenshots/search.jpg';
import detailShot from '../public/screenshots/detail.jpg';
import reportsShot from '../public/screenshots/reports.jpg';

const SCREENSHOTS = [
  { src: welcomeShot, alt: 'ScamGuard welcome screen' },
  { src: communityShot, alt: 'Community screen showing reported senders' },
  { src: analysisShot, alt: 'Analyze screen checking a message with AI' },
  { src: searchShot, alt: 'Search screen for checking a sender' },
  { src: detailShot, alt: 'Report detail screen for a sender' },
  { src: reportsShot, alt: 'My Reports screen' },
];

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

      <section className="gallery">
        {SCREENSHOTS.map((shot) => (
          <div key={shot.alt} className="gallery-item">
            <Image src={shot.src} alt={shot.alt} />
          </div>
        ))}
      </section>

      <section className="features">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="pricing">
        <h2 className="pricing-title">Simple, fair pricing</h2>
        <p className="pricing-subtitle">Start free. Upgrade only if you want AI on your side.</p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free</h3>
            <p className="pricing-price">
              $0<span>/month</span>
            </p>
            <ul>
              <li>Browse &amp; search the community scam directory</li>
              <li>Submit reports anonymously</li>
              <li>Personal report history &amp; blocklist</li>
              <li>No sign-up, ever</li>
            </ul>
          </div>

          <div className="pricing-card pricing-card-featured">
            <span className="pricing-badge">Recommended</span>
            <h3>ScamGuard Pro</h3>
            <p className="pricing-price">
              $4.99<span>/month</span>
            </p>
            <ul>
              <li>Everything in Free</li>
              <li>AI-powered scam analysis for any message</li>
              <li>Screenshot scanning with OCR</li>
              <li>Detailed reasoning &amp; safety guidance for every verdict</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
