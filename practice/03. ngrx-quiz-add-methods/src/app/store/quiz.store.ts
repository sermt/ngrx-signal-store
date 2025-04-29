import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialQuizSlice } from './quiz.slice';
import { computed, effect } from '@angular/core';
import { addQuestion, resetQuiz } from './quiz.updaters';
import { getCorrectAnswersCount } from './quiz.helpers';

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState(initialQuizSlice),
  withComputed((store) => {
    const currentQuestionIndex = computed(() => store.answers().length);
    const isDone = computed(
      () => store.answers().length === store.questions().length
    );
    const currentQuestion = computed(
      () => store.questions()[currentQuestionIndex()]
    );
    const questionsCount = computed(() => store.questions().length);
    const correctQuestionsCount = computed(() =>
      getCorrectAnswersCount(store.answers(), store.questions())
    );

    return {
      currentQuestionIndex,
      isDone,
      currentQuestion,
      correctQuestionsCount,
      questionsCount,
    };
  }),
  withMethods((store) => ({
    addQuestion: (index: number) => {
      patchState(store, addQuestion(index));
    },
    resetQuiz: () => {
      patchState(store, resetQuiz());
    },
  })),
  withHooks((store) => ({
    onInit: () => {
      const savedState = localStorage.getItem('quizState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        patchState(store, parsedState);
      }
      effect(() => {
        const state = getState(store);
        const stateJSON = JSON.stringify(state);
        localStorage.setItem('quizState', stateJSON);
      });
    },
  }))
);
