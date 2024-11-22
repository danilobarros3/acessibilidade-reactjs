import Document, { Head, Html, Main, NextScript } from "next/document"

export default class CustomDocument extends Document{
  render(){
    return (
      <Html lang="PT-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@100;900&family=Geist+Mono:wght@100;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}