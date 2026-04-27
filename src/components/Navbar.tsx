import { Code, Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-surface/60 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto h-20 px-8">
        <div className="text-xl font-black tracking-tighter [word-spacing:0.35rem] text-brand-cyan uppercase">
          IAGO BERTOLETTI RIBEIRO
        </div>
        
        <div className="flex items-center gap-4">
          <Code className="w-5 h-5 text-zinc-400" />
          <Terminal className="w-5 h-5 text-zinc-400" />
        </div>
      </div>
    </nav>
  );
}
