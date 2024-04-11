import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { RefObject, useRef } from 'react'

import eye from '/public/eye.svg'

gsap.registerPlugin(useGSAP)

interface StickyProps {
  stickyRef: RefObject<HTMLDivElement>
  contentRef: RefObject<HTMLDivElement>
}

export const Sticky: React.FC<StickyProps> = ({ stickyRef }) => {
  const trackerRef = useRef<HTMLDivElement>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const emojiFaceRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP()

  const handleMove = contextSafe(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (trackerRef.current) {
        const trackerRect = trackerRef.current.getBoundingClientRect()
        const relX = event.clientX - (trackerRect.left + trackerRect.width / 2)
        const relY = event.clientY - (trackerRect.top + trackerRect.height / 2)

        const emojiMaxDisplacement = 50
        const emojiFaceMaxDisplacement = 75

        const emojiDisplacementX =
          (relX / trackerRect.width) * emojiMaxDisplacement
        const emojiDisplacementY =
          (relY / trackerRect.height) * emojiMaxDisplacement
        const emojiFaceDisplacementX =
          (relX / trackerRect.width) * emojiFaceMaxDisplacement
        const emojiFaceDisplacementY =
          (relY / trackerRect.height) * emojiFaceMaxDisplacement

        gsap.to(emojiRef.current, {
          x: emojiDisplacementX,
          y: emojiDisplacementY,
          ease: 'power3.out',
          duration: 0.35,
        })

        gsap.to(emojiFaceRef.current, {
          x: emojiFaceDisplacementX,
          y: emojiFaceDisplacementY,
          ease: 'power3.out',
          duration: 0.35,
        })
      }
    },
  )

  const handleLeave = contextSafe(() => {
    gsap.to([emojiRef.current, emojiFaceRef.current], {
      x: 0,
      y: 0,
      ease: 'power3.out',
      duration: 1,
    })
  })

  return (
    <section
      ref={stickyRef}
      className="fixed left-0 top-0 h-screen w-screen bg-primary"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <nav className="absolute top-0 flex w-full items-center justify-between p-8">
        <div className="logo">
          <a
            href="#"
            className="font-[Humane,_sans-serif] text-6xl uppercase text-white mix-blend-difference [text-decoration:none]"
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
        <h1 className="pointer-events-none font-[Humane,_sans-serif] text-[45vw] font-normal uppercase leading-[70%] text-white">
          Outflow
        </h1>
      </header>

      <div
        ref={trackerRef}
        className="tracker pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 px-8 py-0"
      >
        <div
          ref={emojiRef}
          className="emoji emoji-bg absolute left-1/2 top-1/2 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[100%]"
        >
          <div
            ref={emojiFaceRef}
            className="emoji-face absolute left-1/2 top-1/2 flex h-[200px] w-[225px] -translate-x-1/2 -translate-y-1/2 flex-col"
          >
            <div className="eyes flex flex-1 justify-between">
              <Image
                src={eye}
                alt=""
                className="size-[100px] animate-rotate-eyes object-cover"
              />
              <Image
                src={eye}
                alt=""
                className="size-[100px] animate-rotate-eyes object-cover"
              />
            </div>
            <div className="mouth-wrapper flex flex-1 items-start justify-center">
              <div className="mouth size-[40px] animate-wonder-face rounded-[50px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
