import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const data = await req.json();

  return NextResponse.json({
    success: true,
    ticketId: "TICKET-" + Math.floor(Math.random() * 10000),
  });

}