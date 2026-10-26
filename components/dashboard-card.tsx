import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
};

export function DashboardCard({ title, value, change, trend }: Props) {
  const isUp = trend === "up";
  const isDown = trend === "down";

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{title}</span>
        {isUp ? (
          <ArrowUpRight size={16} className="text-emerald-400" />
        ) : isDown ? (
          <ArrowDownRight size={16} className="text-red-400" />
        ) : (
          <span className="text-slate-500">•</span>
        )}
      </div>

      <div className="mt-4 text-3xl font-bold">{value}</div>
      <div
        className={`mt-2 text-sm ${isUp ? "text-emerald-400" : isDown ? "text-red-400" : "text-slate-400"}`}
      >
        {change}
      </div>
    </div>
  );
}
