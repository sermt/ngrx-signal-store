import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-busy',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './busy.component.html',
  styleUrl: './busy.component.scss'
})
export class BusyComponent {

}
