import VideoSearch from "./Components/VideoSearch";
import VideoList from "./Components/VideoList";
import Video from "./Components/Video";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <header className="pb-24 bg-indigo-600 min-h-250">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="max-w-xl pt-12">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              YouTube Clone
            </h2>
          </div>
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

              <Comments />
            </div>

            <div className="grid grid-cols-1 gap-4 max-h-48">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white shadow">
                  <VideoSearch />
                  <div className="p-6 overflow-hidden overflow-y-auto h-75">
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
