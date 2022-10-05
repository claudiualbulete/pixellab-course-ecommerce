import Head from 'next/head'
import { DefaultLayout } from "../layouts";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <DefaultLayout>
        <p>about us page</p>
      </DefaultLayout>
    </>
  )
}

export default AboutUs;
