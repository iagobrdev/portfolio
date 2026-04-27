import { motion } from "motion/react";
import { Code, Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-surface/60 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto h-20 px-8">
        <div className="text-xl font-black tracking-tighter text-brand-cyan uppercase">
          Dev.Portfolio
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm tracking-tight">
          <a href="#home" className="text-zinc-400 hover:text-brand-cyan transition-all duration-300">Home</a>
          <a href="#about" className="text-brand-cyan border-b-2 border-brand-cyan pb-1">About</a>
          <a href="#projects" className="text-zinc-400 hover:text-brand-cyan transition-all duration-300">Projects</a>
          <a href="#stack" className="text-zinc-400 hover:text-brand-cyan transition-all duration-300">Stack</a>
          <a href="#contact" className="text-zinc-400 hover:text-brand-cyan transition-all duration-300">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Code className="w-5 h-5 text-zinc-400" />
          <Terminal className="w-5 h-5 text-zinc-400" />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-brand-cyan text-surface px-6 py-2 text-label hover:bg-white transition-all"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
