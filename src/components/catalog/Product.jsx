import Link from "next/link";
import Image from "next/image";
import { getCurrency } from "../../utils";

export const Product = ({ product }) => {

    const {id, image, price, title} = product
    return (
        <article className="p-6">
            <header className="w-full h-68 flex justify-center">
                <Link href={`/products/${id}`}>
                    <a title="Go to product page">
                        <Image src={image} alt={title} layout="intrinsic" width="300"
                        height="300"/>
                    </a>
                </Link>
            </header>

            <section className="mt-8 text-center">
                <h3 className="text-md uppercase text-zinc-400 font-medium">{title} </h3>

                <p>{getCurrency(price)}</p>
            </section>
        </article>
    )
}
