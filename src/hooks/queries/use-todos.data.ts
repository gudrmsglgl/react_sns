import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "@/api/fetch-todos";

export function useTodosData() {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
  });
}
