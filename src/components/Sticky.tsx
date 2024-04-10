import Image from 'next/image'

import eye from '/public/eye.svg'

export function Sticky() {
  return (
    <section className="bg-primary fixed left-0 top-0 h-screen w-screen">
      <nav className="absolute top-0 flex w-full items-center justify-between p-8">
        <div className="logo">
          <a
            href="#"
            className="text-secondary font-[Humane,_sans-serif] text-6xl uppercase [text-decoration:none]"
          >
            Outflow
          </a>
        </div>
        <div className="links flex items-center gap-4">
          <a
            href="#"
            className="rounded-[20px] border-[1px] border-white px-2 py-4 text-xs uppercase text-white [text-decoration:none]"
          >
            Join Community
          </a>
          <a
            href="#"
            className="rounded-[20px] border-[1px] border-white px-2 py-4 text-xs uppercase text-white [text-decoration:none]"
          >
            Enroll Now
          </a>
        </div>
      </nav>

      <header className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-[Humane,_sans-serif] text-[45vw] font-normal uppercase leading-[100%] text-white">
          Outflow
        </h1>
      </header>

      <div className="tracker absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 px-8 py-0">
        <div className="emoji emoji-bg absolute left-1/2 top-1/2 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[100%]">
          <div className="emoji-face absolute left-1/2 top-1/2 flex h-[200px] w-[225px] -translate-x-1/2 -translate-y-1/2 flex-col">
            <div className="eyes flex flex-1 justify-between">
              <Image
                src={eye}
                alt=""
                className="animation-rotate-eyes size-[100px] object-cover"
              />
              <Image
                src={eye}
                alt=""
                className="animation-rotate-eyes size-[100px] object-cover"
              />
            </div>
            <div className="mouth-wrapper flex flex-1 items-start justify-center">
              <div className="mouth animation-wonder-face size-[40px] rounded-[50px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
