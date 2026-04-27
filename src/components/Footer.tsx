export function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/5 py-12 bg-surface mt-20">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter [word-spacing:0.35rem] text-white">
          IAGO BERTOLETTI RIBEIRO
        </div>
        
        <div className="flex gap-10 text-label text-zinc-500">
          <a href="#" className="hover:text-brand-cyan transition-colors">Github</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Email</a>
        </div>
        
        <div className="text-label text-zinc-500 opacity-50">
          © 2024 EXPERT-FUTURISM. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
