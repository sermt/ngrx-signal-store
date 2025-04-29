import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialQuizSlice } from './quiz.slice';
import { addAnswer, resetQuiz } from './quiz.updaters';

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState(initialQuizSlice),
  withComputed((state) => {
    const currentQuestionIndex = computed(() => state.answers().length);
    const currentQuestion = computed(
      () => state.questions()[currentQuestionIndex()]
    );
    const questionsCount = computed(() => state.questions().length);
    return {
      currentQuestionIndex,
      currentQuestion,
      questionsCount,
      isQuizCompleted: computed(
        () => state.answers().length === state.questions().length
      ),
    };
  }),
  withMethods((store) => ({
    addAnswer: (index: number) => {
      patchState(store, addAnswer(index));
    },
    resetQuiz: () => patchState(store, resetQuiz()),
  }))
);
