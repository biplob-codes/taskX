"use client";
import { markTaskAsComplete } from "@/app/action";
import { Button } from "@radix-ui/themes";
import React, { useState } from "react";
interface Props {
  isCompleted: boolean;
  taskId: string;
}
const TaskButton = ({ isCompleted, taskId }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      className="!my-5"
      color={isCompleted ? "green" : "purple"}
      loading={loading}
      onClick={async () => {
        setLoading(true);
        await markTaskAsComplete(taskId);
      }}
    >
      {isCompleted ? "Completed" : "Mark as Complete"}
    </Button>
  );
};

export default TaskButton;
