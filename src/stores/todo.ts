import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { combine } from "zustand/middleware";
import type { Todo } from "@/types";

const initialState: { todos: Todo[] } = {
  todos: [],
};

const useTodoStore = create(
  immer(
    combine(initialState, (set, get) => ({
      actions: {
        createTodo: (id: number, content: string) => {
          set((state) => {
            state.todos.push({ id, content });
          });
        },
        deleteTodo: (id: number) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== id);
          });
        },
      },
    })),
  ),
);

export const useTodos = () => {
  const todos = useTodoStore((store) => store.todos);
  return todos;
};

export const useCreateTodo = () => {
  const createTodoAction = useTodoStore((store) => store.actions.createTodo);
  return createTodoAction;
};

export const useDeleteTodo = () => {
  const deleteTodoAction = useTodoStore((store) => store.actions.deleteTodo);
  return deleteTodoAction;
};
