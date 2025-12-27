import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/queries/use-create-todo-mutation";

export default function TodoEditor() {
  const [content, setContent] = useState("");
  const { mutate, isPending } = useCreateTodoMutation();
  //const createTodoAction = useCreateTodo();

  const handleAddTodo = () => {
    if (content.trim() === "") return;

    mutate(content);
    //createTodoAction(new Date().getTime(), content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요..."
      />
      <Button disabled={isPending} onClick={handleAddTodo}>
        추가
      </Button>
    </div>
  );
}
