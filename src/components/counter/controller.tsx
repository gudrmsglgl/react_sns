import { useIncrement, useDecrement } from "@/stores/counter";
import { Button } from "../ui/button";

export default function CounterController() {
  const increment = useIncrement();
  const decrement = useDecrement();

  return (
    <div>
      <Button variant="outline" onClick={increment}>
        +
      </Button>
      <Button variant="default" onClick={decrement}>
        -
      </Button>
    </div>
  );
}
