import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { DefaultLayout } from "../../layouts";
import { useEffect, useState } from "react";
import { ContinueShopping, CartControls } from "../../components/cart";
import { Loader, Error } from "../../components/common";
import { ProductRating } from "../../components/catalog";
import { getCurrency } from "../../utils";
import { useProduct } from "../../hooks/use-product";

const Product = () => {
    const router = useRouter();
    const { pid } = router.query;

    const { product, status } = useProduct(pid);
    const [productTitle, setProductTitle] = useState('Product page');
    const [productLoading, setProductLoading] = useState(true);

    useEffect(() => {
        if (status !== '200') {
            setProductLoading(false);
        }
        if (product) {
            setProductLoading(false);
            setProductTitle(product.title);
        }
    }, [product, status]);

    return (
        <>
            <Head>
                <title>{productTitle}</title>
            </Head>

            <DefaultLayout>
                <section className="flex justify-between flex-wrap">
                    <ContinueShopping/>

                    <div className="flex">
                        <CartControls/>
                    </div>
                </section>

                <section className="flex my-16">
                    {productLoading && <Loader/>}
                    {status === '404' && <Error/>}
                    {product && (
                        <div className="flex flex-col lg:flex-row w-full gap-12">
                            <div className="w-full lg:w-1/2">
                                <Image width="400" height="400"
                                       objectFit="contain"
                                       src={product.image}
                                       alt={product.title}
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <header className="mb-12">
                                    <h1 className="mb-3 uppercase text-2xl">{product.title}</h1>

                                    <ProductRating
                                        rating={product.rating}
                                        showReviewers={true}
                                    />
                                </header>

                                <p className="my-6">
                                    {product.description}
                                </p>

                                <p className="my-6 text-3xl text-black">
                                    {getCurrency(product.price)}
                                </p>

                                <p className="my-6">
                                    <b>Category</b>: {product.category}
                                </p>

                                <footer className="mt-12">
                                    <Link href="/cart">
                                        <button className="bg-black text-white px-6 py-3 uppercase">
                                            Add to Cart (Goes to cart page for now)
                                        </button>
                                    </Link>
                                </footer>
                            </div>
                        </div>
                    )}
                </section>
            </DefaultLayout>
        </>
    )
}

export default Product;
