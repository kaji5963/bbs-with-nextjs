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

const BbsCard = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/bbs-posts/1" className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BbsCard;
