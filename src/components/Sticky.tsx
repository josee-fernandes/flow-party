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

        const emojiMaxDisplacement = 100
        const emojiFaceMaxDisplacement = 140

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
      <header className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="pointer-events-none font-humane text-[45vw] font-bold uppercase leading-[70%] text-white">
          FLOW
        </h1>
      </header>

      <div
        ref={trackerRef}
        className="tracker pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 px-8 py-0"
      >
        <div
          ref={emojiRef}
          className="emoji emoji-bg absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[100%] lg:size-[350px]"
        >
          <div
            ref={emojiFaceRef}
            className="emoji-face absolute left-1/2 top-1/2 flex h-[140px] w-[225px] -translate-x-1/2 -translate-y-1/2 flex-col lg:h-[180px]"
          >
            <div className="eyes flex flex-1 justify-center gap-12">
              <Image
                src={eye}
                alt=""
                className="size-[50px] animate-rotate-eyes object-cover lg:size-[65px]"
              />
              <Image
                src={eye}
                alt=""
                className="size-[50px] animate-rotate-eyes object-cover lg:size-[65px]"
              />
            </div>
            <div className="mouth-wrapper flex flex-1 items-start justify-center">
              <div className="mouth animate-wonder-face-sm size-[25px] rounded-[50px] bg-black lg:size-[40px] lg:animate-wonder-face"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
