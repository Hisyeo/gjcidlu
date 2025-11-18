"use client";

import { useState, useMemo } from 'react';
import { getEntriesForTerm } from '@/lib/data';
import { validateNounPhrase, SyntaxError } from '@/lib/antlr';
import { useQueue } from '@/lib/hooks';
import { TermWithDetails } from '@/lib/data';
import { encode, encodeToSnakeCaseSyllabary } from '@/lib/htf-int';
import { decodeUnicode } from '@/lib/utils';

interface UntranslatedTermsProps {
  terms: TermWithDetails[];
}

interface TranslationInput {
  value: string;
  errors: SyntaxError[];
}

export default function UntranslatedTerms({ terms }: UntranslatedTermsProps) {
  const [translations, setTranslations] = useState<Record<string, TranslationInput>>({});
  const { addToQueue } = useQueue();

  const untranslatedTerms = useMemo(() => {
    return terms.filter(term => getEntriesForTerm(term.id).length === 0);
  }, [terms]);

  const handleInputChange = (termId: string, value: string) => {
    const errors = validateNounPhrase(value);
    setTranslations(prev => ({
      ...prev,
      [termId]: { value, errors },
    }));
  };

  const handleSave = () => {
    Object.entries(translations).forEach(([termId, { value, errors }]) => {
      if (value && errors.length === 0) {
        const term = untranslatedTerms.find(t => t.id === termId);
        if (term) {
          const contents = encode(value);
          const id = encodeToSnakeCaseSyllabary(contents);
          addToQueue({
            type: 'NEW_ENTRY',
            payload: {
              id,
              termId: term.id,
              contents,
              created: new Date().toISOString(),
            },
          });
        }
      }
    });
  };

  const canSave = useMemo(() => {
    return Object.values(translations).every(({ value, errors }) => !value || errors.length === 0);
  }, [translations]);

  if (untranslatedTerms.length === 0) {
    return <div className="text-center py-10"><p className="text-gray-500">No untranslated terms found.</p></div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={!canSave}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Save All to Queue
        </button>
      </div>
      {untranslatedTerms.map(term => (
        <div key={term.id} className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-900">{term.id.split('-')[0]}</h2>
          <p className="mb-1 font-mono text-gray-500">({term.pos.slice(0, 1)}.)</p>
          <p className="mb-4 text-gray-700 italic">{term.description}</p>
          <div className="mt-4">
            <input
              type="text"
              spellCheck="false"
              placeholder="Enter translation..."
              value={translations[term.id]?.value || ''}
              onChange={e => handleInputChange(term.id, e.target.value)}
              className={`w-full rounded-lg border p-3 focus:ring-2 focus:outline-none ${
                translations[term.id]?.errors.length > 0
                  ? 'border-red-500 ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {translations[term.id]?.errors.map((error, i) => (
              <div key={i} className="text-red-500 text-sm mt-1">
                Error at line {error.line}, column {error.column}: {decodeUnicode(error.msg)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
