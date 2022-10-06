import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { DefaultLayout } from "../../layouts";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { ContinueShopping, CartControls } from "../../components/cart";
import { Loader } from "../../components/common";
import { ProductRating } from "../../components/catalog";
import { getCurrency } from "../../utils";

const Product = () => {
    const router = useRouter();
    const { pid } = router.query;

    const [product, setProduct] = useState({});
    const [productTitle, setProductTitle] = useState('Product page');
    const [productLoading, setProductLoading] = useState(true);

    useEffect(() => {
        setProductLoading(true);

        if (pid) {
            fetch(`${API_URL}/products/${pid}`)
                .then(res => res.json())
                .then(json => {
                    setProductLoading(false);

                    setProduct(json);
                    setProductTitle(json.title);
                })
                .catch((e) => {
                    // Notification instead of this log
                    console.log(e);
                });
        }
    }, [pid]);

    const { title, image, rating = {}, description, price, category } = product

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
                    {productLoading ? (
                        <Loader/>
                    ) : (
                        <div className="flex w-full gap-12">
                            <div className="w-full lg:w-1/2">
                                <Image layout="responsive" width="500" height="500"
                                       src={image}
                                       alt={title}
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <header className="mb-12">
                                    <h1 className="mb-3 uppercase text-2xl">{title}</h1>

                                    <ProductRating
                                        rating={rating}
                                        showReviewers={true}
                                    />
                                </header>

                                <p className="my-6">
                                    {description}
                                </p>

                                <p className="my-6 text-3xl text-black">
                                    {getCurrency(price)}
                                </p>

                                <p className="my-6">
                                    <b>Category</b>: {category}
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
