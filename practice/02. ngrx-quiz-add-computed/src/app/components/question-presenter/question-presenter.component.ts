import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuizStore } from '../../store/quiz.store';
import { Question } from '../../models/question.model';

@Component({
    selector: 'app-question-presenter',
    imports: [SharedModule],
    templateUrl: './question-presenter.component.html',
    styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  readonly store = inject(QuizStore);
  readonly question = signal<Question>({
    caption: ['Red', 'Green', 'Blue'],
    answers: ['Brown', 'Yellow', 'Purple', 'White'],
    correctIndex: 3
  });
}
