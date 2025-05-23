import React from "react";

import * as Bbs from "@/features/bbs/components";
import { BbsData } from "@/app/types/types";

interface BbsAllDataProps {
  bbsAllData: BbsData[];
}

const BbsCardList = ({ bbsAllData }: BbsAllDataProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BbsData) => {
        return <Bbs.BbsCard key={bbsData.id} bbsData={bbsData} />;
      })}
    </div>
  );
};

export default BbsCardList;
