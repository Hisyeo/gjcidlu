"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { addToQueue, getQueue } from '@/lib/queue';
import { Term, Entry, QueueAction } from '@/lib/types';
import { useToast } from '@/app/ToastContext';
import { validateNounPhrase, SyntaxError } from '@/lib/antlr';
import { encode, encodeToSnakeCaseSyllabary } from '@/lib/htf-int';
import { decodeUnicode } from '@/lib/utils';

function NewTermForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTermName = searchParams.get('name') || '';
  const { showToast } = useToast();

  const [termName, setTermName] = useState(initialTermName);
  const [pos, setPos] = useState('');
  const [description, setDescription] = useState('');
  const [translation, setTranslation] = useState('');
  const [syntaxErrors, setSyntaxErrors] = useState<SyntaxError[]>([]);
  const [existingTerm, setExistingTerm] = useState<Term | null>(null);

  useEffect(() => {
    const queue = getQueue();
    const termFromQueue = queue
      .filter((action): action is { type: 'NEW_TERM'; payload: Term; id: string } => action.type === 'NEW_TERM')
      .find(action => action.payload.id.startsWith(termName.toLowerCase().replace(/\s+/g, '-')));
    
    if (termFromQueue) {
      setExistingTerm(termFromQueue.payload);
    }
  }, [termName]);

  useEffect(() => {
    if (translation.trim()) {
      const errors = validateNounPhrase(translation);
      setSyntaxErrors(errors);
    } else {
      setSyntaxErrors([]);
    }
  }, [translation]);

  const handleAddTranslation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!translation.trim() || syntaxErrors.length > 0 || !existingTerm) return;

    const newTranslationContents = encode(translation);
    const newEntryId = encodeToSnakeCaseSyllabary(newTranslationContents);

    const newEntry: Entry = {
      id: newEntryId,
      termId: existingTerm.id,
      contents: newTranslationContents,
      created: new Date().toISOString(),
    };

    addToQueue({ type: 'NEW_ENTRY', payload: newEntry });
    router.push(`/term/${existingTerm.id}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termName || !pos || !description) {
      showToast('Please fill out all fields.', 'error');
      return;
    }

    const termId = `${termName.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substring(2, 7)}`;

    const newTerm: Term = {
      id: termId,
      pos,
      description,
    };

    addToQueue({ type: 'NEW_TERM', payload: newTerm });
    router.push('/');
  };

  if (existingTerm) {
    return (
      <main className="container mx-auto mt-8 p-4">
        <div className="mx-auto max-w-xl">
          <Link href="/" className="mb-4 block text-sm text-blue-600 hover:underline">
            &larr; Back to all terms
          </Link>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Add Translation for &quot;{existingTerm.id.split('-')[0]}&quot;</h2>
            <p className="mt-1 text-gray-500">This term is in your submission queue. Add a translation for it.</p>

            <form onSubmit={handleAddTranslation} className="mt-6 space-y-4">
              <div>
                <label htmlFor="translation" className="block text-sm font-medium text-gray-700"> Translation </label>
                <input
                  type="text"
                  id="translation"
                  value={translation}
                  onChange={(e) => setTranslation(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                />
                {syntaxErrors.length > 0 && (
                  <div className="mt-2 text-sm text-red-600">
                    <details>
                      <summary>Syntax errors found</summary>
                      <ul className="list-disc list-inside">
                        {syntaxErrors.map((error, i) => (
                          <li key={i}>{decodeUnicode(error.msg)}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                )}
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700" disabled={!translation.trim() || syntaxErrors.length > 0}>Add Translation to Queue</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-8 p-4">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="mb-4 block text-sm text-blue-600 hover:underline">
          &larr; Back to all terms
        </Link>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Add a New Term Meaning</h2>
          <p className="mt-1 text-gray-500">This will create a new, distinct entry. (e.g., &quot;Bank&quot; as a noun &quot;a financial institution&quot; vs. &quot;Bank&quot; as a noun &quot;a river side&quot;).</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="term-name" className="block text-sm font-medium text-gray-700"> Term </label>
              <input
                type="text"
                id="term-name"
                value={termName}
                onChange={(e) => setTermName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="pos" className="block text-sm font-medium text-gray-700"> Part of Speech </label>
              <select
                id="pos"
                value={pos}
                onChange={(e) => setPos(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              >
                <option value="">-- Select --</option>
                <option value="noun">Noun (n.)</option>
                <option value="adjective">Adjective (adj.)</option>
                <option value="verb">Verb (v.)</option>
                <option value="adverb">Adverb (adv.)</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700"> Brief English Description </label>
              <textarea
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., 'Lasting for a very short time.'"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2"
              ></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">Add to Submission Queue</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function NewTermPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewTermForm />
        </Suspense>
    )
}
