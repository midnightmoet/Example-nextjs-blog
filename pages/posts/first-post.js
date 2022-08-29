import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout";

const FirstPost = () => {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">back to homepage</Link>
        </h2>
      </Layout>
    );
}

export default FirstPost;