import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import { ContinueShopping, CartTotals, CartControls, CartGrid } from "../components/cart";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../components/common";
import { useProducts } from "../hooks/use-products";
import { AppContext } from "./_app";

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

const Cart = () => {
    const { products } = useContext(AppContext);
    const [pageLoading, setPageLoading] = useState(true);
    const [priceTotal, setPriceTotal] = useState(0);
    const [priceShipping, setPriceShipping] = useState(0);
    const [priceSubtotal, setPriceSubtotal] = useState(0);

    useEffect(() => {
        if (products) {
            setPageLoading(false);

            const subtotal = calculateSubtotal(products);
            const total = subtotal + priceShipping;

            setPriceSubtotal(subtotal);
            setPriceTotal(total);
        }
    }, [products, priceShipping]);

    if (!products) {
        return false;
    }

    return (
        <>
            <Head>
                <title>Cart!</title>
            </Head>

            <DefaultLayout>
                <section className="flex justify-between flex-wrap">
                    <ContinueShopping/>

                    <div className="flex">
                        <CartControls/>
                    </div>
                </section>

                <div className="flex my-16">
                    {pageLoading ? (
                        <Loader/>
                    ) : (
                        <div className="grid grid-cols-12 gap-8">
                            <div className="w-full col-span-8">
                                <CartGrid products={products}/>
                            </div>

                            <div className="w-full col-span-4">
                                <CartTotals products={products} priceTotal={priceTotal}
                                            priceSubtotal={priceSubtotal}
                                            setShippingPrice={setPriceShipping}/>
                            </div>
                        </div>
                    )}
                </div>
            </DefaultLayout>
        </>
    )
}

export default Cart;
