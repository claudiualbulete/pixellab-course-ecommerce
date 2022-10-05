import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export const BackToShop = () => {
    return (
        <Link href="/">
            <button className="border w-48 h-20 flex items-center justify-center">
                <BiLeftArrow/>

                <p className="ml-6">Back to Shop</p>
            </button>
        </Link>
    )
}
