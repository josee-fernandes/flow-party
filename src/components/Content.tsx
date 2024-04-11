import Image from 'next/image'
import { RefObject } from 'react'

import dummy1 from '/public/1.jpg'
import dummy2 from '/public/2.png'
import dummy3 from '/public/3.jpg'
import dummy4 from '/public/4.jpg'

interface ContentProps {
  contentRef: RefObject<HTMLDivElement>
  stickyRef: RefObject<HTMLDivElement>
}

export const Content: React.FC<ContentProps> = ({ contentRef }) => {
  return (
    <section
      ref={contentRef}
      className="content absolute top-[100vh] h-[300vh] w-full bg-neutral-900 px-24 py-8"
    >
      <header className="section-header mb-8 flex w-full justify-between">
        <h1 className="text-normal font-[Humane] text-[10vw] uppercase leading-[100%] text-white">
          Events
        </h1>
        <p className="w-1/4 text-right text-xs uppercase text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non eius
          expedita laboriosam numquam earum!
        </p>
      </header>
      <div className="section-images mx-8 my-0 grid grid-cols-2 gap-8">
        <Image
          src={dummy1}
          alt=""
          className="h-[600px] w-full flex-1 object-cover"
        />
        <Image
          src={dummy2}
          alt=""
          className="h-[600px] w-full flex-1 object-cover"
        />
        <Image
          src={dummy3}
          alt=""
          className="h-[600px] w-full flex-1 object-cover"
        />
        <Image
          src={dummy4}
          alt=""
          className="h-[600px] w-full flex-1 object-cover"
        />
      </div>
    </section>
  )
}
