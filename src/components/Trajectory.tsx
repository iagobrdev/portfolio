import { motion } from "motion/react";

interface ExperienceItemProps {
  year: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

function ExperienceItem({ year, role, company, description, tags }: ExperienceItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/5 hover:bg-white/[0.02] transition-all px-4 -mx-4 rounded-xl"
    >
      <div className="md:col-span-2 font-mono text-zinc-500 pt-1 group-hover:text-brand-cyan transition-colors">
        {year}
      </div>
      <div className="md:col-span-6">
        <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-brand-cyan transition-colors">{role}</h4>
        <div className="text-label text-brand-cyan mb-4">{company}</div>
        <p className="text-base text-zinc-400 max-w-xl group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
      <div className="md:col-span-4 flex flex-wrap gap-2 h-fit md:justify-end">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-surface-container-low text-zinc-500 text-label rounded-md border border-white/5 group-hover:border-brand-cyan/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Trajectory() {
  const experiences = [
    {
      year: "2021 — PRESENT",
      role: "Senior Software Architect",
      company: "Metaflow Systems",
      description: "Leading the core platform team in rebuilding the microservices architecture. Reduced deployment latency by 45% and mentored a team of 12 engineers across 3 continents.",
      tags: ["GO", "KUBERNETES", "GRPC"]
    },
    {
      year: "2018 — 2021",
      role: "Full Stack Developer",
      company: "Nova Digital Studio",
      description: "Developed high-end creative web experiences for Fortune 500 clients. Specialized in complex animations and interactive WebGL components for global campaigns.",
      tags: ["REACT", "WEBGL", "STRIPE"]
    },
    {
      year: "2015 — 2018",
      role: "Junior Frontend Engineer",
      company: "StartUp Inc.",
      description: "Founding engineer responsible for the initial MVP. Scaled the frontend from 0 to 50k active daily users using React and Redux.",
      tags: ["JAVASCRIPT", "SASS", "FIREBASE"]
    }
  ];

  return (
    <section id="projects" className="mb-20">
      <div className="mb-12">
        <span className="text-label text-brand-cyan mb-2 block tracking-[0.2em]">Trajectory</span>
        <h2 className="text-h2 text-white">Professional Experience</h2>
      </div>
      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
