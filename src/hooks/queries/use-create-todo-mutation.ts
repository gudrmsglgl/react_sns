import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
