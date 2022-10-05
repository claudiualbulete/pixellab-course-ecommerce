export const Product = ({ product }) => {
    return (
        <article className="border p-6 w-full">
            <header className="w-full h-72 bg-gray-200">

            </header>

            <section className="mt-8 text-center">
                <h3 className="text-md uppercase text-zinc-400 font-medium">{product.name} </h3>
                <p>{product.price}</p>
            </section>
        </article>
    )
}
