import { Button } from "@/components/ui/button";
import { useDeleteTodo } from "@/stores/todo";
import type { Todo } from "@/types";
import { Link } from "react-router";

export default function TodoItem({ id, content }: Todo) {
  const deleteTodoAction = useDeleteTodo();

  return (
    <div className="flex items-center justify-between border p-2">
      <Link to={`/todo-list/${id}`}>{content}</Link>
      <Button variant={"destructive"} onClick={() => deleteTodoAction(id)}>
        삭제
      </Button>
    </div>
  );
}
