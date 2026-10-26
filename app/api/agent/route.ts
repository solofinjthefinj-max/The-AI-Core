import { NextRequest, NextResponse } from "next/server";
import { runAgent } from "@/lib/agent";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const prompt = typeof body.prompt === "string" ? body.prompt : "";

    const result = await runAgent(prompt, body.tools || []);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: "فشل في معالجة الطلب",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
