import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialShopSlice, PersistentShopSlice, ShopSlice } from './shop.slice';
import { buildCardView, buildProductListVm } from './shop-vm.builders';
import { computed, effect, Signal } from '@angular/core';
import {
  addToCart,
  checkoutCart,
  decrementQuantity,
  incrementQuantity,
  setSearchWord,
  viewCart,
} from './shop.updaters';

export const ShopStore = signalStore(
  { providedIn: 'root' },
  withState(initialShopSlice),
  withComputed((store) => ({
    productListVm: computed(() =>
      buildProductListVm(
        store.products(),
        store.searchWord(),
        store.cartQuantities()
      )
    ),
    cartVm: computed(() =>
      buildCardView(
        store.products(),
        store.cartQuantities(),
        store.taxRate(),
        store.cartVisible()
      )
    ),
  })),
  withMethods((state) => ({
    setSearchWord: (searchWord: string) => {
      patchState(state, setSearchWord(searchWord));
    },
    addToCart: (productId: string) => {
      patchState(state, addToCart(productId));
    },
    viewCart: () => {
      patchState(state, viewCart());
    },
    hideCart: () => {
      patchState(state, { cartVisible: false });
    },
    incrementQuantity: (productId: string) => {
      patchState(state, incrementQuantity(productId));
    },
    decrementQuantity: (productId: string) => {
      patchState(state, decrementQuantity(productId));
    },
    checkoutCart: () => {
      patchState(state, checkoutCart());
    },
  })),
  withHooks((store) => ({
    onInit: () => {
      const persistent: Signal<PersistentShopSlice> = computed(() => ({
        cartQuantities: store.cartQuantities(),
      }));

      const persistentData = localStorage.getItem('cartQuantities');

      if (persistentData) {
        const parsedData = JSON.parse(persistentData) as PersistentShopSlice;
        patchState(store, {
          cartQuantities: parsedData.cartQuantities,
        });
      }

      effect(() => {
        localStorage.setItem('cartQuantities', JSON.stringify(persistent()));
      });
    },
  }))
);
