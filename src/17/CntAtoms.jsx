import { atom } from "jotai";

export const cntAtom = atom(0); //전역상태변수로 사용가능
export const cntAtom2 = atom((get)=>get(cntAtom)*2);