import type { Metadata } from 'next';
import { MarkdownDocument } from '../../lib/markdown';
import { PageHero } from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy — ScamGuard',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How we collect, use, and protect your information." />
      <MarkdownDocument filename="privacy-policy.md" />
    </>
  );
}
