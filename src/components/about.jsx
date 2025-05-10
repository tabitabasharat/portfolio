"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import profile from "../../public/profile.jpeg"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 1, y: 50 },
    visible: { opacity: 1, y: 50 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mr-[25px] md:mr-[0px] gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-[25px] overflow-hidden">
              <Image
                src={profile}
                alt="Profile"
                width={400}
                height={400}
                className=" object-cover rounded-[30px] xs:rounded-none sm:object-contain w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-500/20"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-purple-600 to-pink-500 rounded-[20px] -z-10"></div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Front-End Developer</h3>
            <p className="text-foreground/80 mb-6">
              I am a passionate Frontend Developer with over 1 year of hands-on
              experience building responsive and dynamic web applications. My
              expertise includes working with modern technologies like Next.js,
              React.js, TypeScript, and JavaScript, along with styling tools
              such as Tailwind CSS, Material-UI (MUI), React Bootstrap, HTML5,
              and CSS3. I have solid experience integrating RESTful APIs and
              working with real-world data to create seamless, interactive user
              experiences. I’m also skilled at turning designs from tools like
              Figma into pixel-perfect, responsive interfaces. I take pride in
              writing clean, maintainable code and crafting user-friendly
              interfaces with a strong focus on performance and accessibility.
            </p>
            <p className="text-foreground/80 mb-8">
              Throughout my journey, I have developed a deep understanding of
              component-based architecture, responsive design, and frontend
              optimization. I am deeply committed to growing in my career,
              staying up-to-date with the latest frontend trends, and
              continuously sharpening my skills to build even better digital
              products. Whether it's turning creative ideas into reality,
              integrating powerful APIs, or solving challenging problems, I
              bring energy, dedication, and a keen eye for detail to every
              project I take on. I’m excited to collaborate on new opportunities
              and bring fresh ideas to life — let’s build something amazing
              together!
            </p>

            <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="font-medium">Name:</span>
                <span className="ml-2 text-foreground/80">Tabita Basharat</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="font-medium">Email:</span>
                <span className="ml-2 text-foreground/80">
                  tabitab632@gmail.com
                  {/* OR bc250203274.vu.edu.pk */}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="font-medium">Location:</span>
                <span className="ml-2 text-foreground/80">
                  Rawalpindi, Pakistan
                </span>
              </div>
              {/* <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="font-medium">Freelance:</span>
                <span className="ml-2 text-foreground/80">Available</span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
