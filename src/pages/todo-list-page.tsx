import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";

import { useTodosData } from "@/hooks/queries/use-todos.data";

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>에러발생: {error.message}</div>;
  if (isLoading) return <div>로딩 중 입니다....</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List Page</h1>
      <TodoEditor />
      {todos?.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}
