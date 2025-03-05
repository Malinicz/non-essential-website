import { NextResponse } from "next/server";
import { db } from "@/db";
import { ratings } from "@/db/schema";
import { z } from "zod";

const ratingSchema = z.object({
  songId: z.string(),
  rating: z.number().min(1).max(5),
});

export async function POST(request: Request) {
  try {
    // Add this temporarily for debugging
    if (!process.env.POSTGRES_URL) {
      console.error("Database URL is not set");
    }

    const body = await request.json();

    // Validate request body
    const validatedData = ratingSchema.parse(body);

    // Insert rating into database
    await db.insert(ratings).values({
      songId: validatedData.songId,
      rating: validatedData.rating,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Rating error:",
      error,
      "Database URL exists:",
      !!process.env.POSTGRES_URL
    );
    return NextResponse.json(
      {
        error: "Failed to save rating",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 400 }
    );
  }
}
