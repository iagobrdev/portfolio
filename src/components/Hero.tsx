import { motion } from "motion/react";
import profileImage from "../assets/profile-image.jpeg";

export function Hero() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-20 pt-32">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-7"
      >
        <span className="text-label text-brand-cyan mb-4 block tracking-[0.2em]">Executive Overview</span>
        <h1 className="text-display text-white mb-6 leading-tight">
          Software <span className="text-brand-cyan">Engineer</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
          Specializing in Java and distributed systems architecture. I design scalable backend solutions, lead architectural decisions, and drive modernization initiatives across complex environments, with strong focus on microservices, event-driven architectures, and cloud-based systems, guided by industry best engineering practices.
        </p>
        <div className="mt-12 flex gap-12">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-white">16+</span>
            <span className="text-label text-zinc-500 mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-white">40+</span>
            <span className="text-label text-zinc-500 mt-1">Projects Developed</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:col-span-5 relative"
      >
        <div className="absolute inset-0 bg-brand-cyan/10 blur-[100px] rounded-full"></div>
        <div className="glass-card neon-glow p-2 rounded-2xl relative">
          <img 
            alt="Professional Headshot" 
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-square w-full"
            src={profileImage}
          />
        </div>
      </motion.div>
    </section>
  );
}
