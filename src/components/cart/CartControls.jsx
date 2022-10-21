import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../pages/_app";

export const CartControls = () => {
    const { cart } = useContext(AppContext);
    const [qty, setQty] = useState(0);

    useEffect(() => {
        if (cart) {
            const qty = cart.products.reduce((qty, product) => {
                qty += product.quantity;

                return qty;
            }, 0);

            setQty(qty);
        }
    }, [cart])

    return (
        <section className="flex justify-center items-center">
            <Link href="/cart">
                <button title="Go to Cart"
                        className="border w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center relative">
                    <BsCart size="30"/>

                    <div className="absolute top-50 right-50 text-xs font-bold">
                        {qty}
                    </div>
                </button>
            </Link>
        </section>
    )
}
