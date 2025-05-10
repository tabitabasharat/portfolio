"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 1,
              opacity: 0.3,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-lg font-medium text-foreground/80">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Tabita Basharat
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-foreground/80 mb-8"
          >
            <span className="typing-text">Front-End Developer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-4 mb-12"
          >
            <Button
              variant="default"
              className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "./Tabita.pdf";
                link.download = "Tabita.pdf";
                link.click();
              }}
            >
              Download CV
            </Button>

            <a href="#contact">
              {" "}
              <Button
                variant="outline"
                className="border-purple-500 cursor-pointer text-foreground hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex space-x-6"
          >
            <motion.a
            target="html"
              href="https://github.com/tabitabasharat?tab=repositories"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
            target="html"
              href="https://www.linkedin.com/in/tabita-basharat-75267728b/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
            target="html"
              href="https://x.com/tabitab632"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}
