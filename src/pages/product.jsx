import Head from 'next/head'
import { DefaultLayout } from "../layouts/Default";

const Product = () => {
  return (
    <>
      <Head>
        <title>Product!</title>
      </Head>

      <DefaultLayout>
        Product
      </DefaultLayout>
    </>
  )
}

export default Product;
