"use server";

import { z } from "zod";
import { db } from "../../lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formSchema } from "../schema/formSchema";

export const postBbs = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await db.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  // キャッシュが削除され更新される
  revalidatePath("/");

  // リダイレクト処理
  redirect("/");
};
