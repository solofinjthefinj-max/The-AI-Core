import { ToolName } from "@/types";

export async function runAgent(prompt: string, tools: ToolName[] = []) {
  const lower = prompt.toLowerCase();

  let answer = "تم تحليل طلبك. سأقوم بترتيب المهمة بناءً على أولوياتك.";
  let selectedTools: ToolName[] = tools.length > 0 ? tools : ["files", "email", "tasks"];

  if (lower.includes("بريد") || lower.includes("mail") || lower.includes("رسالة")) {
    selectedTools = ["email", "tasks"];
    answer = "تم تحديد البريد: سأفحص الرسائل المهمة، وأقترح ردود مناسبة.";
  }

  if (lower.includes("ملف") || lower.includes("تنظيف") || lower.includes("دليل")) {
    selectedTools = ["files"];
    answer = "تم تحديد أداة الملفات: سأراجع المساحة غير المستخدمة وأقترح تنظيف الملفات المتكررة.";
  }

  if (lower.includes("social") || lower.includes("اجتماعي") || lower.includes("رد")) {
    selectedTools = ["social"];
    answer = "تم تحديد التواصل الاجتماعي: سأقوم بكتابة اقتراحات الردود المناسبة.";
  }

  if (lower.includes("صوت") || lower.includes("audio") || lower.includes("مكس") || lower.includes("تسجيل")) {
    selectedTools = ["audio", "tasks"];
    answer = "تم تحديد مساحة الصوت: سأجهز خطة تسجيل/مكس/مراجعة.";
  }

  return {
    answer,
    toolsUsed: selectedTools,
    summary: "تم تحديد الأدوات المناسبة حسب نص الطلب."
  };
}
