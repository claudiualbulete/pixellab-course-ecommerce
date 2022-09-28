import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaCarrot } from "react-icons/fa";

import SocialIcons from "./SocialIcons";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative lg:flex-col">
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
        className={`absolute left-0 h-screen w-screen text-white bg-neutral-900 ${menuOpen ? 'top-0' : '-top-full'}`}>
        <ul>
          <li>
            <Link href="/">
              <a title="Shop">Shop</a>
            </Link>
          </li>

          <li>
            <Link href="/about-us">
              <a title="About Us">About</a>
            </Link>
          </li>

          <li>
            <Link href="/contact-us">
              <a title="Contact Us">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;