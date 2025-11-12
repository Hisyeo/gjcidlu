import { getTerms } from '@/lib/data';
import TermList from '@/components/TermList';

export default async function Home() {
  const terms = await getTerms();

  return (
    <main className="container mx-auto mt-8 p-4">
      <div className="mx-auto max-w-2xl">
        <TermList initialTerms={terms} />
      </div>
    </main>
  );
}
