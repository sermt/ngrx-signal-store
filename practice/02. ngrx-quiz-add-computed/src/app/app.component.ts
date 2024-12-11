import { Component, inject } from '@angular/core';
import { QuestionPresenterComponent } from "./components/question-presenter/question-presenter.component";
import { SharedModule } from './shared.module';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { QuizStore } from './store/quiz.store';

@Component({
    selector: 'app-root',
    imports: [SharedModule, QuestionPresenterComponent, ToolbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss', 
})
export class AppComponent {
  readonly store = inject(QuizStore);
}
