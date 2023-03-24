import '../styles/globals.css';
import '../styles/masonry.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/assets/logo_mono.png" />
    </Head>

    <Component {...pageProps} />
  </>;
}

export default MyApp
