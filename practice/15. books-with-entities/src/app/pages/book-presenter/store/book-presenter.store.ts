import { patchState, signalMethod, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { initialBookPresenterSlice } from './book-presenter.slice';
import { computed } from '@angular/core';
import { BOOKS_COLLECTION } from '../../../data/books-collection';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { entityConfig, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { Book } from '../../../models/book.model';


export const BookPresenterStore = signalStore(
    withState(initialBookPresenterSlice), 
    withComputed(store => ({
        book: computed(() => BOOKS_COLLECTION[store.id()])
    })), 
    withMethods(store => ({
        setBookId: signalMethod<number>(id => 
            patchState(store, { id })), 
    })), 
    withDevtools('book-presenter'), 
)