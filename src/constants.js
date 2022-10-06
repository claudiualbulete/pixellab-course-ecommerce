// Yeah, I'm pretty old fashion :D
export const API_URL = 'https://fakestoreapi.com';

export const FILTER_SORT_BY = {
    id: 'sort-by',
    title: 'Sort By',
    options: [{
        key: 'default',
        value: 'Default'
    }, {
        key: 'popularity',
        value: 'Popularity'
    }, {
        key: 'newest',
        value: 'Newest'
    }]
};

export const FILTER_GENDER = {
    id: 'gender',
    title: 'Gender',
    options: [{
        key: 'all',
        value: 'Show All'
    }, {
        key: 'men',
        value: 'Men'
    }, {
        key: 'woman',
        value: 'Woman'
    }]
};

export const FILTER_PRODUCT = {
    id: 'product',
    title: 'Product',
    options: [{
        key: 'all',
        value: 'Show All'
    }, {
        key: 'shoes',
        value: 'Shoes'
    }, {
        key: 'Bags',
        value: 'Bags'
    }, {
        key: 'sunglasses',
        value: 'Sunglasses'
    }]
};

export const FILTER_PRICE = {
    id: 'price',
    title: 'PRICE',
    options: [{
        key: 'all',
        value: 'Show All'
    }, {
        key: '0-99',
        value: '0 - 99'
    }, {
        key: '100-499',
        value: '100 - 499'
    }, {
        key: '500-999',
        value: '500 - 999'
    }]
};

export const FILTERS = [FILTER_SORT_BY, FILTER_GENDER, FILTER_PRODUCT, FILTER_PRICE];