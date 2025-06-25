import prisma from "@/lib/prisma";
import { Badge, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";
const TaskTable = async () => {
  const tasks = await prisma.task.findMany();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tasks.map((task) => (
          <Table.Row key={task.id}>
            <Table.RowHeaderCell className="underline">
              #<Link href={`/tasks/${task.id}`}>{task.id.split("-")[0]}</Link>
            </Table.RowHeaderCell>
            <Table.Cell>{task.title}</Table.Cell>
            <Table.Cell>
              <Badge size={"2"} color={task.isCompleted ? "green" : "red"}>
                {task.isCompleted ? "Completed" : "Pending"}
              </Badge>
            </Table.Cell>
            <Table.Cell>
              {task.createdAt.toISOString().split("T")[0]}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TaskTable;
