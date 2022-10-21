import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const productCache = {};

export const useProduct = (productID) => {
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState('200');

    useEffect(() => {
        if (!productID) return;

        if (productCache[productID]) {
            setProduct(productCache[productID])
        } else {
            try {
                fetch(`${API_URL}/products/${productID}`)
                    .then(res => res.json())
                    .then(json => {
                        // Add to cache
                        productCache[productID] = json;

                        // Set in store
                        setProduct(json);
                    })
                    .catch(() => {
                        setStatus('404')
                    });
            } catch (e) {
                console.log('failed to fetch', e);
            }
        }

    }, [productID]);

    return { product, status };
};
