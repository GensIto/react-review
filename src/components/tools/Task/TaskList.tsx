import { useStore } from "../../../store";

export const TaskList = () => {
  const tasks = useStore((state) => state.tasks);
  const deleteTask = useStore((state) => state.deleteTask);
  const updateTask = useStore((state) => state.updateTask);
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id} className='flex gap-2'>
            <p>{task.title}</p>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}>
              deleteTask
            </button>
            <button
              onClick={() => {
                updateTask(task.id);
              }}>
              isDoneTask
            </button>
            <p>{task.status ? "done" : "doing"}</p>
          </li>
        );
      })}
    </ul>
  );
};
