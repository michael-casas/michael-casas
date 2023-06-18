import "raf/polyfill";
import "setimmediate";

import type { SolitoAppProps as AppProps } from "solito";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NOX Technologies</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
