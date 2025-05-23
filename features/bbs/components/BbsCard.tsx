import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BbsData } from "@/app/types/types";

interface BbsDataProps {
  bbsData: BbsData;
}

const BbsCard = ({ bbsData }: BbsDataProps) => {
  const { id, title, content, createdAt, username } = bbsData;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BbsCard;
