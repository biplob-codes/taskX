"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React, { useActionState } from "react";
import { createTask } from "../action";

const NewTaskPage = () => {
  const [state, action, isPending] = useActionState(createTask, undefined);
  return (
    <div className="max-w-lg">
      <form action={action}>
        <TextField.Root placeholder="Title" className="mb-3" name="title" />
        <TextArea
          placeholder="Description"
          className="mb-5"
          name="description"
        />
        <Button loading={isPending} type="submit">
          Create Task
        </Button>
      </form>
    </div>
  );
};

export default NewTaskPage;
