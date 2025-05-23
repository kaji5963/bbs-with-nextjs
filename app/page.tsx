import * as Bbs from "@/features/bbs/components";
import { getBbsAllData } from "./functions/function";

export default async function Home() {
  const bbaAllData = await getBbsAllData();

  return (
    <main>
      <Bbs.BbsCardList bbsAllData={bbaAllData} />
    </main>
  );
}
