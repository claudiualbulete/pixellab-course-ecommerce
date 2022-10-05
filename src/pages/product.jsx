import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { BackToShop, CartControls } from "../components/cart";
import { Loader } from "../components/common";
import Link from "next/link";
import Image from "next/image";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [productLoading, setProductLoading] = useState(false);

    useEffect(() => {
        setProductLoading(true);
        fetch(`${API_URL}/products/1`)
            .then(res => res.json())
            .then(json => {
                setProductLoading(false);

                setProduct(json)
            })
            .catch((e) => {
                // Notification instead of this log
                console.log(e);
            });
    }, []);

    if (!product) {
        return false;
    }

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
                    {productLoading ? (
                        <Loader/>
                    ) : (
                        <div className="flex gap-12">
                            <Image src={product.image} alt={product.title} layout="intrinsic" width="500"
                                   height="500"/>

                            <div>
                                <p className="mb-3">
                                    <b>Title</b>: {product.title}
                                </p>

                                <p className="mb-3">
                                    <b>Description</b>: {product.description}
                                </p>

                                <p className="mb-3">
                                    <b>Price</b>: {product.price}
                                </p>

                                <p className="mb-3">
                                    <b>Category</b>: {product.category}
                                </p>

                                <p className="mb-3">
                                    <b>Rating</b>: {product?.rating?.rate} <b>from</b> {product?.rating?.count} reviews
                                </p>

                                <Link href="/cart">
                                    <button className="bg-black text-white px-6 py-3 uppercase">Add to Cart (Goes to cart page for now)</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </DefaultLayout>
        </>
    )
}

export default Product;
