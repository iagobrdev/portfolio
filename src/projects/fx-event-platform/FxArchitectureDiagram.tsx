import architectureSvg from "../../assets/fx-event-platform-architecture.svg";

export function FxArchitectureDiagram() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0b1010] p-3 md:p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
          Architecture flow
        </p>
      </div>
      <div className="w-full overflow-auto rounded-md border border-white/5">
        <img
          src={architectureSvg}
          alt="FX Event Platform architecture diagram"
          className="w-full h-auto min-w-[760px] block max-w-none md:min-w-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
