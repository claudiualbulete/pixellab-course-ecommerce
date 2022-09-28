import Head from 'next/head'
import { DefaultLayout } from "../layouts/Default";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart!</title>
      </Head>

      <DefaultLayout>
        Cart
      </DefaultLayout>
    </>
  )
}

export default Cart;
