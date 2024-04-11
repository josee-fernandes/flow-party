import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full w-full overflow-x-hidden bg-black font-[Swansea,sans-serif]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
