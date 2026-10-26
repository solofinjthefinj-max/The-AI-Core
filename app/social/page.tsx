import { SectionShell } from "@/components/section-shell";
import { socialPosts } from "@/lib/mock-data";

export default function SocialPage() {
  return (
    <SectionShell title="Social Assistant" subtitle="Engagement, drafts and reply ideas">
      <div className="grid gap-4 md:grid-cols-2">
        {socialPosts.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-violet-300">{item.platform}</div>
            <div className="mt-2 text-lg font-semibold">{item.title}</div>
            <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-emerald-400">{item.engagement}</span>
              <button className="btn-primary">Generate Reply</button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
