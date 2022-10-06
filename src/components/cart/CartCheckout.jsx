import { useEffect, useState } from "react";

export const CartCheckoutSection = ({ name, children }) => {
    return (
        <div className="flex border-b-2 border-slate-100 border-solid w-full">
            <div className="w-1/3 p-4">
                {name}
            </div>

            <div className="w-2/3 p-4">
                {children}
            </div>
        </div>
    )
}
export const CartCheckout = ({ products }) => {
    // @todo use this
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [priceTotal, setPriceTotal] = useState('');

    useEffect(() => {
        const total = products.reduce((total, product) => {
            if (product.price) {
                total += parseInt(product.price);
            }

            return total;
        }, 0)

        setPriceTotal(String(total));
    }, [products]);

    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }



    return (
        <section className="w-full">
            <header className="bg-gray-200 py-2 px-4">Cart Totals</header>

            <CartCheckoutSection name="Subtotal">
                <p className="text-gray-400">${priceTotal.padEnd(2, '00')}</p>
            </CartCheckoutSection>

            <CartCheckoutSection name="Shipping">
                {priceTotal}
            </CartCheckoutSection>

            <CartCheckoutSection name="Total">
                <p className="text-2xl">${priceTotal.padEnd(2, '00')}</p>

            </CartCheckoutSection>

            <button className="mt-6 bg-black text-white px-6 py-3 uppercase w-full">Proceed to checkout</button>
        </section>
    )
}
