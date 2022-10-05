import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <section className="flex flex-row lg:flex-col justify-center items-center gap-2">
      <Link href="/">
        <a title="Facebook">
          <FaFacebook size="22"/>
        </a>
      </Link>

      <Link href="/">
        <a title="Facebook">
          <FaTwitter size="22"/>
        </a>
      </Link>

      <Link href="/">
        <a title="Facebook">
          <FaInstagram size="22"/>
        </a>
      </Link>
    </section>
  )
}
