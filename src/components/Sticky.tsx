import Image from 'next/image'
import { RefObject, useRef } from 'react'

import eye from '/public/eye.svg'
import { gsap, useGSAP } from '@/lib/gsap'
import { rgbColorByPercentage } from '@/utils/color'
import { splitToSpan } from '@/utils/gsap'

interface StickyProps {
  stickyRef: RefObject<HTMLDivElement>
  contentRef: RefObject<HTMLDivElement>
}

const LEFT_END_COLOR = 'rgb(255, 123, 202)'
const START_COLOR = 'rgb(85, 70, 255)'
const RIGHT_END_COLOR = 'rgb(191, 255, 0)'

export const Sticky: React.FC<StickyProps> = ({ stickyRef }) => {
  const trackerRef = useRef<HTMLDivElement>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const emojiFaceRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP()

  const handleEmojiColor = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    trackerRect: DOMRect,
  ) => {
    if (!emojiRef.current) return

    const cursorPositionX = event.clientX

    // const endLeftX = 0
    const startLefX =
      trackerRect.width - trackerRect.width / 2 - trackerRect.left

    const startRightX = trackerRect.width
    // const endRightX = trackerRect.width + trackerRect.left

    if (cursorPositionX > startRightX) {
      // const cursorXPercentage = (100 * cursorPositionX) / startRightX - 100
      const cursorXPercentage = Math.min(
        Math.abs(((100 * cursorPositionX) / startLefX - 300) * 4),
        100,
      )
      const colorString = rgbColorByPercentage({
        start: START_COLOR,
        end: RIGHT_END_COLOR,
        percentage: cursorXPercentage,
      })

      gsap.to(emojiRef.current, {
        backgroundColor: colorString,
        ease: 'power3.out',
        duration: 0.8,
      })
    } else if (cursorPositionX < startLefX) {
      const cursorXPercentage = Math.min(
        Math.abs(((100 * cursorPositionX) / startLefX - 100) * 4),
        100,
      )

      const colorString = rgbColorByPercentage({
        start: START_COLOR,
        end: LEFT_END_COLOR,
        percentage: cursorXPercentage,
      })

      gsap.to(emojiRef.current, {
        backgroundColor: colorString,
        ease: 'power3.out',
        duration: 0.8,
      })
    } else {
      gsap.to(emojiRef.current, {
        backgroundColor: START_COLOR,
        ease: 'power3.out',
        duration: 0.8,
      })
    }
  }

  const handleMove = contextSafe(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (trackerRef.current) {
        const trackerRect = trackerRef.current.getBoundingClientRect()
        const relX = event.clientX - (trackerRect.left + trackerRect.width / 2)
        const relY = event.clientY - (trackerRect.top + trackerRect.height / 2)

        handleEmojiColor(event, trackerRect)

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
          duration: 0.8,
        })

        gsap.to(emojiFaceRef.current, {
          x: emojiFaceDisplacementX,
          y: emojiFaceDisplacementY,
          ease: 'power3.out',
          duration: 0.8,
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
    gsap.to(emojiRef.current, {
      backgroundColor: START_COLOR,
      ease: 'power3.out',
      duration: 1,
    })
  })

  useGSAP(() => {
    gsap.set(emojiRef.current, { display: 'block' })
  })

  return (
    <section
      ref={stickyRef}
      className="fixed left-0 top-0 h-screen w-screen bg-primary"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <header className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
        {splitToSpan(
          <h1 className="pointer-events-none hidden overflow-hidden whitespace-nowrap pt-16 font-humane text-[32rem] font-bold uppercase leading-[.7] text-white xs:block md:text-[74vw] lg:text-[40rem] 2xl:text-[48rem]">
            FLOW
          </h1>,
          'flow-char translate-y-[115%]',
        )}
      </header>

      <div
        ref={trackerRef}
        className="tracker pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 px-8 py-0"
      >
        <div
          ref={emojiRef}
          className="emoji emoji-bg absolute left-1/2 top-1/2 hidden size-64 -translate-x-1/2 -translate-y-1/2 scale-0 overflow-hidden rounded-[100%] lg:size-80"
        >
          <div
            ref={emojiFaceRef}
            className="emoji-face absolute left-1/2 top-1/2 z-[1] flex h-[140px] w-[225px] -translate-x-1/2 -translate-y-1/2 flex-col lg:h-[180px]"
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
              <div className="mouth size-[25px] animate-wonder-face-sm rounded-[50px] bg-black lg:size-[40px] lg:animate-wonder-face"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
