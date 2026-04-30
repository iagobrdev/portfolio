import { motion } from "motion/react";
import { useState, type Key } from "react";

interface ExperienceItemProps {
  key?: Key;
  year: string;
  role: string;
  company: string;
  description: string[];
  tags: string[];
}

function ExperienceItem({ year, role, company, description, tags }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleDescription = expanded ? description : description.slice(0, 2);

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
        <ul className="space-y-3 text-base text-zinc-400 max-w-2xl group-hover:text-zinc-300 transition-colors text-justify">
          {visibleDescription.map((item) => (
            <li key={item} className="leading-relaxed">• {item}</li>
          ))}
        </ul>
        {description.length > 3 && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 text-label text-brand-cyan hover:text-white transition-colors"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
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
      year: "MAR/2025 — PRESENT",
      role: "Head of Architecture",
      company: "Develcode · Full-time · Remote",
      description: [
        "Led the redesign of a national-scale platform, replacing a non-scalable system with a distributed architecture in 6 months, now supporting thousands of concurrent users.",
        "Defined system architecture and data strategy using PostgreSQL, MongoDB, and Redis, applying DDD to manage complex domain logic.",
        "Designed a distributed architecture with decoupled services for query, processing, and file ingestion, enabling scalability and integration with external systems.",
        "Architected an international healthcare platform using microservices, CQRS, AWS SQS/S3, and OCR, enabling scalable processing of structured and unstructured data.",
        "Implemented event-driven workflows and real-time notifications (WebSockets), improving responsiveness and user experience.",
        "Enabled large-scale processing, cutting infrastructure resource consumption by 50% and running production workloads with only 4GB of memory."
      ],
      tags: ["JAVA", "SPRING BOOT", ".NET", "REACT", "DDD", "CQRS", "MICROSERVICES", "EVENT-DRIVEN", "SOLID", "AZURE"]
    },
    {
      year: "MAR/2024 — MAR/2025",
      role: "Senior Software Enginner",
      company: "Develcode · Full-time · Remote",
      description: [
        "Led the re-architecture of a high-volume batch system, transforming a monolith into an event-driven distributed architecture.",
        "Implemented a Spark-based parallel processing pipeline, enabling high-throughput data processing at scale.",
        "Reduced processing time from ~12 hours to <20 minutes for datasets exceeding 10M+ records.",
        "Designed scalable event-driven flows, improving throughput, resilience, and fault tolerance.",
        "Delivered high-performance backend solutions using Java (8–21) and Spring Boot."
      ],
      tags: ["JAVA", "SPRING BOOT", "REACT", "ORACLE", "MONGODB", "KAFKA", "RABBITMQ", "CQRS", "AWS"]
    },
    {
      year: "JUL/2018 — MAR/2024",
      role: "Senior Software Engineer",
      company: "SiNaHab · Full-time · Remote",
      description: [
        "Led the complete re-engineering of a legacy monolithic system (Laravel) into a modern architecture using Java + Spring Boot and Angular.",
        "Migrated infrastructure from on-premise to AWS, improving scalability and operational efficiency.",
        "Introduced Redis caching, eliminating performance bottlenecks and reducing system load.",
        "Delivered the new system in 5 months, supporting 10x more active users with no recurring performance issues.",
        "Applied DDD, SOLID, and Clean Code, ensuring long-term maintainability and system stability."
      ],
      tags: ["JAVA", "SPRING BOOT", "MICROSERVICES", "RABBITMQ", "AZURE", "AZURE DEVOPS", "REST"]
    },
    {
      year: "JAN/2015 — DEC/2017",
      role: "Lead Software Engineer",
      company: "IBR TECNOLOGIA · Full-time · Frederico Westphalen, Rio Grande do Sul, Brazil · On-site",
      description: [
        "Led migration from a Java desktop system to a cloud-based SaaS platform (.NET + Angular), completing full transition in 1 year.",
        "Scaled the platform to support a growing customer base, moving all clients to the cloud model.",
        "Solved critical performance issues in fiscal processing using the Strangler Fig Pattern.",
        "Designed an event-driven service with RabbitMQ, improving document processing performance by 70%+.",
        "Delivered a production-ready MVP in 6 days, approved by DETRAN-RS, enabling immediate commercialization.",
        "Built the core system of the market leader in Brazil's vehicle dismantling segment, still in use after 12+ years."
      ],
      tags: ["JAVA", "SPRING BOOT", "MICROSERVICES", "REST", "CI/CD", "DDD", "SOLID"]
    },
    {
      year: "JAN/2010 — DEC/2014",
      role: "Software Engineer",
      company: "IBR TECNOLOGIA · Full-time · Frederico Westphalen, Rio Grande do Sul, Brazil · On-site",
      description: [
        "Led the development and evolution of the iBRSOFT ERP (Java), supporting 300+ clients and thousands of daily fiscal transactions with high performance and availability.",
        "Designed and maintained critical fiscal modules (NF-e, NFS-e, CT-e, MDF-e, SPED, SINTEGRA), ensuring full legal compliance and reducing errors by ~40%.",
        "Architected and delivered the iBRSOFT CDV system in 6 days, enabling the first authorized vehicle dismantling operation in Brazil and positioning the company as a market leader.",
        "Implemented TEF and PAF-ECF integrations and developed 20+ REST APIs, improving system interoperability and reducing communication latency by ~30%.",
        "Built mobile applications integrated with backend services, supporting 1,000+ users and optimizing field operations."
      ],
      tags: ["JAVA", "ERP", "FISCAL", "REST", "WEB SERVICES", "MOBILE"]
    }
  ];

  return (
    <section id="projects" className="mb-10">
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
