import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateTodo } from "@/stores/todo";

export default function TodoEditor() {
  const [content, setContent] = useState("");
  const createTodoAction = useCreateTodo();

  const handleAddTodo = () => {
    if (content.trim() === "") return;

    createTodoAction(new Date().getTime(), content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요..."
      />
      <Button onClick={handleAddTodo}>추가</Button>
    </div>
  );
}
