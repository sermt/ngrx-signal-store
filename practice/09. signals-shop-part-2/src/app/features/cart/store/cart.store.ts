import {
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { initialCartSlice } from './cart.slice';
import { computed, inject } from '@angular/core';
import { ShopStore } from '../../../store/shop.store';
import { buildCartVm } from './cart.vm-builder';
import { incrementQuantity } from '../../../store/shop.updaters';

export const CartStore = signalStore(
  withState(initialCartSlice),
  withProps((store) => ({
    _shopStore: inject(ShopStore),
  })),
  withMethods((store) => ({
    checkoutCart: store._shopStore.checkoutCart,
    incrementQuantity: store._shopStore.incrementQuantity,
    decrementQuantity: store._shopStore.decrementQuantity,
  })),
  withComputed((store) => ({
    vm: computed(() =>
      buildCartVm(
        store._shopStore.products(),
        store._shopStore.cartQuantities(),
        store.taxRate(),
        store._shopStore.cartVisible()
      )
    ),
  }))
);
