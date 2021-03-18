import VideoSearch from "./Components/VideoSearch";
import VideoList from "./Components/VideoList";
import Video from "./Components/Video";
import CommentList from "./Components/CommentList";

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
                  <div className="p-6">
                    <Video />
                  </div>
                </div>
              </section>

              <div>
                <h1 className="sr-only">Comments</h1>
                <CommentList />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 max-h-48">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden overflow-y-auto shadow max-h-96">
                  <div className="p-6">
                    <VideoList />
                  </div>
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
