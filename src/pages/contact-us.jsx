import Head from 'next/head'
import { DefaultLayout } from "../layouts/Default";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <DefaultLayout>
        ContactUs
      </DefaultLayout>
    </>
  )
}

export default ContactUs;
