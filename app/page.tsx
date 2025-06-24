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
      <TaskTable />
    </div>
  );
};

export default Home;
