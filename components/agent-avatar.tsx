"use client";

import { useEffect, useState } from "react";

type Mood = "happy" | "surprised" | "confused" | "angry" | "shy" | "focused";

const moodMap: Record<Mood, string> = {
  happy: "😊",
  surprised: "😮",
  confused: "😵",
  angry: "😠",
  shy: "😳",
  focused: "😌"
};

export function AgentAvatar() {
  const [mood, setMood] = useState<Mood>("happy");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const moods: Mood[] = ["happy", "surprised", "focused", "confused", "shy"];
      setMood(moods[Math.floor(Math.random() * moods.length)]);
      setPulse(true);

      setTimeout(() => setPulse(false), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`flex h-28 w-28 items-center justify-center rounded-full border border-violet-500/40 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 text-5xl shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 ${
          pulse ? "scale-110 rotate-3" : "scale-100"
        }`}
      >
        {moodMap[mood]}
      </div>

      <div className="absolute -bottom-2 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full bg-violet-500/30 blur-md" />
    </div>
  );
}
