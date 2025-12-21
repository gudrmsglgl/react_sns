import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  count: number;
  actions: {
    increment: () => void;
    decrement: () => void;
  };
};

// 1. 기본 방식
// export const useCounterStore = create<Store>((set, get) => ({
//   count: 0,
//   increment: () => {
//     set((store) => ({
//       count: store.count + 1,
//     }));
//   },
//   decrement: () => {
//     set((store) => ({
//       count: store.count - 1,
//     }));
//   },
// }));

// 2. 액션 분리 방식
// export const useCounterStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increment: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrement: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

// 3. middleware 방식 사용 전
// const useCounterStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increment: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrement: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

const useCounterStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      count: 0,
      actions: {
        increment: () => {
          set((state) => {
            state.count += 1;
          });
        },
        decrement: () => {
          set((state) => {
            state.count -= 1;
          });
        },
      },
    })),
  ),
);

export const useCount = () => {
  const count = useCounterStore((store) => store.count);
  return count;
};

export const useIncrement = () => {
  const increment = useCounterStore((store) => store.actions.increment);
  return increment;
};

export const useDecrement = () => {
  const decrement = useCounterStore((store) => store.actions.decrement);
  return decrement;
};
