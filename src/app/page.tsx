export default function Home() {
  return (
    <main className="container mx-auto mt-8 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="flex space-x-2">
          <input type="text" placeholder="Search for a word or add a new one..." className="flex-grow rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Submit New</button>
        </div>

        <div className="mt-6 space-y-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-gray-900">Document</h2>
            <p className="mb-1 font-mono text-gray-500">(v.)</p>
            <p className="mb-4 text-gray-700 italic">to write about something, film it, or take photographs of it, in order to record information about it</p>

            <hr className="my-4 border-gray-100" />

            <h3 className="mb-3 text-sm font-semibold text-gray-500 uppercase">Top Translations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <span className="text-xs text-gray-400">Overall</span>
                <p className="text-lg font-medium text-blue-600">xe sobis bi cukto</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Minimal</span>
                <p className="text-lg font-medium text-blue-600">sobis</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Specific</span>
                <p className="text-lg font-medium text-blue-600">xe cukto hôn uyo til sobis</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Humorous</span>
                <p className="text-lg font-medium text-blue-600">(No votes)</p>
              </div>
            </div>

            <hr className="my-4 border-gray-100" />

            <div className="mt-6 flex items-center justify-between">
              <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Add alternative meaning</span>
              </button>

              <a href="#" className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"> View all 12 translations &rarr; </a>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-gray-900">Document</h2>
            <p className="mb-1 font-mono text-gray-500">(n.)</p>
            <p className="mb-4 text-gray-700 italic">a piece of paper that has official information on it</p>

            <hr className="my-4 border-gray-100" />

            <h3 className="mb-3 text-sm font-semibold text-gray-500 uppercase">Top Translations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <span className="text-xs text-gray-400">Overall</span>
                <p className="text-lg font-medium text-blue-600">cukto</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Minimal</span>
                <p className="text-lg font-medium text-blue-600">cukto</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Specific</span>
                <p className="text-lg font-medium text-blue-600">cukto centik</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Humorous</span>
                <p className="text-lg font-medium text-blue-600">(No votes)</p>
              </div>
            </div>

            <hr className="my-4 border-gray-100" />

            <div className="mt-6 flex items-center justify-between">
              <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Add alternative meaning</span>
              </button>

              <a href="#" className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"> Add a translation &rarr; </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
