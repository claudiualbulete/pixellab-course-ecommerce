import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export const BackToCart = () => {
    return (
        <Link href="/">
            <button className="border w-48 h-20 flex items-center justify-center">
                <BiLeftArrow/>

                Back to Cart
            </button>
        </Link>
    )
}
