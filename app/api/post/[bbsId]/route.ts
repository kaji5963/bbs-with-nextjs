import { NextResponse } from "next/server";
import { db } from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ bbsId: string }> }
) {
  const { bbsId } = await params;

  const bbsDetailData = await db.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });

  return NextResponse.json(bbsDetailData);
}
