"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React, { useActionState, useEffect } from "react";
import { createTask } from "../../action";
import { toast, Toaster } from "sonner";

const NewTaskPage = () => {
  const [state, action, isPending] = useActionState(createTask, undefined);
  useEffect(() => {
    if (state) {
      if (state.errors.length > 0) toast(state.errors[0]);
    }
  }, [state]);

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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(88.5% 0.062 18.334)",
            color: "oklch(63.7% 0.237 25.331)",
          },
        }}
      />
    </div>
  );
};

export default NewTaskPage;
