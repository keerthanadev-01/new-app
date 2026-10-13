import Link from "next/link";
import SayHelloButton from "@/components/sayhelloButton";

const projects = [
  {
    id: "restaurant",
    title: "Restaurant Website",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "A modern restaurant site with menu showcase, reservations section and a mobile-first layout.",
    tags: ["React.js", "Firebase"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    description:
      "An online store with product listings, cart flow and a clean, conversion-focused UI.",
    tags: ["HTML5", "CSS3", "JavaScript", "Catalyst Serverless"],
  },
  {
    id: "educational-institute",
    title: "Educational Institute Website",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    description:
      "An informative institute website featuring courses, faculty and admissions information.",
    tags: ["HTML5", "CSS3", "JavaScript", "Firebase"],
  },
];

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React.js", level: 72 },
  { name: "Next.js", level: 62 },
];

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    title: "Responsive Web Design",
    text: "Pixel-perfect layouts that look great on mobiles, tablets and desktops.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    title: "React Development",
    text: "Reusable, scalable components and interactive user interfaces.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    title: "Next.js Websites",
    text: "Fast, SEO-friendly websites with modern routing and performance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    title: "UI Implementation",
    text: "Turning design mockups into clean, accessible, production-ready code.",
  },
];

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "Responsive Designs" },
  { value: "24/7", label: "Learning Mindset" },
];

const process = [
  {
    step: "01",
    title: "Understand",
    text: "Gather requirements and understand the goals of the project.",
  },
  {
    step: "02",
    title: "Design",
    text: "Plan the layout, structure and user flow for the best experience.",
  },
  {
    step: "03",
    title: "Develop",
    text: "Build clean, responsive and maintainable frontend code.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Test across devices, optimise and launch the final product.",
  },
];

const testimonials = [
  {
    name: "Client – Restaurant Project",
    avatar: "https://i.pravatar.cc/120?img=12",
    text: "Keerthi delivered a beautiful, responsive website that our customers love using on their phones.",
  },
  {
    name: "Client – E-commerce Project",
    avatar: "https://i.pravatar.cc/120?img=47",
    text: "Clean design, smooth experience and great attention to detail. Highly recommended!",
  },
  {
    name: "Client – Education Project",
    avatar: "https://i.pravatar.cc/120?img=33",
    text: "Our institute website now looks professional and is very easy for students to navigate.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/80 to-slate-950" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur text-md text-indigo-200">
            Available for freelance & full-time roles
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-balance">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Keerthana
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-6 font-medium">
            Frontend Developer | React.js Developer
          </p>

          <p className="max-w-2xl mx-auto font-semibold text-slate-300 text-lg">
            I build responsive and user-friendly websites using HTML, CSS,
            JavaScript, React.js and Next.js.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 font-medium hover:opacity-90 transition"
            >
              View My Work
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/50 bg-white/40 font-medium hover:bg-white/50 transition"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center font-bold gap-6 text-slate-400 text-sm">
            <span>✔ Clean Code</span>
            <span>✔ Responsive UI</span>
            <span>✔ Fast Delivery</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />

            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80"
              alt="Laptop with code on screen"
              className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
            />
          </div>

          <div>
            <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3">
              About Me
            </p>

            <h2 className="text-4xl font-bold mb-6 text-balance">
              Passionate about building beautiful web experiences
            </h2>

            <p className="text-slate-400 mb-4 leading-relaxed">
              I&apos;m a frontend developer who loves turning ideas into fast,
              accessible and visually appealing websites. I focus on writing
              clean, reusable code and creating interfaces that users enjoy.
            </p>

            <p className="text-slate-400 leading-relaxed">
              From restaurant sites to e-commerce stores and educational
              platforms, I enjoy every challenge that helps me grow as a
              developer.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="scroll-mt-16 py-24 px-6 bg-slate-900/60"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3 text-center">
            What I Know
          </p>

          <h2 className="text-4xl font-bold text-center mb-14">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-indigo-300">{skill.level}%</span>
                </div>

                <div
                  className="w-full h-3 bg-slate-800 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-label={skill.name}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-16 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3 text-center">
            What I Do
          </p>

          <h2 className="text-4xl font-bold text-center mb-14">
            Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-36 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="scroll-mt-16 py-24 px-6 bg-slate-900/60"
      >
        <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3 text-center">
          Portfolio
        </p>

        <h2 className="text-4xl font-bold text-center mb-4">
          My Projects
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Here are some of the projects I have built.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 transition duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block px-5 py-2 bg-linear-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-pink-500/10 border border-white/10"
            >
              <p className="text-4xl font-extrabold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </p>

              <p className="text-slate-400 mt-2 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-24 px-6 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3 text-center">
            How I Work
          </p>

          <h2 className="text-4xl font-bold text-center mb-14">
            My Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-slate-900 border border-white/10"
              >
                <span className="text-5xl font-extrabold text-white/10 absolute top-4 right-5">
                  {item.step}
                </span>

                <h3 className="text-xl font-semibold mb-2 mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="scroll-mt-16 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3 text-center">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold text-center mb-14">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <p
                  className="text-yellow-400 mb-3"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </p>

                <blockquote className="text-slate-300 italic mb-6">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                <figcaption className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    className="size-10 rounded-full object-cover border border-white/20"
                  />

                  <span className="text-sm text-indigo-300 font-medium">
                    {testimonial.name}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="scroll-mt-16 py-24 px-6"
      >
        <div className="relative max-w-4xl mx-auto text-center p-12 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90" />

          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>

            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Have a project in mind or looking for a frontend developer?
              I&apos;d love to hear about your ideas and help bring them to
              life.
            </p>

            <SayHelloButton />
          </div>
        </div>
      </section>
    </main>
  );
}