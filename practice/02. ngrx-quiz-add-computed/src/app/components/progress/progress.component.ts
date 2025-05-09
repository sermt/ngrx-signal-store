import { Component, computed, input, Input, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-progress',
    imports: [SharedModule],
    templateUrl: './progress.component.html',
    styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  readonly value = signal(3);

  readonly max = signal(10);

  readonly ratio = computed(() => this.value() / this.max());

}
