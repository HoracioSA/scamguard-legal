import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — ScamGuard',
};

export default function SupportPage() {
  return (
    <div className="legal-doc">
      <h1>Support</h1>
      <p>
        Need help with ScamGuard, found a bug, or have feedback? Email{' '}
        <a href="mailto:contact@horaciosapato.com">contact@horaciosapato.com</a> and we&apos;ll get
        back to you.
      </p>

      <h2>Common questions</h2>

      <p>
        <strong>Do I need to create an account?</strong>
        <br />
        No. ScamGuard works anonymously — there&apos;s no sign-up, login, or password.
      </p>

      <p>
        <strong>How do I manage or cancel my ScamGuard Pro subscription?</strong>
        <br />
        Open the Settings app on your device, tap your name at the top, then Subscriptions, and
        select ScamGuard Pro.
      </p>

      <p>
        <strong>How do I restore a subscription after reinstalling the app?</strong>
        <br />
        Open ScamGuard, go to Settings, and tap &quot;Restore purchases&quot; under ScamGuard Pro.
      </p>

      <p>
        <strong>I want a community report removed or corrected.</strong>
        <br />
        Email us at the address above with as much detail as you can (the sender identifier and
        approximate date) so we can locate it — see our{' '}
        <a href="/privacy">Privacy Policy</a> for how this works given the app&apos;s anonymous
        design.
      </p>
    </div>
  );
}
