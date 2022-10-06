export const getCurrency = (price, locale = 'en-US', currency = 'USD') => {
    const intlNumber = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);

    return intlNumber.toLocaleString(locale);
}