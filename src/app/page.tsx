import { getTermsWithDetailsSortedByDate } from '@/lib/data';
import TermList from '@/components/TermList';

export const revalidate = 0;

export default async function Home() {
  const termsWithDetails = await getTermsWithDetailsSortedByDate();

  return (
    <main className="container mx-auto mt-8 p-4">
      <div className="mx-auto max-w-2xl">
        <TermList initialTerms={termsWithDetails} />
      </div>
    </main>
  );
}