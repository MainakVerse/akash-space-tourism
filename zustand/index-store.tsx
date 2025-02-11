import { create } from "zustand";

interface indexState{
    index : number
    crew : number
    tech : number
}

const useStore = create<indexState>((set) => ({
    index: 0,
    crew: 0,
    tech: 0
    
}))

export default useStore;

