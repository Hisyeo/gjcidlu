"use client";

import React, { useState } from 'react';
import { Term } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface ConfirmationModalProps {
  title: string;
  message: string;
  buttons?: {
    text: string;
    onClick: () => void;
    className?: string;
  }[];
  terms?: Term[];
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ title, message, buttons, terms, onClose }) => {
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const router = useRouter();

  const handleTranslate = () => {
    if (selectedTermId) {
      router.push(`/new-term?existing-submission-term-id=${selectedTermId}`);
      onClose();
    }
  };

  const handleAlternativeMeaning = () => {
    if (terms && terms.length > 0) {
        router.push(`/new-term?name=${encodeURIComponent(terms[0].id.split('-')[0])}`);
        onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600">{message}</p>
          {terms && terms.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">Select one of the existing meanings to add a translation, or create an alternative meaning.</p>
              {terms.map(term => (
                <div key={term.id} className="flex items-center">
                  <input
                    type="radio"
                    id={term.id}
                    name="term-selection"
                    value={term.id}
                    checked={selectedTermId === term.id}
                    onChange={(e) => setSelectedTermId(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor={term.id} className="ml-3 block text-sm font-medium text-gray-700">
                    ({term.pos}) {term.description}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex justify-end space-x-3">
            {terms && terms.length > 0 ? (
                <>
                    <button
                        onClick={handleTranslate}
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                        disabled={!selectedTermId}
                    >
                        Translate
                    </button>
                    <button
                        onClick={handleAlternativeMeaning}
                        className="px-5 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
                    >
                        Alternative Meaning
                    </button>
                </>
            ) : (
                buttons?.map((button, index) => (
                    <button
                        key={index}
                        onClick={button.onClick}
                        className={`px-5 py-2 rounded-lg ${button.className || 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        {button.text}
                    </button>
                ))
            )}
             <button onClick={onClose} className="px-5 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
