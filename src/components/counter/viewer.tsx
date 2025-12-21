import { useCount } from "@/stores/counter";

export default function CounterViewer() {
  const count = useCount();
  return <div>{`Count: ${count}`}</div>;
}
