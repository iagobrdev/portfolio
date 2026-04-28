import { useEffect, useState } from "react";
import { Code, ExternalLink, Star } from "lucide-react";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

const GITHUB_USER = "iagobrdev";

export function ProjectsPage() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&direction=desc&per_page=100&type=owner`;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, {
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) {
          const msg =
            res.status === 404
              ? "Usuário não encontrado no GitHub."
              : `GitHub retornou ${res.status}.`;
          throw new Error(msg);
        }
        const data = (await res.json()) as GithubRepo[];
        if (!cancelled) setRepos(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Falha ao carregar repositórios.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const visible = repos.filter((r) => !r.fork);

  return (
    <section className="pt-28 pb-20">
      <div className="mb-12">
        <span className="text-label text-brand-cyan mb-3 block tracking-[0.2em]">
          Portfolio
        </span>
        <h1 className="text-h1 text-white mb-4">Projetos</h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed">
          Repositórios públicos de{" "}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="text-brand-cyan hover:underline"
          >
            @{GITHUB_USER}
          </a>{" "}
          via API pública do GitHub (sem login; há limite de requisições por IP).
        </p>
      </div>

      {loading && (
        <p className="text-zinc-500 text-label tracking-widest">Carregando…</p>
      )}
      {error && (
        <p className="text-red-400/90 text-sm" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && visible.length === 0 && (
        <p className="text-zinc-500">Nenhum repositório público listado.</p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="glass-card neon-glow block rounded-xl p-5 h-full border border-white/5 hover:border-brand-cyan/30 transition-colors group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-semibold text-white group-hover:text-brand-cyan transition-colors truncate">
                  {repo.name}
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
              </div>
              {repo.description && (
                <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                  {repo.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 text-label text-zinc-500">
                {repo.language && (
                  <span className="flex items-center gap-1 normal-case tracking-normal">
                    <Code className="w-3.5 h-3.5" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 normal-case tracking-normal">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stargazers_count}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
