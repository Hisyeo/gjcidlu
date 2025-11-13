"use client";

import React, { useState } from 'react';
import { QueueAction } from '@/lib/types';
import { generateSubmissionUrl } from '@/lib/submission';
import { useToast } from '@/app/ToastContext'; // Import useToast

interface CheckoutModalProps {
  queue: QueueAction[];
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ queue, onClose }) => {
  const [isProcessing, setProcessing] = useState(false);
  const [userSystem, setUserSystem] = useState<'Email' | 'Discord' | 'Reddit'>('Discord'); // Added Reddit
  const [userId, setUserId] = useState('');
  const { showToast } = useToast(); // Use the toast hook

  const newTermsCount = queue.filter(a => a.type === 'NEW_TERM').length;
  const newEntriesCount = queue.filter(a => a.type === 'NEW_ENTRY').length;
  const votesCount = queue.filter(a => a.type === 'VOTE').length;
  const totalContributions = queue.length;

  const handleSubmit = () => {
    if (!userId) {
      showToast('Please enter your User ID.', 'error'); // Replaced alert
      return;
    }
    setProcessing(true);
    
    const errorMessage = generateSubmissionUrl(queue, userSystem, userId);

    if (errorMessage) {
      showToast(errorMessage, 'error');
      setProcessing(false);
      return;
    }

    // If successful, the page will redirect, so no need for setTimeout here
    // The onClose() will be handled by the page redirect
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold">Confirm Your Contributions</h2>
          <p className="text-gray-500 mt-1">Your contributions will be sent for moderation. Please provide an ID for verification.</p>
        </div>

        <div className="p-6 space-y-4">
          {/* Summary */}
          <div className="space-y-3">
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

          {/* Verification Inputs */}
          <div className="pt-4 space-y-4 border-t">
             <div>
                <label htmlFor="user-system" className="block text-sm font-medium text-gray-700">User System</label>
                <select 
                    id="user-system"
                    value={userSystem}
                    onChange={(e) => setUserSystem(e.target.value as any)}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                >
                    <option>Discord</option>
                    <option>Email</option>
                    <option>Reddit</option>
                </select>
             </div>
             <div>
                <label htmlFor="user-id" className="block text-sm font-medium text-gray-700">User ID</label>
                <input 
                    type="text" 
                    id="user-id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder={userSystem === 'Discord' ? 'Your Discord User ID (e.g., 12345...)' : 'your.email@example.com'}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                />
             </div>
             <div className="p-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 text-sm">
                <p>Please note that this username, ID, or email will be saved within this repository and will be used to contact you for verification.</p>
             </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex justify-end space-x-3">
            <button onClick={onClose} className="px-5 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isProcessing || !userId}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center disabled:opacity-50 cursor-not-allowed"
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
