import type { ProjectDetail } from "../types";
import { FxArchitectureDiagram } from "./FxArchitectureDiagram";

type Props = {
  detail: ProjectDetail;
};

export function FxEventPlatformDetailSections({ detail }: Props) {
  return (
    <div className="mt-10 space-y-10 border-t border-white/10 pt-10">
      <section>
        <h3 className="text-label text-brand-cyan mb-3 tracking-[0.2em]">Overview</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{detail.overview}</p>
      </section>

      <section>
        <h3 className="text-label text-brand-cyan mb-3 tracking-[0.2em]">Architecture</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{detail.architecture}</p>
        <div className="mt-5">
          <FxArchitectureDiagram />
        </div>
      </section>

      <section>
        <h3 className="text-label text-brand-cyan mb-3 tracking-[0.2em]">How it works</h3>
        <ol className="list-decimal list-inside space-y-3 text-zinc-400 text-sm leading-relaxed">
          {detail.howItWorks.map((step) => (
            <li key={step} className="marker:text-brand-cyan">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-label text-brand-cyan mb-6 tracking-[0.2em]">Services</h3>
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
