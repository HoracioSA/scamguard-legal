import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Support — ScamGuard',
};

const FAQS = [
  {
    question: 'Do I need to create an account?',
    answer: "No. ScamGuard works anonymously — there's no sign-up, login, or password.",
  },
  {
    question: 'How do I manage or cancel my ScamGuard Pro subscription?',
    answer:
      'Open the Settings app on your device, tap your name at the top, then Subscriptions, and select ScamGuard Pro.',
  },
  {
    question: 'How do I restore a subscription after reinstalling the app?',
    answer: 'Open ScamGuard, go to Settings, and tap "Restore purchases" under ScamGuard Pro.',
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero title="Support" subtitle="We're here to help." />

      <div className="legal-doc">
        <p>
          Need help with ScamGuard, found a bug, or have feedback? Email{' '}
          <a href="mailto:contact@horaciosapato.com">contact@horaciosapato.com</a> and we&apos;ll
          get back to you.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((faq) => (
          <div key={faq.question} className="feature-card">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}

        <div className="feature-card">
          <h2>I want a community report removed or corrected.</h2>
          <p>
            Email us at the address above with as much detail as you can (the sender identifier
            and approximate date) so we can locate it — see our{' '}
            <a href="/privacy">Privacy Policy</a> for how this works given the app&apos;s anonymous
            design.
          </p>
        </div>
      </div>
    </>
  );
}
