import Link from "next/link";
import { BsCart } from "react-icons/bs";

export const CartControls = () => {
    return (
        <section className="flex justify-center items-center">
            <Link href="/cart">
                <button title="Facebook" className="border w-20 h-20 flex items-center justify-center">
                    <BsCart size="30"/>
                </button>
            </Link>
        </section>
    )
}
