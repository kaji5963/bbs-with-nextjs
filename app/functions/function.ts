import { BbsData } from "../types/types";

// 全データ取得
export const getBbsAllData = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BbsData[] = await response.json();

  return bbsAllData;
};

// bbsIdに紐づくデータ取得
export const getDetailBbsData = async (bbsId: string) => {
  const response = await fetch(`http://localhost:3000/api/post/${bbsId}`, {
    cache: "no-store",
  });

  const bbsDetailData: BbsData = await response.json();

  return bbsDetailData;
};
