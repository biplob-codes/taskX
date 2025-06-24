import prisma from "@/lib/prisma";
import { Badge } from "@radix-ui/themes";
import React from "react";
import TaskButton from "./TaskButton";
export const dynamic = "force-dynamic";
const TaskDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const task = await prisma.task.findUnique({ where: { id } });
  if (task)
    return (
      <div>
        <h1>
          {" "}
          <span className="text-gray-500 font-semibold mr-2">Task ID:</span>
          {task.id}
        </h1>
        <p>
          <span className="text-gray-500 font-semibold mr-2">Title:</span>
          {task.title}
        </p>
        <p>
          {" "}
          <span className="text-gray-500 font-semibold mr-2">Description:</span>
          {task.description}
        </p>
        <p>
          <span className="text-gray-500 font-semibold mr-2">Status:</span>
          <Badge size={"2"} color={task.isCompleted ? "green" : "red"}>
            {task.isCompleted ? "Completed" : "Pending"}
          </Badge>
        </p>
        <p>
          {" "}
          <span className="text-gray-500 font-semibold mr-2">Created At:</span>
          {task.createdAt.toISOString().split("T")[0]}
        </p>
        {!task.isCompleted && (
          <TaskButton isCompleted={task.isCompleted} taskId={task.id} />
        )}
      </div>
    );
};

export default TaskDetailsPage;
