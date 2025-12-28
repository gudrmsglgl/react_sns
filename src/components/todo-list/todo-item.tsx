import { Button } from "@/components/ui/button";
import { useDeleteTodo } from "@/stores/todo";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { useUpdateTodoMutation } from "@/hooks/queries/use-update-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const deleteTodoAction = useDeleteTodo();

  const { mutate, isPending } = useUpdateTodoMutation();

  const handleUpdateTodo = () => {
    mutate({ id, isDone: !isDone });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex items-center gap-4">
        <input
          type={"checkbox"}
          checked={isDone}
          onChange={() => handleUpdateTodo()}
        />
        <Link to={`/todo-list/${id}`}>{content}</Link>
      </div>

      <Button variant={"destructive"} onClick={() => deleteTodoAction(id)}>
        삭제
      </Button>
    </div>
  );
}
