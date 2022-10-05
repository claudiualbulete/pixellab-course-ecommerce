import { Product } from "./";

export const ProductsGrid = ({ products, perRow }) => {
    return (
        <ul className={`w-full grid grid-cols-1 md:grid-cols-${perRow > 2 ? 2 : perRow} lg:grid-cols-${perRow} gap-8`}>
            {products.map(product => (
                <li key={product.id}>
                    <Product product={product}/>
                </li>
            ))}
        </ul>
    )
}
