import Head from "next/head";
import Link from "next/link";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact us</title>
            </Head>

            <main className="underline">
                <ul>
                    <li>
                        <a href="/Users/albuletec/workspace/Training/e-com/src/pages/contact">Contact</a>
                    </li>

                    <li>
                        <Link href="/Users/albuletec/workspace/Training/e-com/src/pages/contact">
                            <a title="contact">Contact</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default ContactPage;