import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import TaskTable from "./TaskTable";
export const dynamic = "force-dynamic";
const Home = () => {
  return (
    <div>
      <Link href="/tasks/new">
        <Button color="violet">New Task</Button>
      </Link>
      <h1 className="mt-4 text-xl text-gray-600">Your created tasks</h1>
      <TaskTable />
    </div>
  );
};

export default Home;
