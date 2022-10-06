import { CartProduct } from "./";

export const CartGrid = ({ products }) => {

    const handleUpdateCart = () => {
        console.log('cart will be updated');
    }

    const handleApplyCoupon = () => {
        console.log('coupon will be applied');
    }

    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    return (
        <div>
            <header className="border-b flex text-gray-400 text-center">
                <p className="w-7/12 p-2">Product</p>
                <p className="w-2/12 p-2">Price</p>
                <p className="w-2/12 p-2">Quantity</p>
                <p className="w-1/12 p-2">Total</p>
            </header>
            <ul className="w-full mb-6">
                {products.map(product => (
                    <li key={product.id} className="flex items-center justify-center">
                        <CartProduct product={product}/>
                    </li>
                ))}
            </ul>

            <footer className="flex flex-col md:flex-row justify-between">
                <div className="inline mb-6 lg:mb-0">
                    <input type="text" className="border px-6 py-3 mr-3" placeholder="Coupon Code"/>

                    <button className="border border-black border-2 px-6 py-3" onClick={handleApplyCoupon}>Apply Coupon</button>
                </div>

                <button className="bg-gray-400 text-white px-6 py-3" onClick={handleUpdateCart}>Update Cart</button>
            </footer>
        </div>

    )
}
