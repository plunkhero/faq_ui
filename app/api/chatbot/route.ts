import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { message } = await req.json();

  if (message.toLowerCase().includes("refund")) {

    return NextResponse.json({
      answer: "You can request refund from billing page.",
      escalate: false,
    });

  }

  return NextResponse.json({
    answer: "I cannot solve this problem.",
    escalate: true,
  });

}