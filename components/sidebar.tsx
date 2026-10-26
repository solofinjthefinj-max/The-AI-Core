import Link from "next/link";
import {
  CheckSquare,
  FolderOpen,
  Mail,
  MessageSquareText,
  Music4,
  Sparkles
} from "lucide-react";

const items = [
  { label: "Overview", href: "/", icon: Sparkles },
  { label: "Mail", href: "/mail", icon: Mail },
  { label: "Files", href: "/files", icon: FolderOpen },
  { label: "Social", href: "/social", icon: MessageSquareText },
  { label: "Audio", href: "/audio", icon: Music4 },
  { label: "Tasks", href: "/tasks", icon: CheckSquare }
];

export function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900/70 p-4">
      <div className="mb-8 px-2">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Auralis</p>
        <h1 className="mt-2 text-2xl font-bold">AI Workspace</h1>
      </div>

      <nav className="space-y-2">
        {items.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200 transition hover:border-violet-500/50 hover:bg-slate-800/60"
          >
            <Icon size={16} className="text-violet-400" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
