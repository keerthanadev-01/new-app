import Link from "next/link";


const projects = {
  restaurant: {
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with food categories, cart functionality and feedback system.",
    technologies: ["React.js", "JavaScript", "Firebase"],
    liveLink: "https://ecommercewebsite-60044576376.development.catalystserverless.in/app/index.html",
  },

  ecommerce: {
    title: "E-commerce Website",
    description:
      "A responsive e-commerce website with product listing and shopping cart.",
    technologies: ["React.js", "JavaScript", "CSS"],
    liveLink: "https://restaurant-website-1f66f.web.app/",
  },

  "educational-institute": {
    title: "Educational Institute Website",
    description:
      "A responsive educational institute website with course information and contact form.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveLink: "https://institute-web987.web.app/",
  },
};

export default async function ProjectPage({ params }) {
  const { id } = await params;

  const project = projects[id];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            404
          </p>

          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-4 text-slate-400">
            The project you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-20 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Project Label */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Featured Project
          </p>

          {/* Project Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          {/* Project Description */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* View Live Project Button */}
        
            <div className="mt-10">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:opacity-90"
              >
                View Live Project
                <span aria-hidden="true" className="text-lg">
                  ↗
                </span>
              </a>
            </div>
        
        </div>
      </section>
    </main>
  );
}