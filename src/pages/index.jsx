import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import { FiltersUsed, GridControls, FilterControls, ProductsGrid } from "../components/catalog";
import { CartControls } from "../components/cart";

import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [perRow, setPerRow] = useState(4);

    useEffect(() => {
        const products = [];
        for (let i = 1; i <= 10; i++) {
            products.push({
                id: Math.random(),
                name: 'prod name',
                price: '200'
            });
        }
        console.log('perRow', perRow);

        setProducts(products);
    }, [perRow]);

    return (
        <>
            <Head>
                <title>Shop!</title>
            </Head>

            <DefaultLayout>
                <section className="flex justify-between flex-wrap">
                    <FiltersUsed/>

                    <div className="flex">
                        <GridControls setPerRow={setPerRow}/>
                        <FilterControls/>
                        <CartControls/>
                    </div>
                </section>

                <div className="flex my-16">
                    <ProductsGrid products={products} perRow={perRow}/>
                </div>
            </DefaultLayout>
        </>
    )
}

export default Home;
