import Spline from '@splinetool/react-spline';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
            <Sparkles size={14} /> Build your modern link-in-bio
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Design your link hub with style. Share one URL everywhere.
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            LinkStack helps creators and brands build beautiful, customizable landing pages with links, media, analytics, and more.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow hover:opacity-95 transition font-medium">Create your LinkStack</a>
            <a href="#demo" className="px-5 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition font-medium">Live demo</a>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18} /> Email & Google sign-in</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18} /> Themes, fonts, and background media</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18} /> Built-in analytics & QR codes</li>
          </ul>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950/80" />
        </div>
      </div>
    </section>
  );
}
