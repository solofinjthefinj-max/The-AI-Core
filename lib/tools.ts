import { ToolInfo } from "@/types";

export const toolRegistry: ToolInfo[] = [
  {
    name: "files",
    label: "Files",
    description: "تنظيف الملفات وإدارة المساحة",
    icon: "folder",
    enabled: true
  },
  {
    name: "email",
    label: "Mail",
    description: "إدارة البريد والردود",
    icon: "mail",
    enabled: true
  },
  {
    name: "social",
    label: "Social",
    description: "ردود التواصل الاجتماعي",
    icon: "message",
    enabled: true
  },
  {
    name: "audio",
    label: "Audio",
    description: "مشاريع الصوت والتسجيل",
    icon: "music",
    enabled: true
  },
  {
    name: "tasks",
    label: "Tasks",
    description: "إدارة يومية المهام",
    icon: "check",
    enabled: true
  }
];
