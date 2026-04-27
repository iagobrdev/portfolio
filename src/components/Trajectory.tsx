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
        <ul className="space-y-3 text-base text-zinc-400 max-w-2xl group-hover:text-zinc-300 transition-colors">
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
      year: "MAR 2025 — PRESENT",
      role: "Head of Architecture",
      company: "Develcode · Full-time",
      description: [
        "Led the architectural evolution of critical systems, working across 10+ applications, ensuring scalability and supporting thousands of users.",
        "Restructured the enterprise architecture, removing bottlenecks and standardizing technical decisions, reducing rework across teams and accelerating delivery.",
        "Acted as a technical gatekeeper, reviewing and guiding dozens of architectural decisions, preventing inconsistent solutions and reducing production risks.",
        "Established engineering standards (DDD, SOLID, Clean Code, and architectural best practices), improving code quality and reducing system coupling.",
        "Made strategic decisions on technology and architecture, balancing cost, performance, and scalability in production environments.",
        "Conducted technical reviews on critical systems, actively preventing failures and improving reliability.",
        "Mentored architects and tech leads, raising the technical bar and improving architectural decision-making across teams.",
        "Partnered with executive leadership, aligning technology decisions with direct business impact."
      ],
      tags: ["SOFTWARE ARCHITECTURE", "SPRING BOOT", "DDD", "SOLID", "CLEAN CODE", "TECH LEADERSHIP", "SCALABILITY", "SYSTEM RELIABILITY"]
    },
    {
      year: "MAR 2024 — MAR 2025",
      role: "Senior Software Enginner",
      company: "Develcode · Full-time",
      description: [
        "Developed backend solutions using Java (8-21) and Spring Boot, building robust and scalable applications integrated with React frontends.",
        "Designed and implemented event-driven microservices architectures, leveraging CQRS and hexagonal architecture to improve domain organization and system scalability.",
        "Built complex integrations using Apache Camel with RabbitMQ and Kafka, enabling efficient and resilient asynchronous communication across distributed systems.",
        "Developed and maintained RESTful APIs in Java, ensuring high performance and seamless integration with internal and external systems.",
        "Worked with Oracle and MongoDB, designing efficient data models for both relational and NoSQL scenarios.",
        "Implemented unit and integration testing, achieving over 90% code coverage with SonarQube, significantly improving code quality and reliability.",
        "Standardized code practices by applying SOLID principles and Clean Code, improving maintainability and reducing technical debt."
      ],
      tags: ["SOFTWARE ARCHITECTURE", "SPRING BOOT", "JAVA 8-21", "CQRS", "HEXAGONAL ARCHITECTURE", "APACHE CAMEL", "RABBITMQ", "KAFKA", "REST APIs", "ORACLE", "MONGODB", "SONARQUBE"]
    },
    {
      year: "JUL 2018 — MAR 2024",
      role: "Senior Software Engineer",
      company: "SiNaHab · Full-time",
      description: [
        "Took ownership of a legacy system and led a full architectural redesign, transforming a monolithic application into a microservices architecture using Spring Boot, applying DDD, SOLID principles, and Clean Code, significantly improving scalability, maintainability, and code organization.",
        "Introduced RabbitMQ-based messaging, enabling service decoupling and increasing system resilience and fault tolerance.",
        "Designed and implemented CI/CD pipelines in Azure DevOps, automating build, testing, and deployment processes, reducing production delivery time by approximately 40% and improving release reliability.",
        "Developed 20+ RESTful APIs in Java, enabling seamless integration between internal systems and external partners, reducing response times by approximately 25%.",
        "Continuously evolved the system to support thousands of active users and high transaction volumes.",
        "Implemented and maintained unit and integration testing, improving software quality and reducing production issues by approximately 30%.",
        "Managed and maintained cloud environments on Microsoft Azure, ensuring high availability, system stability, and performance."
      ],
      tags: ["SOFTWARE ARCHITECTURE", "SPRING BOOT", "MICROSERVICES", "RABBITMQ", "AZURE DEVOPS", "CI/CD", "REST APIs", "HIGH AVAILABILITY"]
    },
    {
      year: "JAN 2015 — DEC 2017",
      role: "Lead Software Engineer",
      company: "IBR TECNOLOGIA · Full-time",
      description: [
        "Led a team of 5-8 engineers, serving as a technical reference in Java and system architecture, increasing team productivity by approximately 35% through best practices and standardization.",
        "Drove the transition to a microservices and REST API architecture, reducing feature delivery time by around 30% and improving system scalability.",
        "Established engineering standards (Clean Code, SOLID, DDD) and implemented structured code review processes, reducing production bugs by approximately 40%.",
        "Played a key role in technical decision-making and solution design, ensuring highly resilient, scalable, and high-performance systems.",
        "Designed and implemented CI/CD pipelines, reducing deployment time to production by approximately 50%.",
        "Mentored junior and mid-level engineers, accelerating team growth and reducing onboarding time by approximately 30%.",
        "Partnered closely with business stakeholders, translating complex requirements into efficient technical solutions, directly impacting delivery speed and product quality."
      ],
      tags: ["SOFTWARE ARCHITECTURE", "SPRING BOOT", "TEAM LEADERSHIP", "MICROSERVICES", "REST APIs", "CI/CD", "CODE REVIEW", "DDD", "SOLID", "CLEAN CODE"]
    },
    {
      year: "JAN 2010 — DEC 2014",
      role: "Software Engineer",
      company: "IBR TECNOLOGIA · Full-time",
      description: [
        "Led the development and continuous evolution of the iBRSOFT ERP using Java, supporting 300+ active clients and handling thousands of daily fiscal transactions, focusing on performance and high availability.",
        "Designed and maintained critical fiscal modules (NF-e, NFS-e, CT-e, MDF-e, SPED, SINTEGRA), ensuring 100% legal compliance and reducing fiscal errors by approximately 40%.",
        "Architected and delivered the iBRSOFT CDV system in 6 days, meeting Federal Law 12.977 requirements, enabling the first authorized vehicle dismantling operation in Brazil and driving the company to become a national market leader.",
        "Owned the integration and certification of TEF and PAF-ECF, implementing robust Java-based solutions processing hundreds of financial transactions daily with high reliability.",
        "Developed 20+ REST APIs and Web Services in Java, enabling seamless system integration and reducing inter-service communication time by approximately 30%.",
        "Built mobile applications integrated with Java backend services, reaching 1,000+ active users and optimizing field operations for orders and service management."
      ],
      tags: ["JAVA", "ERP", "FISCAL SYSTEMS", "REST APIs", "WEB SERVICES", "SYSTEM INTEGRATIONS", "HIGH AVAILABILITY", "MOBILE INTEGRATION"]
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
