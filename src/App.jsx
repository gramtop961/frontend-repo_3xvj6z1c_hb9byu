import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="demo" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">Live profile preview</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">A glimpse of a LinkStack page with avatar, bio, social icons, and link buttons.</p>
                <div className="mt-6 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
                  <div className="flex flex-col items-center text-center">
                    <img src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=300&auto=format&fit=crop" alt="avatar" className="h-16 w-16 rounded-full object-cover" />
                    <h4 className="mt-3 font-semibold">@jane_doe</h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 max-w-sm">Designer & creator. Sharing my latest work, playlists, and favorite tools.</p>
                    <div className="mt-4 grid w-full gap-3">
                      <a className="w-full text-center px-4 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium" href="#">Visit my portfolio</a>
                      <a className="w-full text-center px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800" href="#">Watch my latest YouTube</a>
                      <a className="w-full text-center px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800" href="#">Shop my presets</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30">
                <h3 className="text-xl font-semibold">Why LinkStack?</h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• Custom domains and SEO-friendly pages</li>
                  <li>• Advanced analytics with device and country insights</li>
                  <li>• Drag-and-drop link ordering with visibility toggles</li>
                  <li>• Secure authentication with email, password, and Google</li>
                  <li>• Dynamic QR codes for offline campaigns</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow hover:opacity-95 transition font-medium">Get started free</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
