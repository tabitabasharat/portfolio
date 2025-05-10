"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Landing Page",
    description:
      "",
    image: "/botmindz.jpeg?height=300&width=500",
    tags: ["HTML/CSS","figma", "JavaScript", "Responsive Design"],
    liveLink: "https://botmindz.vercel.app/",
    // githubLink: "#",
  },
  {
    title: "Interactive UI",
    description:
      "",
    image: "/lego.jpeg?height=300&width=500",
    tags: ["React", "Styled Components","Javascript","HTML/CSS", "Figma"],
    liveLink: "https://lego-demo-project.vercel.app/",
    // githubLink: "#",
  },
  {
    title: "Evox-Investor",
    description:
      "",
    image: "/investor.jpeg?height=300&width=500",
    tags: ["React", "Styled Components","Javascript","HTML/CSS", "Figma"],
    liveLink: "https://investor-evox.vercel.app/",
    // githubLink: "#",
  },
  {
    title: "Magnus",
    description:
      "",
    image: "/magnus.jpeg?height=300&width=500",
    tags: ["React", "Styled Components","Javascript","HTML/CSS", "MUI", "Figma"],
    liveLink: "https://magnus-webapp.vercel.app/SignIn",

  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of front-end projects from initial landing pages to web-app's. Each project
            showcases my skills in creating beautiful, interactive, and
            user-friendly interfaces.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-background rounded-lg overflow-hidden shadow-lg border border-border hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex space-x-4 justify-end">
                      {/* <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </motion.a> */}
                      <motion.a
                      target="html"
                        href={project.liveLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="icon"
                          className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                        >
                          <ExternalLink className="h-5 w-5 cursor-pointer" />
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
