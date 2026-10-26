import { SectionShell } from "@/components/section-shell";
import { files } from "@/lib/mock-data";

export default function FilesPage() {
  return (
    <SectionShell title="Files Manager" subtitle="Clean, sort and reduce clutter">
      <div className="grid gap-4 md:grid-cols-2">
        {files.map((file) => (
          <div key={file.name} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{file.name}</div>
              <span
                className={`rounded-full px-2 py-1 text-[10px] ${
                  file.status === "clean"
                    ? "bg-emerald-500/10 text-emerald-300"
                    : file.status === "review"
                      ? "bg-yellow-500/10 text-yellow-300"
                      : "bg-red-500/10 text-red-300"
                }`}
              >
                {file.status}
              </span>
            </div>
            <div className="mt-3 text-xs text-slate-400">
              {file.size} • {file.type}
            </div>
            <div className="mt-2 text-xs text-slate-500">{file.path}</div>
            <div className="mt-4 flex gap-2">
              <button className="btn-secondary">Review</button>
              <button className="btn-primary">Clean</button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
