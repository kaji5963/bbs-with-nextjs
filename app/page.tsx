import * as Bbs from "@/features/bbs/components";
import { BbsData } from "./types/types";

const getBbsAllData = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BbsData[] = await response.json();

  return bbsAllData;
};

export default async function Home() {
  const bbaAllData = await getBbsAllData();

  return (
    <main>
      <Bbs.BbsCardList bbsAllData={bbaAllData} />
    </main>
  );
}
