import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { Input } from "./components/ui/input";
import { Toaster, toast } from "sonner";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChefHat } from "lucide-react";

function App() {
  const isActive = false;

  return (
    <div className="p-5">
      <Toaster />
      <ChefHat className="h-4 w-4" />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>다이얼로그 헤더 제목</DialogTitle>
            <DialogDescription>다이얼로그 설명</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"outline"}>닫기</Button>
            </DialogClose>
            <Button type="submit">저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button>open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="grid gap-4">
            <div>
              <h3 className="text-sm font-semibold">Dimensions</h3>
              <p className="text-muted-foreground">
                Set the dimensions for the layer
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label>Width</label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label>Max. width</label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label>Height</label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label>Max. height</label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Carousel className="mx-auto max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <img src="https://picsum.photos/200/300" alt="Image 1" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <img src="https://picsum.photos/200/300" alt="Image 2" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <img src="https://picsum.photos/200/300" alt="Image 3" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <img src="https://picsum.photos/200/300" alt="Image 4" />
          </CarouselItem>
        </CarouselContent>

        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <Input placeholder="shadcn input" />

      <Button
        onClick={() =>
          toast("hello", { position: "top-center", duration: 500 })
        }
      >
        shadcn button
      </Button>
      <Button variant="destructive">destructive shadcn button</Button>
      <Button variant="ghost">ghost shadcn button</Button>
      <Button variant={"outline"}>outline shadcn button</Button>
      <Button variant={"secondary"}>secondary shadcn button</Button>
      <Button variant={"link"}>link shadcn button</Button>

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
