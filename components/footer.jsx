import Link from "next/link";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { href: "/#about", label: "About" },
      { href: "/#skills", label: "Skills" },
      { href: "/#services", label: "Services" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { href: "/projects/restaurant", label: "Restaurant Website" },
      { href: "/projects/ecommerce", label: "E-commerce Website" },
      {
        href: "/projects/educational-institute",
        label: "Educational Institute",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        href: "https://github.com",
        label: "GitHub",
        external: true,
      },
      {
        href: "https://linkedin.com",
        label: "LinkedIn",
        external: true,
      },
      {
        href: "https://twitter.com",
        label: "Twitter / X",
        external: true,
      },
      {
        href: "mailto:hello@keerthi.dev",
        label: "hello@keerthi.dev",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="text-xl font-extrabold">
            Keerthi
            <span className="bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              .dev
            </span>
          </Link>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Frontend developer building responsive, user-friendly websites
            with React.js and Next.js.
          </p>
        </div>

        {/* Footer Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              {section.title}
            </h2>

            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm text-slate-500">
          © 2026 Keerthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}