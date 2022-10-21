import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const cartCache = {}

export const useCart = (cartID = 2) => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        if (!cartID) return;

        if (cartCache[cartID]) {
            setCart(cartCache[cartID])
        } else {
            fetch(`${API_URL}/carts/${cartID}`)
                .then(res => res.json())
                .then(json => {
                    // Add to cache
                    cartCache[cartID] = json;

                    // Set to state
                    setCart(json);
                })
                .catch((e) => {
                    // Notification instead of this log
                    console.log(e);
                });
        }
    }, [cartID]);

    return { cart };
};
