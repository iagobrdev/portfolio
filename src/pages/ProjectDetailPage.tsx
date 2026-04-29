import { useEffect } from "react";
import { Code, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FxLiveRatesPanel, prefetchFxLiveRates } from "../components/FxLiveRates";
import type { ProjectDetail } from "../projects";
import { getProjectById } from "../projects";
import { getProjectDetailRenderer } from "../projects/registry";

function DetailSections({
  detail,
}: {
  detail: ProjectDetail;
}) {
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

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectId ? getProjectById(projectId) : undefined;
  const ProjectSpecificDetail = project ? getProjectDetailRenderer(project.id) : undefined;

  useEffect(() => {
    if (!project?.liveFxRates) return;
    void prefetchFxLiveRates();
  }, [project?.id, project?.liveFxRates]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <section className="pt-28 pb-20">
      <div className="mb-6">
        <Link
          to="/projects"
          className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-brand-cyan transition-colors"
        >
          Back to projects
        </Link>
      </div>
      <article className="glass-card neon-glow rounded-2xl border border-white/5 p-6 md:p-10">
        <header className="space-y-6">
          <div
            className={`flex flex-col gap-6 ${project.liveFxRates ? "lg:flex-row lg:items-start lg:gap-8 lg:justify-between" : ""}`}
          >
            <div className="min-w-0 flex-1 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="text-3xl md:text-h2 text-white break-words">{project.name}</h1>
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
                  className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-brand-cyan/40 hover:bg-brand-cyan/10 hover:text-brand-cyan"
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
        {project.detail &&
          (ProjectSpecificDetail ? (
            <ProjectSpecificDetail detail={project.detail} />
          ) : (
            <DetailSections detail={project.detail} />
          ))}
      </article>
    </section>
  );
}
