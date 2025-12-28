import { Button } from "@/components/ui/button";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { useUpdateTodoMutation } from "@/hooks/queries/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/queries/use-delete-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: updateTodoMutation, isPending: isUpdating } =
    useUpdateTodoMutation();
  const { mutate: deleteTodoMutation, isPending: isDeleting } =
    useDeleteTodoMutation();

  const handleUpdateTodo = () => {
    updateTodoMutation({ id, isDone: !isDone });
  };
  const handleDeleteTodo = () => {
    deleteTodoMutation(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex items-center gap-4">
        <input
          type={"checkbox"}
          checked={isDone}
          disabled={isDeleting}
          onChange={() => handleUpdateTodo()}
        />
        <Link to={`/todo-list/${id}`}>{content}</Link>
      </div>

      <Button
        disabled={isDeleting}
        variant={"destructive"}
        onClick={() => handleDeleteTodo()}
      >
        삭제
      </Button>
    </div>
  );
}
