import { useParams } from "react-router";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";

export default function TodoDetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useTodoDataById(String(id));

  if (error) return <div>에러발생: {error.message}</div>;
  if (isLoading) return <div>로딩 중 입니다....</div>;

  return <div>{data?.content}</div>;
}
