import { PartialStateUpdater, Prettify } from "@ngrx/signals";
import { Observable } from "rxjs";

type Update<S extends object> = Partial<Prettify<S>> | PartialStateUpdater<Prettify<S>>;

export function withService<T, S extends object>(
    loader: () => Observable<T>, 
    updater: (date: T) => Update<S>) {

}