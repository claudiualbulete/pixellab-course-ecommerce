import { useContext, useEffect, useState } from "react";
import { getCurrency } from "../../utils";
import { CartCheckoutSection } from "./";
import { AppContext } from "../../pages/_app";

export const CartTotals = ({ products, priceTotal, priceSubtotal, setShippingPrice }) => {
    const [shippingMethod, setShippingMethod] = useState('standard');
    const { cart } = useContext(AppContext);

    const handleShippingChange = (shippingMethod) => {
        setShippingMethod(shippingMethod);
        setShippingPrice && setShippingPrice(value)
    }

    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    return (
        <section className="w-full">
            <header className="bg-gray-200 py-2 px-4">Cart Totals</header>

            <CartCheckoutSection name="Subtotal">
                <p className="text-gray-400">{getCurrency(priceSubtotal)}</p>
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

            <footer>
                <button className="mt-6 bg-black text-white px-6 py-3 uppercase w-full">Proceed to checkout</button>
            </footer>
        </section>
    )
}
