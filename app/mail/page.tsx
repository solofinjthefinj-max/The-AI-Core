import { SectionShell } from "@/components/section-shell";
import { emailItems } from "@/lib/mock-data";

export default function MailPage() {
  return (
    <SectionShell title="Mail Assistant" subtitle="Inbox, drafts, follow-ups and replies">
      <div className="space-y-4">
        {emailItems.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{item.sender}</div>
                <div className="text-sm text-slate-400">{item.subject}</div>
              </div>
              <div className="text-xs text-slate-400">{item.time}</div>
            </div>
            <p className="mt-3 text-sm text-slate-300">{item.preview}</p>
            <div className="mt-4 flex gap-2">
              <button className="btn-secondary">Reply</button>
              <button className="btn-secondary">Summarize</button>
              <button className="btn-primary">Draft Response</button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
