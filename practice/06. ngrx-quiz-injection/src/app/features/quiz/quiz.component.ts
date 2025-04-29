import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { DoneComponent } from './components/done/done.component';
import { FlagComponent } from '../../components/flag/flag.component';
import { QuizStore } from './store/quiz.store';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-quiz-page',
  imports: [
    SharedModule,
    QuestionPresenterComponent,
    ToolbarComponent,
    ProgressComponent,
    DoneComponent,
    FlagComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  providers: [QuizStore],
})
export default class QuizPageComponent {
  readonly store = inject(QuizStore);
  readonly appStore = inject(AppStore);
}
