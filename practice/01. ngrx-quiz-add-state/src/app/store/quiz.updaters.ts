import { PartialStateUpdater } from '@ngrx/signals';
import { initialQuizSlice, QuizSlice } from './quiz.slice';

export function addAnswer(index: number): PartialStateUpdater<QuizSlice> {
  return (state) => ({
    ...state,
    answers: [...state.answers, index],
  });
}

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
  return (_) => ({
    answers: [],
  });
}
