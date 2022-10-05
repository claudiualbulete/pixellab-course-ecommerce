export const CartProduct = ({ product }) => {
    return (
        <article className="py-6 w-full flex">
            <header className="w-72 h-72 bg-gray-200"/>

            <div>
                <h3 className="text-md uppercase text-zinc-400 font-medium">{product.name} </h3>

                <p>products stars</p>
            </div>

            <div>{product.price}</div>
            <div>{product.price}</div>
        </article>
    )
}
