import { create } from "zustand";

export const useCnt = create((set)=>({//object영역: 키,값
    cnt: 0,
    increase: () => set((state)=> ({cnt : state.cnt +1})),//set함수(함수)=>({object 구현})
    decrease: () => set((state)=> ({cnt : state.cnt +1})),
    reset: ()=> set({cnt: 0}),
}));