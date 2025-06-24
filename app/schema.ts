import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(1, "Title cannot be empty"),

  description: z
    .string({
      invalid_type_error: "Description must be a string",
    })
    .optional(),
});
