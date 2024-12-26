import { PartialStateUpdater } from "@ngrx/signals";
import { SomeSlice } from "./some.slice";

export function increment(): PartialStateUpdater<SomeSlice> {
    return state => ({ someValue: state.someValue + 1 });
}

export function decrement(): PartialStateUpdater<SomeSlice> {
    return state => ({ someValue: state.someValue - 1 });
}