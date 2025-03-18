import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Developer Portfolio",
  description: "Learn more about me, my skills, experience, and background as a developer.",
};

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
        
        {/* Personal Info */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Developer profile picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Alex Johnson</h2>
            <h3 className="text-xl text-primary mb-4">Full-Stack Developer</h3>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              I'm a passionate full-stack developer with over 5 years of experience building modern web applications.
              I specialize in React, Next.js, TypeScript, and Node.js, and I'm always eager to learn new technologies.
            </p>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              My journey into programming began during college when I built my first website. 
              Since then, I've worked with startups and established companies, helping them create
              efficient, scalable, and user-friendly web applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-neutral-600 dark:text-neutral-400">New York, NY</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-neutral-600 dark:text-neutral-400">alex@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Degree</h4>
                <p className="text-neutral-600 dark:text-neutral-400">B.S. Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Freelance</h4>
                <p className="text-neutral-600 dark:text-neutral-400">Available</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-md text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{experience.company}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  {experience.period}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-md text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  {edu.period}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full mt-3">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Sample data
const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "Jan 2020 - Present",
    description: "Led the development of the company's flagship SaaS product. Implemented new features, optimized performance, and mentored junior developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    role: "Full Stack Developer",
    company: "WebSolutions Ltd.",
    period: "Jun 2017 - Dec 2019",
    description: "Developed and maintained multiple client websites and web applications. Collaborated with designers and product managers to deliver high-quality solutions.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    period: "Sep 2015 - May 2017",
    description: "Built responsive websites for clients across various industries. Focused on frontend development using modern JavaScript frameworks.",
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap"],
  },
];

const education = [
  {
    degree: "B.S. in Computer Science",
    institution: "University of Technology",
    period: "2011 - 2015",
    description: "Graduated with honors. Focused on web development, algorithms, and software engineering principles.",
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    period: "2015",
    description: "Intensive 12-week bootcamp focused on modern web development technologies and practices.",
  },
];

const skills = [
  { name: "React", icon: "/images/skills/react.svg", level: 95 },
  { name: "JavaScript", icon: "/images/skills/javascript.svg", level: 90 },
  { name: "TypeScript", icon: "/images/skills/typescript.svg", level: 85 },
  { name: "Next.js", icon: "/images/skills/nextjs.svg", level: 90 },
  { name: "Node.js", icon: "/images/skills/nodejs.svg", level: 80 },
  { name: "HTML5", icon: "/images/skills/html5.svg", level: 95 },
  { name: "CSS3", icon: "/images/skills/css3.svg", level: 90 },
  { name: "TailwindCSS", icon: "/images/skills/tailwindcss.svg", level: 90 },
  { name: "MongoDB", icon: "/images/skills/mongodb.svg", level: 75 },
  { name: "PostgreSQL", icon: "/images/skills/postgresql.svg", level: 70 },
  { name: "GraphQL", icon: "/images/skills/graphql.svg", level: 80 },
  { name: "Git", icon: "/images/skills/git.svg", level: 85 },
];

export default AboutPage; 