import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 grid place-items-center shadow-sm">
              <Rocket size={18} className="text-white" />
            </div>
            <span className="font-semibold text-lg">LinkStack</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">Features</a>
            <a href="#pricing" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">Pricing</a>
            <a href="#docs" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">Docs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#signin" className="px-4 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Sign in</a>
            <a href="#get-started" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow hover:opacity-95 transition">Get started</a>
          </div>

          <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <a href="#features" className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Features</a>
              <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Pricing</a>
              <a href="#docs" className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Docs</a>
              <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
              <a href="#signin" className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Sign in</a>
              <a href="#get-started" className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-violet-600">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
