import { NextResponse } from "next/server";
import { db } from "../../../lib/prismaClient";

export async function GET(req: Request) {
  const allBbsPosts = await db.post.findMany();

  return NextResponse.json(allBbsPosts);
}
