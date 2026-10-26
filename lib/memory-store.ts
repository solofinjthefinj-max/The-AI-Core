export type MemoryRecord = {
  id: string;
  key: string;
  value: string;
  type: "preference" | "task" | "note" | "context" | "habit";
  createdAt: string;
};

const STORAGE_KEY = "augen-memory";

export function loadMemory(): MemoryRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveMemory(records: MemoryRecord[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function addMemory(record: MemoryRecord) {
  const current = loadMemory();
  const next = [record, ...current].slice(0, 100);
  saveMemory(next);
  return next;
}

export function getMemorySummary() {
  const memory = loadMemory();
  return memory.slice(0, 6).map((item) => `${item.key}: ${item.value}`);
}
