import { SectionShell } from "@/components/section-shell";
import { audioProjects } from "@/lib/mock-data";

export default function AudioPage() {
  return (
    <SectionShell title="Audio Workspace" subtitle="Studio projects, editing and mix review">
      <div className="grid gap-4 md:grid-cols-3">
        {audioProjects.map((project) => (
          <div key={project.name} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{project.name}</div>
              <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] text-violet-300">
                {project.status}
              </span>
            </div>
            <div className="mt-3 text-sm text-slate-300">{project.length}</div>
            <div className="mt-2 text-xs text-slate-400">Updated {project.lastUpdated}</div>
            <div className="mt-4 flex gap-2">
              <button className="btn-secondary">Open</button>
              <button className="btn-primary">Review</button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
