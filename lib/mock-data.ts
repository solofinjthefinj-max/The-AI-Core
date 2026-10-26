import {
  AudioProject,
  EmailItem,
  FileItem,
  SocialPost,
  TaskItem,
  MetricCard
} from "@/types";

export const metrics: MetricCard[] = [
  {
    title: "Inbox",
    value: "184",
    change: "+12%",
    trend: "up"
  },
  {
    title: "Files cleaned",
    value: "514",
    change: "+8%",
    trend: "up"
  },
  {
    title: "Draft replies",
    value: "21",
    change: "-3%",
    trend: "down"
  },
  {
    title: "Audio sessions",
    value: "7",
    change: "+2",
    trend: "up"
  }
];

export const emailItems: EmailItem[] = [
  {
    id: "e1",
    sender: "Studio Contact",
    subject: "New mix draft review",
    preview: "I uploaded the latest mix draft and would like your feedback on the vocal balance.",
    time: "10:24",
    priority: "high"
  },
  {
    id: "e2",
    sender: "Project Team",
    subject: "Client meeting summary",
    preview: "Here are the action points from yesterday’s call and the next delivery milestone.",
    time: "09:15",
    priority: "medium"
  },
  {
    id: "e3",
    sender: "Sales Inbox",
    subject: "Follow-up request",
    preview: "Can we schedule a quick review for the final audio package and timeline update?",
    time: "Yesterday",
    priority: "low"
  }
];

export const files: FileItem[] = [
  {
    name: "master_mix_v2.wav",
    size: "1.8 GB",
    type: "Audio",
    path: "Audio/Projects/Master",
    status: "clean"
  },
  {
    name: "draft_email_backup.zip",
    size: "240 MB",
    type: "Archive",
    path: "Backups/Mail",
    status: "review"
  },
  {
    name: "image_reference_final.png",
    size: "6.1 MB",
    type: "Image",
    path: "Assets/References",
    status: "warning"
  }
];

export const socialPosts: SocialPost[] = [
  {
    platform: "Instagram",
    title: "Reach growth campaign",
    summary: "Focus on short-form storytelling around the latest track release.",
    engagement: "38% +"
  },
  {
    platform: "X",
    title: "Reply templates",
    summary: "Write quick owner-focused replies that sound natural and promotional.",
    engagement: "24% +"
  }
];

export const audioProjects: AudioProject[] = [
  {
    name: "Podcast Episode 03",
    length: "42 min",
    status: "Editing",
    lastUpdated: "2h ago"
  },
  {
    name: "Track Mix - Final Master",
    length: "3:44",
    status: "Review",
    lastUpdated: "5h ago"
  },
  {
    name: "Voiceover Reel",
    length: "1:12",
    status: "Ready",
    lastUpdated: "1d ago"
  }
];

export const tasks: TaskItem[] = [
  {
    title: "Reply to client about final master",
    detail: "Send a short approval note and confirm final delivery date.",
    done: false,
    priority: "high"
  },
  {
    title: "Organize download folder",
    detail: "Sort duplicates and old project files to free disk space.",
    done: true,
    priority: "medium"
  },
  {
    title: "Prepare social post copy",
    detail: "Draft 3 reply options for the new release week.",
    done: false,
    priority: "low"
  }
];
