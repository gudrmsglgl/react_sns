import { useMutation } from "@tanstack/react-query";
import { updateTodo } from "@/api/update-todo";
import { useQueryClient } from "@tanstack/react-query";
import type { Todo } from "@/types";
import { QUERY_KEYS } from "@/lib/constants";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.todo.list });

      const previousTodos = queryClient.getQueryData<Todo[]>(
        QUERY_KEYS.todo.list,
      );

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo,
        );
      });

      return { previousTodos };
    },
    onError: (error, variables, context) => {
      if (context && context.previousTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.previousTodos,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todo.list });
    },
  });
}
