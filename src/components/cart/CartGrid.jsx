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
            <ul className="w-full mb-6">
                {products.map(product => (
                    <li key={product.id} className="flex items-center justify-center">
                        <CartProduct product={product}/>
                    </li>
                ))}
            </ul>

            <footer className="flex justify-between">
                <div className="inline">
                    <input type="text" className="border px-6 py-3 mr-3" placeholder="Coupon Code"/>

                    <button className="border px-10 py-3" onClick={handleApplyCoupon}>Apply Coupon</button>
                </div>

                <button className="bg-gray-400 text-white px-10 py-3" onClick={handleUpdateCart}>Update Cart</button>
            </footer>
        </div>

    )
}
