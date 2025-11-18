import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getQueue, removeFromQueue } from '@/lib/queue';
import { QueueAction, Entry, EntriesData } from '@/lib/types'; // Import EntriesData
import CheckoutModal from './CheckoutModal';
import { decode } from '@/lib/htf-int';

interface SubmissionQueueProps {
  toggleQueue: () => void;
  allEntries: EntriesData; // Use the specific type
}

const SubmissionQueue: React.FC<SubmissionQueueProps> = ({ toggleQueue, allEntries }) => {
  const [queue, setQueue] = useState<QueueAction[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updateQueue = () => setQueue(getQueue());
    window.addEventListener('storage', updateQueue);
    updateQueue();
    return () => window.removeEventListener('storage', updateQueue);
  }, []);

  const handleRemove = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Prevent navigation when clicking the remove button
    removeFromQueue(id);
  };

  const handleOpenModal = () => {
    if (queue.length > 0) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleItemClick = (action: QueueAction) => {
    if (action.type === 'NEW_ENTRY' || action.type === 'VOTE') {
      router.push(`/term/${action.payload.termId}`);
      toggleQueue();
    } else if (action.type === 'NEW_TERM') {
      router.push(`/new-term?existing-submission-term-id=${action.payload.id}`);
      toggleQueue();
    }
  };

  const getTranslationForEntryId = (entryId: string): string => {
    // 1. Search in the current queue
    const queueEntry = queue.find(
      (action): action is { type: 'NEW_ENTRY'; payload: Entry; id: string } =>
        action.type === 'NEW_ENTRY' && action.payload.id === entryId
    );
    if (queueEntry) {
      return decode(queueEntry.payload.contents);
    }

    // 2. Search in the allEntries data from props
    for (const termId in allEntries) {
      const termEntries = allEntries[termId];
      const entry = termEntries[entryId];
      if (entry && typeof entry !== 'string' && 'contents' in entry) { // Type guard
        return decode(entry.contents);
      }
    }
    
    // 3. Fallback
    return entryId;
  };

  const renderAction = (action: QueueAction) => {
    switch (action.type) {
      case 'NEW_TERM':
        return (
          <>
            <h3 className="font-medium text-gray-900">New Term: &quot;{action.payload.id.split('-')[0]}&quot;</h3>
            <p className="text-sm text-gray-600">({action.payload.pos}) &quot;{action.payload.description}&quot;</p>
          </>
        );
      case 'NEW_ENTRY':
        return (
          <>
            <h3 className="font-medium text-gray-900">New Translation: &quot;{decode(action.payload.contents)}&quot;</h3>
            <p className="text-sm text-gray-600">For: &quot;{action.payload.termId}&quot;</p>
          </>
        );
      case 'VOTE':
        const translation = getTranslationForEntryId(action.payload.entryId);
        return (
          <>
            <h3 className="font-medium text-gray-900">{action.payload.voteType.charAt(0).toUpperCase() + action.payload.voteType.slice(1)} vote for &quot;{translation}&quot;</h3>
            <p className="text-sm text-gray-600">Term: &quot;{action.payload.termId}&quot;</p>
          </>
        );
    }
  };

  const getIconForAction = (action: QueueAction) => {
    // ... (icon logic remains the same)
    switch (action.type) {
        case 'NEW_TERM':
          return (
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
          );
        case 'NEW_ENTRY':
          return (
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m4 10h.01M11 11h.01M13 11h.01M16 11h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          );
        case 'VOTE':
          return (
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19.5V11m0 0l-2.5-2.5a.5.5 0 010-.707l2.5-2.5a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .707l-2.5 2.5z" />
              </svg>
            </div>
          );
      }
  };

  return (
    <>
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl border-l border-gray-200 z-50">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Submission Queue ({queue.length})</h2>
              <button onClick={toggleQueue} className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 mt-1">Review your contributions before submitting.</p>
          </div>

          <div className="flex-grow p-6 space-y-4 overflow-y-auto">
            {queue.length === 0 && (
              <p className="text-gray-500">Your queue is empty.</p>
            )}
            {queue.map((action) => {
              const isClickable = action.type === 'NEW_ENTRY' || action.type === 'VOTE';
              return (
                <div
                  key={action.id}
                  onClick={() => handleItemClick(action)}
                  className={`flex items-start space-x-4 p-4 border rounded-lg ${isClickable ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                >
                  {getIconForAction(action)}
                  <div>
                    {renderAction(action)}
                  </div>
                  <button onClick={(e) => handleRemove(e, action.id)} className="ml-auto text-gray-400 hover:text-red-500">&times;</button>
                </div>
              );
            })}
          </div>

          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handleOpenModal}
              className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 disabled:opacity-50"
              disabled={queue.length === 0}
            >
              Review & Submit All ({queue.length})
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <CheckoutModal queue={queue} onClose={handleCloseModal} />}
    </>
  );
};

export default SubmissionQueue;