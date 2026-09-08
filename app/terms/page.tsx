import type { Metadata } from 'next';
import { MarkdownDocument } from '../../lib/markdown';
import { PageHero } from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Terms and Conditions — ScamGuard',
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms and Conditions" subtitle="Please read these carefully before using ScamGuard." />
      <MarkdownDocument filename="terms-and-conditions.md" />
    </>
  );
}
