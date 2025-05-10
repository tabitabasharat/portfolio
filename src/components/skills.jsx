"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Layout, Smartphone, Figma, GitBranch, Cpu } from "lucide-react"

const skills = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "UI Development",
    description: "Creating beautiful user interfaces with React, Next.js, and modern CSS frameworks like Tailwind.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "JavaScript / TypeScript",
    description: "Building interactive applications with modern JavaScript and TypeScript for type safety.",
    color: "from-yellow-500 to-amber-400",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Responsive Design",
    description: "Crafting websites that work flawlessly across all devices and screen sizes.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    title: "Web2 Integration",
    description:
      "Integrating social media platforms, authentication services, and third-party widgets into web applications.",
    color: "from-blue-500 to-indigo-400",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
      </svg>
    ),
    title: "API Integration",
    description:
      "Consuming RESTful and GraphQL APIs with efficient data fetching, state management, and error handling.",
    color: "from-purple-500 to-violet-400",
  },
  {
    icon: <Figma className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces and experiences.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "Performance Optimization",
    description: "Optimizing front-end applications for speed, efficiency, and better user experience.",
    color: "from-red-500 to-orange-400",
  },
  {
    icon: <GitBranch className="h-10 w-10" />,
    title: "Version Control",
    description: "Managing code with Git and GitHub, implementing CI/CD for front-end projects.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    title: "CSS Frameworks",
    description: "Expert in CSS frameworks like Tailwind CSS, styled-components, and CSS modules.",
    color: "from-teal-500 to-green-400",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    ),
    title: "Accessibility",
    description: "Creating inclusive web experiences that work for everyone, following WCAG guidelines.",
    color: "from-emerald-500 to-teal-400",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the front-end development ecosystem. Here are the main areas I
            specialize in:
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background rounded-lg p-6 shadow-lg border border-border hover:border-purple-500/50 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-lg inline-block mb-4`}>{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-foreground/70">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
