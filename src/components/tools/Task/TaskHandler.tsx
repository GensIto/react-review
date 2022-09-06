import { useState } from "react";
import { useStore } from "../../../store";

export const TaskHandler = () => {
  const [title, setTitle] = useState("");
  const addTask = useStore((state) => state.addTask);

  return (
    <div className='flex gap-2'>
      <input
        className='font-mono border p-1'
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        placeholder='add task ?'
      />
      <button
        onClick={(e) => {
          setTitle("");
          addTask(title);
        }}>
        addTask
      </button>
    </div>
  );
};
