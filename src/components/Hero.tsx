import { motion } from "motion/react";

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
          Engineering Digital <span className="text-brand-cyan">Excellence.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
          I am a senior full-stack architect specializing in high-performance distributed systems and premium user interfaces. With over a decade of experience, I bridge the gap between complex backend logic and pixel-perfect aesthetics.
        </p>
        <div className="mt-12 flex gap-12">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-white">12+</span>
            <span className="text-label text-zinc-500 mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-white">140+</span>
            <span className="text-label text-zinc-500 mt-1">Projects Shipped</span>
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQAaI-dzMaK3_TVLT_rmjtx5t42TZhUGXJ1y98jG8dH7_fAYcjIpYGwhcv0YB7iNWII1WrrYPNct1HtDyFsJe_NzTvQdjY9JASSl23CA7inoJNNOuOxXk1eETTGV3I9t47nASO1E3ifXGbZub6lRhFXHkOYQkrDWJoQZiRF3DkaAtCvDPTwd3iERV0-Jfa9AmweegY_ts7urcLAc1rQlcr1NVZnOG-3tjk37tHhUSxxtQjJ1R3vnhrG5E7UOwikD4ydHG-IevVpLY"
          />
        </div>
      </motion.div>
    </section>
  );
}
