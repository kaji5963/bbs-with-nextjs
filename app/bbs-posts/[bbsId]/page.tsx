import { getDetailBbsData } from "@/app/functions/function";
import { BbsData } from "@/app/types/types";
import Link from "next/link";
import React from "react";

const BbsDetailPage = async ({
  params,
}: {
  params: Promise<{ bbsId: string }>;
}) => {
  // paramsから動的bbsIdを取得(awaitにしないとエラーになる)
  const { bbsId } = await params;

  // bbsIdに紐づくデータ取得
  const bbsDetailData = await getDetailBbsData(bbsId);

  const { title, username, content } = bbsDetailData;

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{username}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link
        href={"/"}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        戻る
      </Link>
    </div>
  );
};

export default BbsDetailPage;
