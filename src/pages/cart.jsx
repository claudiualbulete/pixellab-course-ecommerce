import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import { BackToShop, CartCheckout, CartControls, CartGrid } from "../components/cart";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { Loader } from "../components/common";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(false);

    useEffect(() => {
        setProductsLoading(true);
        fetch(`${API_URL}/products?limit=3`)
            .then(res => res.json())
            .then(json => {
                setProductsLoading(false);

                setProducts(json)
            })
            .catch((e) => {
                // Notification instead of this log
                console.log(e);
            });
    }, []);

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
                    <BackToShop/>

                    <div className="flex">
                        <CartControls/>
                    </div>
                </section>

                <div className="flex my-16">
                    {productsLoading ? (
                        <Loader/>
                    ) : (
                        <div className="flex flex-col lg:flex-row w-full justify-between gap-6">
                            <div className="w-full lg:w-3/4">
                                <CartGrid products={products}/>
                            </div>

                            <div className="w-full lg:w-1/4">
                                <CartCheckout products={products}/>
                            </div>
                        </div>
                    )}
                </div>
            </DefaultLayout>
        </>
    )
}

export default Cart;
