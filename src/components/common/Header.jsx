import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaCarrot } from "react-icons/fa";
import { SocialIcons } from "./";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <section className="flex justify-between items-center z-10 relative h-full lg:h-screen-3/4 lg:flex-col">
                <Link href="/">
                    <a title="Home">
                        <FaCarrot size="32"/>
                    </a>
                </Link>

                <button title="Menu" type="button" onClick={handleMenuOpen}>
                    {menuOpen ? <CgClose size="32"/> : <CgMenu size="32"/>}
                </button>

                <SocialIcons/>
            </section>

            <nav
                className={`absolute -top-full left-0 h-full w-full lg:w-1/2 xl:w-1/3 text-white bg-neutral-900 z-9 transition-transform transform-gpu ${menuOpen && 'translate-y-full'}`}>
                <ul className="h-screen flex flex-col w-full h-full justify-center align-items-center">
                    <li className="py-3 px-20">
                        <Link href="/">
                            <a title="Shop">Shop</a>
                        </Link>
                    </li>

                    <li className="p-3 px-20">
                        <Link href="/about-us">
                            <a title="About Us">About</a>
                        </Link>
                    </li>

                    <li className="p-3 px-20">
                        <Link href="/contact-us">
                            <a title="Contact Us">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
