import prisma from "@/lib/prisma";
import { Badge, Table } from "@radix-ui/themes";
import React from "react";

const TaskTable = async () => {
  const tasks = await prisma.task.findMany();

  return (
    <Table.Root className="mt-5">
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
          <Table.Row>
            <Table.RowHeaderCell>#{task.id.split("-")[0]}</Table.RowHeaderCell>
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
