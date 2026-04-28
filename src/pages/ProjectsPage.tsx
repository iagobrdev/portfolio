import { Fragment } from "react";
import { Code, Github } from "lucide-react";
import { FxLiveRatesPanel } from "../components/FxLiveRates";
import type { Project, ProjectDetail } from "../data/projects";
import { PROJECTS } from "../data/projects";

function DetailSections({ detail }: { detail: ProjectDetail }) {
  return (
    <div className="mt-10 space-y-10 border-t border-white/10 pt-10">
      <section>
        <h3 className="text-label text-brand-cyan mb-3 tracking-[0.2em]">
          Overview
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{detail.overview}</p>
      </section>

      <section>
        <h3 className="text-label text-brand-cyan mb-3 tracking-[0.2em]">
          Architecture
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{detail.architecture}</p>
      </section>

      <section>
        <h3 className="text-label text-brand-cyan mb-3 tracking-[0.2em]">
          How it works
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-zinc-400 text-sm leading-relaxed">
          {detail.howItWorks.map((step) => (
            <li key={step} className="marker:text-brand-cyan">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-label text-brand-cyan mb-6 tracking-[0.2em]">
          Services
        </h3>
        <div className="space-y-6">
          {detail.services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 md:p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{svc.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="glass-card neon-glow rounded-2xl border border-white/5 p-6 md:p-10 mb-12 last:mb-0">
      <header className="space-y-6">
        <div
          className={`flex flex-col gap-6 ${project.liveFxRates ? "lg:flex-row lg:items-start lg:gap-8 lg:justify-between" : ""}`}
        >
          <div className="min-w-0 flex-1 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3 min-w-0">
                <h2 className="text-h2 text-white">{project.name}</h2>
                {project.language && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-container-low px-3 py-1 text-label text-zinc-400 normal-case tracking-normal">
                    <Code className="w-3.5 h-3.5 text-brand-cyan" />
                    {project.language}
                  </span>
                )}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-brand-cyan/40 hover:bg-brand-cyan/10 hover:text-brand-cyan"
                aria-label="View repository on GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-3xl">{project.summary}</p>
          </div>
          {project.liveFxRates && (
            <div className="shrink-0 w-full max-w-md lg:w-auto lg:max-w-[min(100%,20rem)]">
              <FxLiveRatesPanel embedded />
            </div>
          )}
        </div>
      </header>
      {project.detail && <DetailSections detail={project.detail} />}
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

      <div>
        {PROJECTS.map((project) => (
          <Fragment key={project.id}>
            <ProjectArticle project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
