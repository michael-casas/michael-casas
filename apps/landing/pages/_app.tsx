import "raf/polyfill";
import "setimmediate";

import "../global.css";

import type { SolitoAppProps as AppProps } from "solito";
import Head from "next/head";
import { workSans } from "../font.config";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NOX Technologies</title>
      </Head>
      <main className={`${workSans.variable} font-primary`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
