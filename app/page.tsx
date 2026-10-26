import { AgentAvatar } from "@/components/agent-avatar";
import { getMemorySummary } from "@/lib/memory-store";

export default function HomePage() {
  const memory = getMemorySummary();

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex items-center gap-6">
          <AgentAvatar />

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
              الجوهرة الذكية
            </p>
            <h1 className="text-3xl font-bold">AUGEN</h1>
            <p className="mt-2 text-slate-300">
              مساعد ذكي شخصي يذكّر، يفرّز، ويُشغّل المهام حسب تفضيلاتك.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Smart Assistant</h3>
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
            مرحبًا، أنا أوجن. يمكنني مساعدتك في تنظيف الملفات، تنظيم البريد، إعداد الردود،
            إدارة المهام، وتنظيم المشاريع الصوتية.
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-lg font-semibold">Memory</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {memory.length > 0 ? (
              memory.map((item, index) => <li key={index}>• {item}</li>)
            ) : (
              <li>• لا توجد ذكريات بعد.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
