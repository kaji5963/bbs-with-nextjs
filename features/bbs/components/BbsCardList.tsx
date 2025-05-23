import React from "react";

import * as Bbs from "@/features/bbs/components";

const BbsCardList = () => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Bbs.BbsCard />
      <Bbs.BbsCard />
      <Bbs.BbsCard />
      <Bbs.BbsCard />
      <Bbs.BbsCard />
      <Bbs.BbsCard />
    </div>
  );
};

export default BbsCardList;
