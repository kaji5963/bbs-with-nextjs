import { NextResponse } from "next/server";
import { db } from "../../../lib/prismaClient";

export async function GET(req: Request) {
  const allBbsPosts = await db.post.findMany();

  return NextResponse.json(allBbsPosts);
}

// export async function POST(req: Request) {
//   const { username, title, content } = await req.json();

//   const postData = await db.post.create({
//     data: {
//       username,
//       title,
//       content,
//     },
//   });

//   return NextResponse.json(postData);
// }
