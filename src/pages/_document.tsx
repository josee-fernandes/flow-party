import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-full w-full bg-black font-['Schibsted_Grotesk',_sans-serif]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
