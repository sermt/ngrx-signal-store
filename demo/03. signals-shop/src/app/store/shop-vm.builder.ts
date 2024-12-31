import { CartItemVm } from "../features/cart/view-model/cart-item.vm";
import { CartQuantities } from "../models/cart-quantities.model";
import { Product } from "../models/product.model";
import { CartVm, ProductListVm, ShopVm } from "./shop.vm";

export function buildShopVm(
    quantities: CartQuantities,
    cartVisible: boolean
): ShopVm {
    const itemPairs = Object.entries(quantities);
    const itemsCount = itemPairs.length;
    const isCartActive = itemsCount > 0;
    const isCartVisible = cartVisible;

    return {
        isCartActive, 
        isCartVisible, 
        itemsCount
    }
}

