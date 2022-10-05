import { CartProduct } from "./";

export const CartGrid = ({ products }) => {
    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    return (
        <ul className="w-full">
            {products.map(product => (
                <li key={product.id} className="flex items-center justify-center">
                    <CartProduct product={product}/>
                </li>
            ))}
        </ul>
    )
}
