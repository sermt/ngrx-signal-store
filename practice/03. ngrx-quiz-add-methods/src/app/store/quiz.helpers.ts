import { Question } from '../models/question.model';

export function getCorrectAnswersCount(
  answers: number[],
  questions: Question[]
): number {
  let res = 0;

  for (let i = 0; i < answers.length; i++) {
    if (questions.length > i && questions[i].correctIndex === answers[i]) {
      res++;
    }
  }

  return res;
}
