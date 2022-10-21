import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiX } from "react-icons/bi";
import { ProductRating } from "../catalog";
import { getCurrency } from "../../utils";

export const CartProduct = ({ product, removeProduct, updateQuantity }) => {
    const [quantity, setQuantity] = useState(1);

    const { id, title, rating, price, image } = product;

    const handleRemoveProduct = () => {
        removeProduct && removeProduct(id);
    }

    const handleQuantityUpdate = (event) => {
        const newQuantity = event.target.value;

        setQuantity(newQuantity);
        updateQuantity && updateQuantity(id, newQuantity);
    }

    useEffect(() => {
        if (product.quantity) {
            setQuantity(product.quantity);
        }
    }, [product, setQuantity])

    return (
        <article className="py-6 w-full flex border-b gap-2">
            <button className="w-4 grow-0 shrink-0" title="Remove product from cart" onClick={handleRemoveProduct}>
                <BiX/>
            </button>

            <Link href={`/products/${id}`}>
                <a className="w-28 grow-0 shrink-0" title={`Visit product: ${title}`}>
                    <Image width="100" height="100"
                           objectFit="contain"
                           src={image}
                    />
                </a>
            </Link>

            <div className="w-full grow shrink flex align-center flex-col justify-center">
                <h3 className="text-md uppercase text-zinc-800 font-medium">{title} </h3>

                <ProductRating rating={rating}/>
            </div>

            <div className="w-20 grow-0 shrink-0 flex justify-center items-center">
                {getCurrency(price)}
            </div>

            <div className="w-20 grow-0 shrink-0 flex justify-center items-center">
                <input type="number" className="border px-4 py-2 w-full"
                       value={quantity}
                       onChange={handleQuantityUpdate}
                />
            </div>

            <div className="w-20 grow-0 shrink-0 flex justify-center items-center">{getCurrency(price)}</div>
        </article>
    )
}
