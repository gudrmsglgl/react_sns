import { useMutation } from "@tanstack/react-query";
import { updateTodo } from "@/api/update-todo";
import { useQueryClient } from "@tanstack/react-query";
import type { Todo } from "@/types";
import { QUERY_KEYS } from "@/lib/constants";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updatedTodo) => {
      queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.detail(updatedTodo.id),
      });

      const previousTodo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
      );

      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
        (prevTodo) => {
          if (!prevTodo) return;
          return { ...prevTodo, ...updatedTodo };
        },
      );

      return { previousTodo };
    },
    onError: (error, variables, context) => {
      if (context && context.previousTodo) {
        queryClient.setQueryData<Todo>(
          QUERY_KEYS.todo.detail(context.previousTodo.id),
          context.previousTodo,
        );
      }
    },
  });
}
