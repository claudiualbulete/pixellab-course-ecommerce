import Head from 'next/head'
import { DefaultLayout } from "../layouts";

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
