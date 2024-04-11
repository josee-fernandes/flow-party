import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/public/Humane.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/public/Humane_Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/public/Swansea.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="h-full w-full overflow-x-hidden bg-black font-[Swansea,sans-serif]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
