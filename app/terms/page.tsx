import type { Metadata } from 'next';
import { MarkdownDocument } from '../../lib/markdown';

export const metadata: Metadata = {
  title: 'Terms and Conditions — ScamGuard',
};

export default function TermsPage() {
  return <MarkdownDocument filename="terms-and-conditions.md" />;
}
