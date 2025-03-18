import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Alex</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 mb-6">
                Full-Stack Developer
              </h2>
              <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
                I build modern, responsive web applications with React, Next.js, and TypeScript.
                Passionate about clean code, user experience, and solving complex problems.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/about" 
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  aria-label="Learn more about me"
                  tabIndex={0}
                >
                  About Me
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                  aria-label="Contact me"
                  tabIndex={0}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/images/profile.jpg"
                  alt="Developer profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-neutral-200/50 dark:bg-neutral-800/50">
        <div className="container mx-auto max-w-6xl px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.link} 
                    className="text-primary font-medium hover:underline"
                    aria-label={`View ${project.title} project`}
                    tabIndex={0}
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              aria-label="View all projects"
              tabIndex={0}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-neutral-200/50 dark:bg-neutral-800/50">
        <div className="container mx-auto max-w-6xl px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div 
                key={article.title} 
                className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{article.date}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{article.excerpt}</p>
                  <Link 
                    href={`/articles/${article.slug}`} 
                    className="text-primary font-medium hover:underline"
                    aria-label={`Read article: ${article.title}`}
                    tabIndex={0}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/articles" 
              className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              aria-label="View all articles"
              tabIndex={0}
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for the homepage
const skills = [
  { name: "React", icon: "/images/skills/react.svg" },
  { name: "Next.js", icon: "/images/skills/nextjs.svg" },
  { name: "TypeScript", icon: "/images/skills/typescript.svg" },
  { name: "Node.js", icon: "/images/skills/nodejs.svg" },
  { name: "TailwindCSS", icon: "/images/skills/tailwindcss.svg" },
  { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
  { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
  { name: "Docker", icon: "/images/skills/docker.svg" },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with cart functionality and payment integration.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "React", "Stripe", "MongoDB"],
    link: "/projects/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/images/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    link: "/projects/task-management",
  },
  {
    title: "Personal Finance Dashboard",
    description: "A dashboard to track personal finances, expenses, and investments.",
    image: "/images/projects/finance.jpg",
    technologies: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    link: "/projects/finance-dashboard",
  },
];

const articles = [
  {
    title: "Building Performant React Applications",
    date: "March 10, 2023",
    excerpt: "Learn how to optimize your React applications for better performance and user experience.",
    slug: "building-performant-react-applications",
  },
  {
    title: "The Power of TypeScript in Modern Web Development",
    date: "February 22, 2023",
    excerpt: "Discover why TypeScript is becoming essential for building maintainable web applications.",
    slug: "power-of-typescript",
  },
  {
    title: "Creating Accessible UI Components",
    date: "January 15, 2023",
    excerpt: "A comprehensive guide to building accessible UI components that work for everyone.",
    slug: "creating-accessible-ui-components",
  },
];

export default HomePage; 