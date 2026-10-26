"use client";

import { FormEvent, useState } from "react";
import { SendHorizonal } from "lucide-react";

export function AssistantPanel() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("مرحبًا! أنا مساعدك الذكي. ماذا تريد أن أفعله الآن؟");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const result = await response.json();
    setAnswer(result.answer || "تمت المعالجة بنجاح.");
  }

  return (
    <div className="card h-[420px] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">Smart Assistant</h3>
        <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
          Online
        </span>
      </div>

      <div className="h-[260px] space-y-3 overflow-auto rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
        <div className="rounded-xl bg-slate-800/80 p-3">{answer}</div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="soft-input flex-1"
          placeholder='اكتب مثل: "نظف الملفات" أو "راجع البريد"'
        />
        <button type="submit" className="btn-primary flex items-center gap-2">
          <SendHorizonal size={16} />
          Send
        </button>
      </form>
    </div>
  );
}
