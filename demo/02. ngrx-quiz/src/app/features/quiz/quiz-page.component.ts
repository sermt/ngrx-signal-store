import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { DoneComponent } from './components/done/done.component';
import { FlagComponent } from '../../components/flag/flag.component';
import { AppStore } from '../../store/app.store';
import { QuizStore } from './store/quiz.store';

@Component({
  selector: 'app-quiz-page',
  imports: [SharedModule, QuestionPresenterComponent, ToolbarComponent, ProgressComponent, DoneComponent, FlagComponent],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.scss', 
  providers: [QuizStore]
})
export default class QuizPageComponent {
  readonly appStore = inject(AppStore);
  readonly store = inject(QuizStore);

}
