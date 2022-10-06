import Link from "next/link";
import Image from "next/image";
import { BiX } from "react-icons/bi";
import { ProductRating } from "../catalog/ProductRating";
import { useState } from "react";
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

    return (
        <article className="py-6 w-full flex align-center justify-between gap-6 border-b-2">
            <button className="w-1/12" title="Remove product from cart" onClick={handleRemoveProduct}>
                <BiX/>
            </button>

            <Link href={`/products/${id}`}>
                <a className="w-2/12 h-24" title={`Visit product: ${title}`}>
                    <Image width="100" height="100"
                           src={image}
                    />
                </a>
            </Link>

            <div className="flex align-center flex-col w-5/12 justify-center">
                <h3 className="text-md uppercase text-zinc-800 font-medium">{title} </h3>

                <ProductRating rating={rating}/>
            </div>

            <div className="w-1/12 flex justify-center items-center">
                {getCurrency(price)}
            </div>

            <div className="w-2/12 flex justify-center items-center">
                <input type="number" className="border px-4 py-2 w-full"
                       value={quantity}
                       onChange={handleQuantityUpdate}
                />
            </div>

            <div className="w-1/12 flex justify-center items-center">{getCurrency(price)}</div>
        </article>
    )
}
