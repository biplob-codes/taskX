import prisma from "@/lib/prisma";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import TaskTable from "./TaskTable";

const Home = () => {
  return (
    <div>
      <Link href="/newtask">
        <Button color="violet">New Task</Button>
      </Link>
      <TaskTable />
    </div>
  );
};

export default Home;
