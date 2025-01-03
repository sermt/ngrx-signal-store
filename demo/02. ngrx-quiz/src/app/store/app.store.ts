import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from "@ngrx/signals";
import { initialAppSlice } from "./app.slice";
import { changeLanguage, resetLanguages, setBusy, setDictionary } from "./app.updaters";
import { computed, inject } from "@angular/core";
import { DICTIONARIES_TOKEN } from "../tokens/dictionaries.token";
import { getDictionary } from "./app.helpers";
import { DictionariesService } from "../services/dictionaries.service";
import { firstValueFrom } from "rxjs";

export const AppStore = signalStore(
    {providedIn: 'root'}, 
    withState(initialAppSlice), 
    withProps(_ => {
        const _dictionariesService = inject(DictionariesService);
        const _languages = _dictionariesService.languages;

        return {
            _dictionariesService,
            _languages
        }
    }),    
    withMethods(store => ({
            changeLanguage: async () => {
                patchState(store, changeLanguage(store._languages), setBusy(true));
                const dictionary = await firstValueFrom(
                    store._dictionariesService.getDictionaryWithDelay(store.selectedLanguage()));
                patchState(store, setDictionary(dictionary), setBusy(false));
            },
            _resetLanguages: () => patchState(store, resetLanguages(store._languages)) 
        })
    ), 
    withHooks(store => ({
        onInit: () => store._resetLanguages()
    }))
)