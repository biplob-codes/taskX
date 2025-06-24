import prisma from "@/lib/prisma";
import { Badge, Button } from "@radix-ui/themes";
import React from "react";
import TaskButton from "./TaskButton";

const TaskDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const task = await prisma.task.findUnique({ where: { id } });

  return (
    <div>
      <h1>
        {" "}
        <span className="text-gray-500 font-semibold mr-2">Task ID:</span>
        {task?.id}
      </h1>
      <p>
        <span className="text-gray-500 font-semibold mr-2">Title:</span>
        {task?.title}
      </p>
      <p>
        {" "}
        <span className="text-gray-500 font-semibold mr-2">Description:</span>
        {task?.description}
      </p>
      <p>
        <span className="text-gray-500 font-semibold mr-2">Status:</span>
        <Badge size={"2"} color={task?.isCompleted ? "green" : "red"}>
          {task?.isCompleted ? "Completed" : "Pending"}
        </Badge>
      </p>
      <p>
        {" "}
        <span className="text-gray-500 font-semibold mr-2">Created At:</span>
        {task?.createdAt.toISOString().split("T")[0]}
      </p>
      {!task?.isCompleted && (
        <TaskButton isCompleted={task?.isCompleted!} taskId={task?.id!} />
      )}
    </div>
  );
};

export default TaskDetailsPage;
