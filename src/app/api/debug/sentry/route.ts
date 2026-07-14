import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export function GET() {
  if (process.env.NODE_ENV === "production") return new NextResponse(null, { status: 404 });
  const eventId = Sentry.captureException(new Error("WDW Planner safe Sentry test"));
  return NextResponse.json({ eventId });
}
