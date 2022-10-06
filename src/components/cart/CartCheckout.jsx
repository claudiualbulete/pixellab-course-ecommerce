import { useEffect, useState } from "react";
import { getCurrency } from "../../utils";
import { CartCheckoutSection } from "./";

/**
 * Calculate the total from all the products inside the cart
 *
 * @param {Object[]} products
 * @returns {number}
 */
const calculateSubtotal = (products) => {
    return products.reduce((total, product) => {
        if (product.price) {
            total += parseInt(product.price);
        }

        return total;
    }, 0);
}

/**
 * Add the shipping to the subtotal price
 *
 * @param {number} subtotal
 * @param {string} shippingMethod
 * @returns {number}
 */
const calculateTotal = (subtotal, shippingMethod) => {
    switch (shippingMethod) {
        // not in design :D
        case 'airplane':
            return subtotal + 149;
        case 'express':
            return subtotal + 49;
        default:
            return subtotal
    }
}

export const CartCheckout = ({ products }) => {
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [priceTotal, setPriceTotal] = useState(0);
    const [priceSubTotal, setPriceSubTotal] = useState(0);

    useEffect(() => {
        const subtotal = calculateSubtotal(products);
        const total = calculateTotal(subtotal, shippingMethod);

        setPriceSubTotal(subtotal);
        setPriceTotal(total);
    }, [products, shippingMethod]);

    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    return (
        <section className="w-full">
            <header className="bg-gray-200 py-2 px-4">Cart Totals</header>

            <CartCheckoutSection name="Subtotal">
                <p className="text-gray-400">{getCurrency(priceSubTotal)}</p>
            </CartCheckoutSection>

            <CartCheckoutSection name="Shipping">
                <ul>
                    <li className="flex items-center">
                        <input type="checkbox" id="standard" className="mr-3"
                               checked={shippingMethod === 'standard'}
                               onChange={() => setShippingMethod('standard')}
                        />

                        <label htmlFor="standard">Standard (Free)</label>
                    </li>

                    <li className="flex items-center">
                        <input type="checkbox" id="express" className="mr-3"
                               checked={shippingMethod === 'express'}
                               onChange={() => setShippingMethod('express')}
                        />

                        <label htmlFor="express">Express ({getCurrency(49)})</label>
                    </li>
                </ul>
            </CartCheckoutSection>

            <CartCheckoutSection name="Total">
                <p className="text-2xl">{getCurrency(priceTotal)}</p>
            </CartCheckoutSection>

            <button className="mt-6 bg-black text-white px-6 py-3 uppercase w-full">Proceed to checkout</button>
        </section>
    )
}
