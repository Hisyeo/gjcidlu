"use client";

import React, { useState } from 'react';
import { QueueAction } from '@/lib/types';
import { generateSubmissionUrl } from '@/lib/submission';

interface CheckoutModalProps {
  queue: QueueAction[];
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ queue, onClose }) => {
  const [isProcessing, setProcessing] = useState(false);

  const newTermsCount = queue.filter(a => a.type === 'NEW_TERM').length;
  const newEntriesCount = queue.filter(a => a.type === 'NEW_ENTRY').length;
  const votesCount = queue.filter(a => a.type === 'VOTE').length;
  const totalContributions = queue.length;

  const handleSubmit = () => {
    setProcessing(true);
    // This function currently contains an alert and doesn't redirect.
    // In a real scenario, it would redirect to GitHub.
    generateSubmissionUrl();
    // We might not even get here if the redirect is synchronous.
    // If it were an API call, we'd handle the response.
    setTimeout(() => {
      setProcessing(false);
      onClose();
    }, 1000); // Simulate processing time
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold">Confirm Your Contributions</h2>
          <p className="text-gray-500 mt-1">Your contributions will be sent to moderation.</p>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">New Terms:</span>
            <span className="font-medium">{newTermsCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">New Translations:</span>
            <span className="font-medium">{newEntriesCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Translation Votes:</span>
            <span className="font-medium">{votesCount}</span>
          </div>
          <div className="flex justify-between pt-3 border-t mt-3">
            <span className="text-lg font-semibold">Total Contributions:</span>
            <span className="text-lg font-semibold">{totalContributions}</span>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex justify-end space-x-3">
            <button onClick={onClose} className="px-5 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center disabled:opacity-70 cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Submit Contributions'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
