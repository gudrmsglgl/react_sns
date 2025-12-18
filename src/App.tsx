import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

function App() {
  const isActive = false;

  return (
    <div>
      <Button>shadcn button</Button>
      <div
        className={cn(
          "w-10 text-[30px]",
          isActive ? "text-green-500" : "text-red-500",
        )}
      >
        isActive
      </div>
      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
