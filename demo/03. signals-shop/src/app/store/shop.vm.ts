import { CartItemVm } from "../features/cart/view-model/cart-item.vm";
import { ProductItemVm } from "../features/product-list/view-model/product-item.vm";

export interface ShopVm {
    readonly isCartActive: boolean;
    readonly isCartVisible: boolean;
    readonly itemsCount: number;
}

export interface ProductListVm {
    readonly productItems: ProductItemVm[];
}


export interface CartVm {
    readonly items: CartItemVm[];
    readonly subtotal: number;
    readonly tax: number;
    readonly total: number;
    readonly itemsCount: number;
    readonly isActive: boolean;
    readonly isVisible: boolean;
    readonly canCheckout: boolean;

}