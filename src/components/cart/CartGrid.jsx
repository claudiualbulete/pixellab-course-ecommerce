import { CartProduct, CartVoucher } from "./";
import { AppContext } from "../../pages/_app";
import { useContext, useEffect, useState } from "react";
import state from "../../state";

/**
 * Add the shipping to the subtotal price
 *
 * @param {number} subtotal
 * @param {string} shippingMethod
 * @returns {number}
 */
const getShippingPrice = (subtotal, shippingMethod) => {
    switch (shippingMethod) {
        // not in design :D
        case 'airplane':
            return 149;
        case 'express':
            return 49;
        default:
            return 0
    }
}

export const CartGrid = () => {
    const { cart, products } = useContext(AppContext);
    console.log('context', state);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (cart && products) {
            const items = cart.products.map((item) => {
                const prod = products.find((product) => product.id === item.productId)

                return {
                    ...prod,
                    quantity: item.quantity
                }
            });

            setCartItems(items);
        }
    }, [cart, products])

    const handleQuantityUpdate = () => {
        state.setQuantity(2, 2);
    }
    const handleUpdateCart = () => {
        console.log('cart will be updated');
    }
    if (cartItems.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    return (
        <>
            <header className="border-b flex gap-2 text-gray-400 text-center">
                <p className="w-full grow shrink p-2">Product</p>
                <p className="w-20 grow-0 shrink-0 p-2">Price</p>
                <p className="w-20 grow-0 shrink-0 p-2">Quantity</p>
                <p className="w-20 grow-0 shrink-0 p-2">Total</p>
            </header>

            <ul className="w-full mb-6">
                {cartItems.map(product => (
                    <li key={product.id}>
                        <CartProduct product={product} updateQuantity={handleQuantityUpdate}/>
                    </li>
                ))}
            </ul>

            <footer className="flex flex-col md:flex-row justify-between">
                <CartVoucher/>

                <button className="bg-gray-400 text-white px-6 py-3" onClick={handleUpdateCart}>Update Cart</button>
            </footer>
        </>

    )
}
