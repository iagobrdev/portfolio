import { Fragment } from "react";
import { ArrowRight, Code, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../projects";
import { PROJECTS } from "../projects";

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="glass-card rounded-2xl border border-white/5 p-6 md:p-7">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
          {project.language && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-container-low px-3 py-1 text-label text-zinc-400 normal-case tracking-normal">
              <Code className="w-3.5 h-3.5 text-brand-cyan" />
              {project.language}
            </span>
          )}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-brand-cyan/40 hover:bg-brand-cyan/10 hover:text-brand-cyan"
          aria-label="View repository on GitHub"
        >
          <Github className="w-4.5 h-4.5" strokeWidth={2} />
        </a>
      </div>
      <p className="text-zinc-400 leading-relaxed mb-4">{project.whatItIs}</p>
      <ul className="space-y-2 mb-6">
        {project.whatItDoes.map((line) => (
          <li key={line} className="text-sm text-zinc-500 leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
      <Link
        to={`/projects/${project.id}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:text-white transition-colors"
      >
        View details
        <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}

export function ProjectsPage() {
  return (
    <section className="pt-28 pb-20">
      <div className="mb-12">
        <span className="text-label text-brand-cyan mb-3 block tracking-[0.2em]">
          Selected work
        </span>
        <h1 className="text-h1 text-white mb-4">Projects</h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed">
          Work I have taken from design through to production—architecture, backend
          services, and enough context to understand how each piece fits together.
        </p>
      </div>

      {PROJECTS.length === 0 && (
        <p className="text-zinc-500">No projects added yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <Fragment key={project.id}>
            <ProjectArticle project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
