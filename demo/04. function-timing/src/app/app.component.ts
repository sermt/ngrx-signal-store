import { Component, signal } from '@angular/core';
import { SomeComponent } from "./components/some/some.component";

@Component({
  selector: 'app-root',
  imports: [SomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly showComponent = signal(false);

  toggleComponent() {
    this.showComponent.update(s => !s);
  }
}
