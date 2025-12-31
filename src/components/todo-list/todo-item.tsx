import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useUpdateTodoMutation } from "@/hooks/queries/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/queries/use-delete-todo-mutation";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("Todo not found");

  const { content, isDone } = todo;

  const { mutate: updateTodoMutation } = useUpdateTodoMutation();
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
