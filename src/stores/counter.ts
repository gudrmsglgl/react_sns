import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
} from "zustand/middleware";
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
  persist(
    subscribeWithSelector(
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
    ),
    {
      name: "counterState",
      partialize: (store) => ({ count: store.count }),
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

useCounterStore.subscribe(
  (state) => state.count,
  (count, prevCount) => {
    console.log("updated count", count);
    console.log("prev count", prevCount);

    const store = useCounterStore.getState();
  },
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
