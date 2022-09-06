import React from "react";
import { TaskList } from "./TaskList";
import { TaskHandler } from "./TaskHandler";

export const Tasks = () => {
  return (
    <div className='flex flex-col items-center'>
      <TaskHandler />
      <TaskList />
    </div>
  );
};
