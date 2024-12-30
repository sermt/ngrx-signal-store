import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { DoneComponent } from "./features/quiz/components/done/done.component";
import { QuizStore } from './features/quiz/store/quiz.store';
import { QuestionPresenterComponent } from './features/quiz/components/question-presenter/question-presenter.component';
import { FlagComponent } from "./components/flag/flag.component";

@Component({
    selector: 'app-root',
    imports: [SharedModule, QuestionPresenterComponent, ToolbarComponent, ProgressComponent, DoneComponent, FlagComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss', 
})
export class AppComponent {
  readonly store = inject(QuizStore);
}
