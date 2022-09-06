import create from "zustand";
import { Task } from "../types";

type State = {
  // count up
  count: number;
  incrementCount: () => void;
  restCount: () => void;
  // task
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number) => void;
};

export const useStore = create<State>((set) => ({
  // count up
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  restCount: () => set((state) => ({ count: (state.count = 0) })),
  // task
  tasks: [],
  addTask: (title: string) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Math.floor(Math.random() * 10000000),
          title,
          status: false,
        },
      ],
    }));
  },
  deleteTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  updateTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      ),
    }));
  },
}));
