import { CartItemVm } from '../components/cart/view-model/cart-item.vm';
import { ProductItemVm } from '../components/items-list/view-model/product-item.vm';
import { Product } from '../models/product.model';
import { CartVM, ProductListVm } from './shop.vm';

export function buildProductListVm(
  products: Product[],
  searchWord: string,
  quantities: Record<string, number>
): ProductListVm {
  if (products.length === 0) {
    return { productItems: [] };
  }

  const productItems = buildProductItems(searchWord, products, quantities);

  return { productItems };
}

function buildProductItems(
  searchWord: string,
  products: Product[],
  quantities: Record<string, number>
): ProductItemVm[] {
  const word = searchWord.trim().toLowerCase();

  return products
    .filter((product) => product.name.toLowerCase().includes(word))
    .map((product) => ({ ...product, quantity: quantities[product.id] || 0 }));
}

export function buildCardView(
  products: Product[],
  quantities: Record<string, number>,
  taxRate: number,
  cartVisible: boolean
): CartVM {
  const items = buildCartItems(products, quantities);
  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  const isActive = items.length > 0;
  const isVisible = cartVisible;
  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  return {
    items,
    subtotal,
    tax,
    total,
    isActive,
    isVisible,
    itemsCount,
  };
}

function buildCartItems(
  products: Product[],
  quantities: Record<string, number>
): CartItemVm[] {
  return products
    .filter((product) => quantities[product.id])
    .map((product) => ({
      id: product.id,
      name: product.name,
      price: product.unitPrice,
      quantity: quantities[product.id],
      total: product.unitPrice * quantities[product.id],
    }));
}
