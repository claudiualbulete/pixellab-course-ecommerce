import Link from "next/link";
import Image from "next/image";

export const Product = ({ product }) => {
    return (
        <article className="p-6">
            <header className="w-full h-72 flex justify-center">
                <Link href={`/products/${product.id}`}>
                    <a title="Go to product page">
                        <Image src={product.image} alt={product.title} layout="intrinsic" width="300"
                        height="300"/>
                    </a>
                </Link>
            </header>

            <section className="mt-8 text-center">
                <h3 className="text-md uppercase text-zinc-400 font-medium">{product.title} </h3>

                <p>{product.price}</p>
            </section>
        </article>
    )
}
