import CounterViewer from "@/components/counter/viewer";
import CounterController from "@/components/counter/controller";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter Page</h1>
      <br />
      <CounterViewer />
      <br />
      <CounterController />
    </div>
  );
}
