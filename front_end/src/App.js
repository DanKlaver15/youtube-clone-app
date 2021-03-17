import VideoSearch from "./VideoSearch";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="pb-24 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <VideoSearch />
        </div>
      </header>
      <main className="-mt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>

          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6"></div>
                </div>
              </section>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;