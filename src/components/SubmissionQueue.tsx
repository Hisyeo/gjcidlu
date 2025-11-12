import React from 'react';

const SubmissionQueue: React.FC = () => {
  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white
            shadow-xl border-l border-gray-200 z-50">

      <div className="h-full flex flex-col">

        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Submission Queue (3)</h2>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-500 mt-1">
            Review your contributions before submitting.
          </p>
        </div>

        <div className="flex-grow p-6 space-y-4 overflow-y-auto">

          <div className="flex items-start space-x-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700
                    rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">New Term: "Sonder"</h3>
              <p className="text-sm text-gray-600">(n.) "The realization that..."</p>
            </div>
            <button className="ml-auto text-gray-400 hover:text-red-500">&times;</button>
          </div>

          <div className="flex items-start space-x-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700
                    rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m4 10h.01M11 11h.01M13 11h.01M16 11h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">New Translation: "cukto centik"</h3>
              <p className="text-sm text-gray-600">For: "Document" (n.)</p>
            </div>
            <button className="ml-auto text-gray-400 hover:text-red-500">&times;</button>
          </div>

          <div className="flex items-start space-x-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700
                    rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19.5V11m0 0l-2.5-2.5a.5.5 0 010-.707l2.5-2.5a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .707l-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Overall vote for "êfun"</h3>
              <p className="text-sm text-gray-600">Term: "Ephemeral" (adj.)</p>
            </div>
            <button className="ml-auto text-gray-400 hover:text-red-500">&times;</button>
          </div>

        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button className="w-full px-6 py-4 bg-blue-600 text-white
                     rounded-lg text-lg font-medium
                     hover:bg-blue-700">
            Review & Submit All (3)
          </button>
        </div>

      </div>
    </div>
  );
};

export default SubmissionQueue;
