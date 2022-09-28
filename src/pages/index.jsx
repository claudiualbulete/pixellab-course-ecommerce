import Head from 'next/head'
import { DefaultLayout } from "../layouts/Default";
import Product from "../components/Product";

const Home = () => {
    return (
      <>
        <Head>
          <title>Shop!</title>
        </Head>

        <DefaultLayout>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </DefaultLayout>
      </>
    )
}

export default Home;
