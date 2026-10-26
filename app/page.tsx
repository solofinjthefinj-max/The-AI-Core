import { DashboardCard } from "@/components/dashboard-card";
import { AssistantPanel } from "@/components/assistant-panel";
import { metrics, emailItems, files, socialPosts, tasks } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <DashboardCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <AssistantPanel />

        <div className="space-y-6">
          <div className="card p-5">
            <h3 className="mb-3 text-lg font-semibold">Quick Actions</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">Clean downloads folder</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">Respond to 3 priority emails</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">Draft social post copy</div>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="mb-3 text-lg font-semibold">Daily Tasks</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {tasks.map((task) => (
                <li key={task.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <div className="flex items-center justify-between">
                    <span>{task.title}</span>
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
                  <div className="mt-2 text-xs text-slate-400">{task.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="mb-4 text-lg font-semibold">Recent Mail</h3>
          <div className="space-y-3">
            {emailItems.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{item.sender}</div>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
                <div className="mt-2 text-sm text-slate-200">{item.subject}</div>
                <div className="mt-1 text-xs text-slate-400">{item.preview}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="mb-4 text-lg font-semibold">Files</h3>
          <div className="space-y-3">
            {files.map((file) => (
              <div key={file.name} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{file.name}</span>
                  <span className="text-xs text-slate-400">{file.status}</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  {file.size} • {file.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="mb-4 text-lg font-semibold">Social</h3>
          <div className="space-y-3">
            {socialPosts.map((post) => (
              <div key={post.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="text-xs uppercase tracking-[0.2em] text-violet-300">{post.platform}</div>
                <div className="mt-2 font-medium">{post.title}</div>
                <div className="mt-1 text-xs text-slate-400">{post.summary}</div>
                <div className="mt-2 text-xs text-emerald-400">{post.engagement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
