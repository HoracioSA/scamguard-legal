import type { Metadata } from 'next';
import { MarkdownDocument } from '../../lib/markdown';

export const metadata: Metadata = {
  title: 'Privacy Policy — ScamGuard',
};

export default function PrivacyPage() {
  return <MarkdownDocument filename="privacy-policy.md" />;
}
