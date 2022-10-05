import { useState } from "react";

export const CartCheckout = ({ products }) => {
    const [shippingMethod, setShippingMethod] = useState('standard');

    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    const total = products.reduce((total, product) => {
        if (product.price) {
            total += parseInt(product.price);
        }

        return total;
    }, 0)

    return (
        <section>
            <header>Cart Totals</header>
            <div>Subtotal</div>
            <div>Shipping</div>
            <div>Total : {total}</div>
        </section>
    )
}
