import { PartialStateUpdater } from '@ngrx/signals';
import { ShopSlice } from './shop.slice';

export function setSearchWord(
  searchWord: string
): PartialStateUpdater<ShopSlice> {
  return (_) => {
    return {
      searchWord,
    };
  };
}

export function addToCart(productId: string): PartialStateUpdater<ShopSlice> {
  return (state: ShopSlice) => {
    const cartQuantities = { ...state.cartQuantities };
    cartQuantities[productId] = cartQuantities[productId] + 1 || 1;
    return {
      cartQuantities,
    };
  };
}

export function viewCart(): PartialStateUpdater<ShopSlice> {
  return () => ({
    cartVisible: true,
  });
}

export function hideCart(): PartialStateUpdater<ShopSlice> {
  return () => ({
    cartVisible: false,
  });
}

export function incrementQuantity(
  productId: string
): PartialStateUpdater<ShopSlice> {
  return addToCart(productId);
}

export function decrementQuantity(
  productId: string
): PartialStateUpdater<ShopSlice> {
  return (state: ShopSlice) => {
    const cartQuantities = { ...state.cartQuantities };
    const newQuantity = cartQuantities[productId] - 1 || 0;
    if (newQuantity > 0) {
      cartQuantities[productId] = newQuantity;
    } else {
      delete cartQuantities[productId];
    }
    return {
      cartQuantities,
    };
  };
}

export function checkoutCart(): PartialStateUpdater<ShopSlice> {
  return () => ({
    cartQuantities: {},
    cartVisible: false,
  });
}
