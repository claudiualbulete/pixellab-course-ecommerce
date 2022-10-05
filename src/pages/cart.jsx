import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import { BackToCart, CartCheckout, CartControls, CartGrid } from "../components/cart";
import { useEffect, useState } from "react";

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = [];
        for (let i = 1; i <= 2; i++) {
            products.push({
                id: Math.random(),
                name: 'prod name',
                price: '200'
            });
        }

        setProducts(products);
    }, []);

    return (
        <>
            <Head>
                <title>Cart!</title>
            </Head>

            <DefaultLayout>
                <section className="flex justify-between flex-wrap">
                    <BackToCart/>

                    <div className="flex">
                        <CartControls/>
                    </div>
                </section>

                <div className="flex my-16">
                    <CartGrid products={products}/>

                    <CartCheckout products={products}/>
                </div>
            </DefaultLayout>
        </>
    )
}

export default Cart;
