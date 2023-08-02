import { AppProps } from "next/app";
import Head from "next/head";
import { NativeBaseProvider } from "native-base";
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nb!</title>
      </Head>
      <NativeBaseProvider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </NativeBaseProvider>
    </>
  );
}

export default CustomApp;
