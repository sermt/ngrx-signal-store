import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { initialSomeSlice } from './some.slice';
import { computed, inject } from '@angular/core';
import * as updaters from './some.updaters';
import { SomeService } from '../services/some.service';
export const SomeStore = signalStore(
    withState(initialSomeSlice), 
    withComputed(store => {
        return {
            isLarge: computed(() => store.someValue() > 100)
        }
    }), 
    withMethods(store => ({
        increment: () => patchState(store, updaters.increment()),
        decrement: () => patchState(store, updaters.decrement())        
    })), 
    withHooks(store => ({
        onInit: () => 
            console.log('SomeStore initialized'), 
    }))
);



