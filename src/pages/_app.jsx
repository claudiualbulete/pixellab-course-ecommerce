import "../styles/index.css";
import { createContext, useEffect } from "react";
import { useCart } from "../hooks/use-cart";
import { useProducts } from "../hooks/use-products";
import state from "../state";

export const AppContext = createContext({})

export const MyApp = ({ Component, pageProps }) => {
    const { cart } = useCart(2);
    const { products } = useProducts();

    useEffect(() => {
        state.setCart(cart);
        state.setProducts(products);
    }, [cart, products])

    return (
        <AppContext.Provider value={state}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}

export default MyApp
