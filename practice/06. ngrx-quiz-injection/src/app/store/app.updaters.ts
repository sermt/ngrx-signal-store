import { PartialStateUpdater } from '@ngrx/signals';
import { AppSlice } from './app.slice';

export function changeLenguage(index: number): PartialStateUpdater<AppSlice> {
  return (state) => {
    return {
      ...state,
      selectedLanguage: state.possibleLanguages[index],
    };
  };
}
