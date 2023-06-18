import React from "react";
import { AppRegistry } from "react-native";

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import { resetStyle } from "@nox-technologies/shared";

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent("Main", () => Main);
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("Main");
    const page = await ctx.renderPage();
    const styles = [
      <style
        key="react-native-style"
        dangerouslySetInnerHTML={{ __html: resetStyle }}
      />,
      getStyleElement(),
    ];

    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
