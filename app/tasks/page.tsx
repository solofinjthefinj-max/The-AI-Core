import { SectionShell } from "@/components/section-shell";
import { tasks } from "@/lib/mock-data";

export default function TasksPage() {
  return (
    <SectionShell title="Task Manager" subtitle="Daily routines and work priorities">
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.done} readOnly className="h-4 w-4 accent-violet-500" />
              <div>
                <div className={task.done ? "line-through text-slate-500" : "font-medium"}>{task.title}</div>
                <div className="text-sm text-slate-400">{task.detail}</div>
              </div>
            </div>

            <span
              className={`rounded-full px-2 py-1 text-[10px] ${
                task.priority === "high"
                  ? "bg-red-500/10 text-red-300"
                  : task.priority === "medium"
                    ? "bg-yellow-500/10 text-yellow-300"
                    : "bg-slate-500/10 text-slate-300"
              }`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
