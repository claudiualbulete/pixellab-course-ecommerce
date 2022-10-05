import Head from 'next/head'
import { DefaultLayout } from "../layouts";
import Link from "next/link";

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>

            <DefaultLayout>
                <div className="container my-16">
                    <div className="w-full h-96 bg-gray-200 mb-12"></div>

                    <div className="px-24">
                        <h1 className="uppercase bold mb-3">About us</h1>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor
                            dolorum ducimus harum hic
                            iusto laborum nulla numquam odit quaerat, quasi quis recusandae, repellendus suscipit ullam.
                            Alias aspernatur officia quo!</p>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor
                            dolorum ducimus harum hic
                            iusto laborum nulla numquam odit quaerat, quasi quis recusandae, repellendus suscipit ullam.
                            Alias aspernatur officia quo!</p>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor
                            dolorum ducimus harum hic
                            iusto laborum nulla numquam odit quaerat, quasi quis recusandae, repellendus suscipit ullam.
                            Alias aspernatur officia quo!</p>
                        <Link href="/">
                            <button className="bg-black text-white px-6 py-3 uppercase">Go to shop</button>
                        </Link>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default AboutUs;
