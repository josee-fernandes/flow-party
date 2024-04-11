import { Head, Html, Main, NextScript } from 'next/document'
import path from 'path'

const humaneFont = path.join(process.cwd(), 'public', 'Humane.ttf')
const humaneBoldFont = path.join(process.cwd(), 'public', 'Humane_Bold.ttf')
const swansea = path.join(process.cwd(), 'public', 'Swansea.ttf')

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href={humaneFont}
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={humaneBoldFont}
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={swansea}
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
