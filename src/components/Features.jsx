import { Link as LinkIcon, Palette, BarChart3, Shield, QrCode, Settings } from 'lucide-react';

const features = [
  {
    icon: LinkIcon,
    title: 'Powerful link blocks',
    desc: 'Add links, buttons, embeds (YouTube, Spotify), and social icons with visibility controls and scheduling.'
  },
  {
    icon: Palette,
    title: 'Beautiful customization',
    desc: 'Choose from light, dark, and gradient themes. Customize fonts, colors, and backgrounds with live preview.'
  },
  {
    icon: BarChart3,
    title: 'Actionable analytics',
    desc: 'Track visits, clicks, devices, countries, and referrers. Filter by day, week, or month with charts.'
  },
  {
    icon: QrCode,
    title: 'Dynamic QR codes',
    desc: 'Generate and download QR codes for your profile as PNG/SVG and use them across your marketing.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'JWT auth, OAuth, rate limiting, CSRF protection, and encrypted storage out of the box.'
  },
  {
    icon: Settings,
    title: 'Admin & teams',
    desc: 'Manage users, roles, and global themes. Control pricing, announcements, and custom domains.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to launch your link hub</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">From customization to analytics and payments — LinkStack has it covered.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-500 to-violet-500 text-white grid place-items-center mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
