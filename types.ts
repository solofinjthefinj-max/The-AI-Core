export type ToolName = "files" | "email" | "social" | "audio" | "tasks" | "search";

export interface ToolInfo {
  name: ToolName;
  label: string;
  description: string;
  icon: string;
  enabled: boolean;
}

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface EmailItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  priority: "high" | "medium" | "low";
}

export interface FileItem {
  name: string;
  size: string;
  type: string;
  path: string;
  status: "clean" | "review" | "warning";
}

export interface SocialPost {
  platform: string;
  title: string;
  summary: string;
  engagement: string;
}

export interface AudioProject {
  name: string;
  length: string;
  status: string;
  lastUpdated: string;
}

export interface TaskItem {
  title: string;
  detail: string;
  done: boolean;
  priority: "high" | "medium" | "low";
}
