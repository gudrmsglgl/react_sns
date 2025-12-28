import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "@/api/delete-todo";
import { useQueryClient } from "@tanstack/react-query";
import type { Todo } from "@/types";
import { QUERY_KEYS } from "@/lib/constants";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((todo) => todo.id !== deletedTodo.id);
      });
    },
  });
}
