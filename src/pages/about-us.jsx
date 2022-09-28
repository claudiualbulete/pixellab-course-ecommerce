import Head from 'next/head'
import { DefaultLayout } from "../layouts/Default";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <DefaultLayout>
        AboutUs
      </DefaultLayout>
    </>
  )
}

export default AboutUs;
