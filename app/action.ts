"use server";
import prisma from "@/lib/prisma";
import { createTaskSchema } from "./schema";
import { redirect } from "next/navigation";

export const createTask = async (prevState: unknown, formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const task = { title, description };
  const { success, data, error } = createTaskSchema.safeParse(task);
  if (!success) return;
  await prisma.task.create({ data });
  redirect("/");
};
export const markTaskAsComplete = async (id: string) => {
  await prisma.task.update({ where: { id }, data: { isCompleted: true } });
  redirect("/");
};
