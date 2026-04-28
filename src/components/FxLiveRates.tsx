import { memo, useCallback, useEffect, useState } from "react";
import { Equal, Minus, TrendingDown, TrendingUp } from "lucide-react";

const POLL_MS = 30_000;

type FxRateRow = {
  pair: string;
  rate: number;
  timestamp: string;
  source: string;
  previousRate: number | null;
};

type FxRatesResponse = {
  content: FxRateRow[];
};

function approxEqual(a: number, b: number) {
  const scale = Math.max(1, Math.abs(a), Math.abs(b));
  return Math.abs(a - b) <= 1e-9 * scale;
}

function trendKind(
  rate: number,
  previousRate: number | null,
): "down" | "up" | "flat" | "unknown" {
  if (previousRate == null || Number.isNaN(previousRate)) return "unknown";
  if (approxEqual(rate, previousRate)) return "flat";
  if (previousRate < rate) return "down";
  return "up";
}

function TrendIcon({ kind }: { kind: "down" | "up" | "flat" | "unknown" }) {
  const common = "h-3 w-3 shrink-0";
  if (kind === "down")
    return <TrendingDown className={`${common} text-rose-400`} aria-hidden />;
  if (kind === "up")
    return <TrendingUp className={`${common} text-emerald-400`} aria-hidden />;
  if (kind === "flat")
    return <Equal className={`${common} text-zinc-500`} aria-hidden />;
  return <Minus className={`${common} text-zinc-600`} aria-hidden />;
}

function sameRateRows(a: FxRateRow[], b: FxRateRow[]) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const x = a[i];
    const y = b[i];
    if (
      x.pair !== y.pair ||
      x.rate !== y.rate ||
      x.timestamp !== y.timestamp ||
      x.previousRate !== y.previousRate
    )
      return false;
  }
  return true;
}

const FxRatesTable = memo(function FxRatesTable({
  rows,
  error,
}: {
  rows: FxRateRow[];
  error: string | null;
}) {
  return (
    <>
      {error && (
        <p className="mb-2 text-xs text-rose-400/90" role="alert">
          {error}
        </p>
      )}
      <div className="w-full overflow-x-auto rounded-md border border-white/5">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-white/10 text-[0.65rem] font-semibold uppercase tracking-wider text-zinc-500">
              <th className="px-2 py-1 text-left">Pair</th>
              <th className="px-2 py-1 text-left">Rate</th>
              <th className="w-7 px-1 py-1" aria-hidden>
                {""}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && !error && (
              <tr>
                <td colSpan={3} className="px-2 py-4 text-center text-zinc-500">
                  No rows yet.
                </td>
              </tr>
            )}
            {rows.map((row) => {
              const kind = trendKind(row.rate, row.previousRate);
              return (
                <tr
                  key={row.pair}
                  className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-2 py-1 font-mono text-white">{row.pair}</td>
                  <td className="px-2 py-1 font-mono text-zinc-300 tabular-nums">
                    {Number(row.rate).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6,
                    })}
                  </td>
                  <td className="px-1 py-1">
                    <span className="inline-flex" title={kind}>
                      <TrendIcon kind={kind} />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
});

function FxLiveRatesPanelInner({ embedded }: { embedded?: boolean }) {
  const apiUrl = import.meta.env.VITE_FX_RATES_API_URL?.trim() ?? "";
  const [rows, setRows] = useState<FxRateRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = useCallback(async () => {
    if (!apiUrl) return;
    try {
      const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
      if (!res.ok) {
        setError(`Request failed (${res.status})`);
        setRows([]);
        return;
      }
      const data = (await res.json()) as FxRatesResponse;
      const list = Array.isArray(data?.content) ? data.content : [];
      setRows((prev) => (sameRateRows(prev, list) ? prev : list));
      setError((e) => (e !== null ? null : e));
    } catch {
      setError("Could not load rates");
      setRows([]);
    }
  }, [apiUrl]);

  useEffect(() => {
    if (!apiUrl) return;
    void fetchRates();
    const id = window.setInterval(() => void fetchRates(), POLL_MS);
    return () => window.clearInterval(id);
  }, [apiUrl, fetchRates]);

  if (!apiUrl) {
    return (
      <div
        className={`rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-200/90 ${embedded ? "" : "mt-8"}`}
      >
        Set{" "}
        <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">
          VITE_FX_RATES_API_URL
        </code>{" "}
        to enable live FX rates (see Docker build args).
      </div>
    );
  }

  const snapshotTs = rows[0]?.timestamp;
  const ratesAsOf =
    snapshotTs != null
      ? new Date(snapshotTs).toLocaleString(undefined, {
          dateStyle: "short",
          timeStyle: "medium",
        })
      : null;

  return (
    <div
      className={`max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5 ${embedded ? "" : "mt-8"}`}
    >
      <div className="mb-3 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          Live rates
        </h3>
        {snapshotTs != null && ratesAsOf != null && (
          <div className="text-[0.65rem] text-zinc-500 sm:text-right">
            <p className="text-zinc-400">
              As of{" "}
              <time dateTime={snapshotTs} className="text-zinc-300 tabular-nums">
                {ratesAsOf}
              </time>
            </p>
          </div>
        )}
      </div>
      <FxRatesTable rows={rows} error={error} />
    </div>
  );
}

export const FxLiveRatesPanel = memo(function FxLiveRatesPanel(props: {
  embedded?: boolean;
}) {
  return <FxLiveRatesPanelInner {...props} />;
});
