import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {
      //window.location.reload();
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todo.list });
    },
    onError: () => {},
  });
}
