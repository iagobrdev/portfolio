import { useEffect, useState } from "react";
import { Layers, Menu, Sparkles, UserRound, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NavLink, Link, useLocation } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-label tracking-widest transition-colors py-2 md:py-0 ${
    isActive ? "text-brand-cyan" : "text-zinc-400 hover:text-white"
  }`;

const drawerLinks = [
  {
    to: "/",
    end: true,
    label: "About",
    hint: "Overview & trajectory",
    Icon: UserRound,
  },
  {
    to: "/projects",
    label: "Projects",
    hint: "Selected work",
    Icon: Layers,
  },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] border-b border-white/10 bg-surface/70 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/60">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto h-16 min-[400px]:h-20 px-5 sm:px-8 gap-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-sm min-[400px]:text-base sm:text-xl font-black tracking-tighter [word-spacing:0.35rem] text-brand-cyan uppercase hover:opacity-90 transition-opacity truncate min-w-0 pr-2"
          >
            IAGO BERTOLETTI RIBEIRO
          </Link>

          <div className="hidden md:flex items-center gap-10 shrink-0">
            <NavLink to="/" end className={linkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
          </div>

          <button
            type="button"
            className="md:hidden shrink-0 relative h-11 w-11 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/[0.09] to-white/[0.02] text-zinc-100 ring-1 ring-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)] active:scale-[0.96] transition-transform"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5 text-brand-cyan" strokeWidth={2.25} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.25} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-[90] md:hidden cursor-default border-0 p-0 appearance-none bg-gradient-to-r from-black/80 via-black/70 to-black/55 backdrop-blur-[10px]"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="mobile-menu"
              key="menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: "-104%" }}
              animate={{ x: 0 }}
              exit={{ x: "-104%" }}
              transition={{ type: "spring", damping: 30, stiffness: 380, mass: 0.72 }}
              className="fixed left-0 top-16 min-[400px]:top-20 bottom-0 z-[95] md:hidden flex w-[min(19.5rem,95vw)] flex-col overflow-hidden rounded-r-[1.35rem] border border-white/10 border-l-0 bg-surface shadow-[12px_0_64px_rgba(0,0,0,0.55),inset_-1px_0_0_rgba(0,220,229,0.08)]"
              style={{
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.55]"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 0%, rgba(0,220,229,0.12), transparent 55%), radial-gradient(80% 60% at 100% 100%, rgba(0,220,229,0.05), transparent 50%)",
                }}
              />
              <div className="relative flex flex-col flex-1 min-h-0">
                <div className="px-5 pt-5 pb-4 border-b border-white/[0.07]">
                  <div className="flex items-center gap-2 text-brand-cyan mb-1">
                    <Sparkles className="h-3.5 w-3.5 opacity-90" strokeWidth={2} />
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]">
                      Portfolio
                    </span>
                  </div>
                </div>

                <nav className="flex-1 flex flex-col gap-1.5 px-3 py-4 overflow-y-auto">
                  {drawerLinks.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 + index * 0.07,
                        type: "spring",
                        damping: 26,
                        stiffness: 320,
                      }}
                    >
                      <NavLink
                        to={item.to}
                        end={"end" in item ? item.end : false}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center gap-3.5 rounded-xl px-3 py-3.5 transition-all duration-200 active:scale-[0.98] ${
                            isActive
                              ? "bg-brand-cyan/[0.09] text-white shadow-[inset_3px_0_0_0_#00dce5]"
                              : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                isActive
                                  ? "bg-brand-cyan/20 text-brand-cyan ring-1 ring-brand-cyan/30"
                                  : "bg-white/[0.06] text-zinc-400 ring-1 ring-white/[0.08] group-hover:text-zinc-200"
                              }`}
                            >
                              <item.Icon className="h-5 w-5" strokeWidth={1.75} />
                            </span>
                            <span className="min-w-0 flex-1 text-left">
                              <span className="block text-base font-semibold tracking-tight">
                                {item.label}
                              </span>
                              <span
                                className={`mt-0.5 block text-[0.7rem] leading-tight ${
                                  isActive ? "text-brand-cyan/80" : "text-zinc-500 group-hover:text-zinc-400"
                                }`}
                              >
                                {item.hint}
                              </span>
                            </span>
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <div className="relative px-5 py-3 mt-auto border-t border-white/[0.06]">
                  <p className="text-[0.65rem] text-zinc-600 tracking-wide">
                    Iago Bertoletti Ribeiro
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
