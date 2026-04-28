import { NavLink, Link } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-label tracking-widest transition-colors ${
    isActive ? "text-brand-cyan" : "text-zinc-400 hover:text-white"
  }`;

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-surface/60 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto h-20 px-8">
        <Link
          to="/"
          className="text-xl font-black tracking-tighter [word-spacing:0.35rem] text-brand-cyan uppercase hover:opacity-90 transition-opacity"
        >
          IAGO BERTOLETTI RIBEIRO
        </Link>

        <div className="flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
