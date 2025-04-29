import { PartialStateUpdater } from '@ngrx/signals';
import { QuizSlice } from './quiz.slice';

export function addQuestion(index: number): PartialStateUpdater<QuizSlice> {
  return (state: any) => ({
    answers: [...state.answers, index],
  });
}

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
  return (state: any) => ({
    answers: [],
  });
}
