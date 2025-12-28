import type { Todo } from "@/types";
import { API_URL } from "@/lib/constants";

export async function updateTodo(updateTodo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${updateTodo.id}`, {
    method: "PATCH",
    body: JSON.stringify(updateTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  const data: Todo = await response.json();
  return data;
}
