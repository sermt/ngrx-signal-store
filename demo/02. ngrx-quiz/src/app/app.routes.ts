import { Route } from "@angular/router";

export const routes: Route[] = [
    { path: '', redirectTo: 'quiz', pathMatch: 'full' },
    { path: 'quiz', loadComponent: () => import('./features/quiz/quiz-page.component')}
]