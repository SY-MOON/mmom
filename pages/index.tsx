import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MMOM</title>
        <meta name="description" content="99's personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Contents</Layout>
    </>
  );
}
