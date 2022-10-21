import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export const useProducts = (limit = 20) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/products?limit=${limit}`)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
            .catch((e) => {
                // Notification instead of this log
                console.log(e);
            });
    }, [limit]);

    return { products };
};
