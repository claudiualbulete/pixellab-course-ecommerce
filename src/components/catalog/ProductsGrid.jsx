import { Product } from "./";

export const ProductsGrid = ({ products, perRow }) => {
    if (products.length <= 0) {
        return (
            <p>There are no products available</p>
        )
    }

    return (
        <ul className={`grid md:grid-cols-${perRow > 2 ? 2 : perRow} xl:grid-cols-${perRow} gap-8 w-full`}>
            {products.map(product => (
                <li key={product.id}>
                    <Product product={product}/>
                </li>
            ))}
        </ul>
    )
}
