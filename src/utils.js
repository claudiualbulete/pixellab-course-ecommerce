import { API_URL } from "./constants";

/**
 * Get formatted price
 *
 * @param {number} price
 * @param {string} locale
 * @param {string} currency
 * @returns {string}
 */
export const getCurrency = (price, locale = 'en-US', currency = 'USD') => {
    const intlNumber = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);

    return intlNumber.toLocaleString();
}

export const fetchProducts = (limit = 20) => {
    return fetch(`${API_URL}/products?limit=${limit}`)
        .then(res => res.json())
        .catch((e) => {
            // Notification instead of this log
            console.log(e);
        });
}

export const fetchProduct = (productID) => {
    if (!productID) return Promise.reject();

    return fetch(`${API_URL}/products/${productID}`)
        .then(res => res.json())
        .catch((e) => {
            // Notification instead of this log
            console.log(e);
        });
}

export const fetchCart = (cartID = 1) => {
    return fetch(`${API_URL}/carts/${cartID}`)
        .then(res => res.json())
        .catch((e) => {
            // Notification instead of this log
            console.log(e);
        });
}