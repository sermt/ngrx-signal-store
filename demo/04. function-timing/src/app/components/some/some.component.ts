import { Component, inject } from '@angular/core';
import { SomeStore } from '../../store/some.store';

@Component({
  selector: 'app-some',
  imports: [],
  templateUrl: './some.component.html',
  styleUrl: './some.component.scss', 
  providers: [SomeStore]
})
export class SomeComponent {
  readonly store = inject(SomeStore);

}
