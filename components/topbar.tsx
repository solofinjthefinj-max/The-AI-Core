import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-6 py-4">
      <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2">
        <Search size={16} className="text-slate-400" />
        <input
          className="w-72 bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
          placeholder="Search commands..."
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-slate-700 bg-slate-950 p-2">
          <Bell size={16} />
        </button>
        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 font-bold">
            A
          </div>
          <div className="text-sm">
            <div className="font-medium">Admin</div>
            <div className="text-xs text-slate-400">Premium</div>
          </div>
        </div>
      </div>
    </header>
  );
}
