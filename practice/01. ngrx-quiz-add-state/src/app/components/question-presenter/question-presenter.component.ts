import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { Question } from '../../models/question.model';
import { SharedModule } from '../../shared.module';
import { FormControl, Validators } from '@angular/forms';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-question-presenter',
  imports: [SharedModule],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss',
})
export class QuestionPresenterComponent {
  readonly quizStore = inject(QuizStore);
  readonly question = this.quizStore.currentQuestion;
}
