import Link from "next/link";
import Image from "next/image";

export const Product = ({ product }) => {
    return (
        <article className="border p-6 w-full">
            <header className="w-full h-72 flex justify-center relative">
                <Link href="/product">
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
