export const state = {
    cart: null,
    setCart: function (cart) {
        this.cart = cart;
    },
    products: null,
    setProducts: function (products) {
        this.products = products;
    },
    setQuantity: function (productID, qty) {
        console.log('------');
        console.log('productID', productID);
        console.log('qty', qty);
        console.log('this', this);
        const cartProducts = this.cart.products.reduce((cartProducts, product) => {
            console.log('product', product);

            if (product.productId === productID) {
                product.quantity = qty;
            }

            return product;
        }, [])

        console.log('cartProducts', cartProducts);
    }
};

export default state;