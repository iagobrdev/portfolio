export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full border-t border-white/5 py-12 bg-surface mt-8">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter [word-spacing:0.35rem] text-white">
          IAGO BERTOLETTI RIBEIRO
        </div>
        
        <div className="flex gap-10 text-label text-zinc-500">
          <a href="https://github.com/iagobrdev" className="hover:text-brand-cyan transition-colors" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/iagobrdev" className="hover:text-brand-cyan transition-colors" target="_blank">LinkedIn</a>
          <a href="https://wa.me/+5565992807847" className="hover:text-brand-cyan transition-colors" target="_blank">WhatsApp</a>
          <a href="mailto:iagobertolettiribeiro@gmail.com" className="hover:text-brand-cyan transition-colors">Email</a>
        </div>
        
        <div className="text-label text-zinc-500 opacity-50">
          © {currentYear} ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
