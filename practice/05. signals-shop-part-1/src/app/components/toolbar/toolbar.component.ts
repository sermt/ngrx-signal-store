import { Component, computed, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';
import { ShopStore } from '../../store/shop.store';

@Component({
  selector: 'app-toolbar',
  imports: [SharedModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  host: {
    '(keydown.enter)': 'onEnter()',
  },
})
export class ToolbarComponent {
  readonly store = inject(ShopStore);
  readonly searchValue = signal('');

  readonly cartCount = signal(2);
  readonly cartActive = computed(() => this.cartCount() > 0);
}
