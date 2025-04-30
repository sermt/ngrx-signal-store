import { ALL_PRODUCTS } from '../data/all-products';
import { Product } from '../models/product.model';

export interface ShopSlice {
  readonly products: Product[];

  readonly searchWord: string;

  readonly cartQuantities: Record<string, number>;

  readonly cartVisible: boolean;
}

export type PersistedShopSlice = Pick<ShopSlice, 'cartQuantities'>;

export const initialShopSlice: ShopSlice = {
  products: ALL_PRODUCTS,
  searchWord: '',
  cartQuantities: {},
  cartVisible: false,
};
