import { motion } from "motion/react";
import { Layers, Server, Cloud } from "lucide-react";

export function TechStack() {
  return (
    <section id="stack" className="mb-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-label text-brand-cyan mb-2 block tracking-[0.2em]">Capabilities</span>
          <h2 className="text-h2 text-white">Technical Arsenal</h2>
        </div>
        <div className="font-mono text-xs text-zinc-500 hidden md:block opacity-50">
          &lt;/&gt;
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-2xl md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-xl font-semibold text-white">Backend Focus</h3>
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
              Java / Spring Boot / .NET / Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
              Kafka / RabbitMQ / Apache Camel
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
              PostgreSQL / MongoDB / Redis
            </li>
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-xl font-semibold text-white">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React.js", "TypeScript", "Tailwind CSS", "HTML/CSS"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-surface border border-white/10 rounded-full text-xs font-medium text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-xl font-semibold text-white">Cloud</h3>
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
              Azure / AWS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
              Docker / Kubernetes
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
              CI/CD Pipelines
            </li>
          </ul>
        </motion.div>

        <div className="glass-card p-6 rounded-2xl md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-1">
            <h4 className="text-label text-white mb-2">Architectural Patterns</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">Scalable backend design focused on reliability and maintainability.</p>
          </div>
          <div className="md:col-span-3 flex flex-wrap gap-x-8 gap-y-4 items-center border-l border-white/5 md:pl-8">
            <span className="text-zinc-500 text-label">PATTERNS:</span>
            {["EVENT-DRIVEN", "MICROSERVICES", "CLEAN ARCHITECTURE", "DDD", "CQRS"].map(tool => (
              <span key={tool} className="text-white font-mono text-sm tracking-wider">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
