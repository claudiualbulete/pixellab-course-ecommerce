import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import { FiltersUsed, GridControls, FilterControls, ProductsGrid } from "../components/catalog";
import { CartControls } from "../components/cart";

import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { Loader } from "../components/common";
import { Filters } from "../components/common/Filters";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [perRow, setPerRow] = useState(4);
    const [showFilters, setShowFilters] = useState(false);
    const [productsLoading, setProductsLoading] = useState(false);

    useEffect(() => {
        setProductsLoading(true);

        fetch(`${API_URL}/products`)
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
                        <FilterControls toggleFilters={setShowFilters}/>
                        <CartControls/>
                    </div>
                </section>

                {showFilters && (
                    <section className="my-6">
                        <Filters/>
                    </section>
                )}

                <div className="flex my-16">
                    {productsLoading ? (
                        <Loader/>
                    ) : (
                        <ProductsGrid products={products} perRow={perRow}/>
                    )}
                </div>

                <div className="md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-4"></div>
            </DefaultLayout>
        </>
    )
}

export default Home;
