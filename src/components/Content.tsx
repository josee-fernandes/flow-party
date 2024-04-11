import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { RefObject, useRef } from 'react'

import dummy1 from '/public/1.jpg'
import dummy2 from '/public/2.png'
import dummy3 from '/public/3.jpg'
import dummy4 from '/public/4.jpg'

interface ContentProps {
  contentRef: RefObject<HTMLDivElement>
  stickyRef: RefObject<HTMLDivElement>
}

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const Content: React.FC<ContentProps> = ({ contentRef, stickyRef }) => {
  const eventsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (eventsRef.current) {
        gsap.set('.event-image', {
          y: 300,
        })

        gsap.to('.event-image', {
          scrollTrigger: {
            trigger: stickyRef.current,
            start: 'bottom bottom',
            end: () =>
              `+=${window.innerHeight + stickyRef.current!.offsetHeight * 0.4}`,
            scrub: 2,
            immediateRender: false,
            invalidateOnRefresh: false,
          },
          y: 0,
          ease: 'power3.inOut',
          stagger: {
            each: 0.05,
          },
        })
      }
    },
    { dependencies: [eventsRef], scope: eventsRef },
  )

  return (
    <section
      ref={contentRef}
      className="absolute top-[100vh] h-[300vh] w-full bg-neutral-900 py-8"
    >
      <header className="section-header mb-8 flex w-full justify-between px-8">
        <h1 className="text-normal font-humane text-[10vw] font-bold uppercase leading-[100%] text-white">
          Events
        </h1>
        <p className="w-1/4 text-right text-xs uppercase text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non eius
          expedita laboriosam numquam earum!
        </p>
      </header>
      <div className="h-[46rem]">
        <div ref={eventsRef} className="events my-0 flex h-full w-full">
          <div className="event-image h-full w-1/4 flex-1 overflow-hidden">
            <Image
              src={dummy1}
              alt=""
              className="h-full scale-125 object-cover transition-all duration-1000 hover:scale-100"
            />
          </div>
          <div className="event-image h-full w-1/4 flex-1 overflow-hidden">
            <Image
              src={dummy2}
              alt=""
              className="h-full scale-125 object-cover transition-all duration-1000 hover:scale-100"
            />
          </div>
          <div className="event-image h-full w-1/4 flex-1 overflow-hidden">
            <Image
              src={dummy3}
              alt=""
              className="h-full scale-125 object-cover transition-all duration-1000 hover:scale-100"
            />
          </div>
          <div className="event-image h-full w-1/4 flex-1 overflow-hidden">
            <Image
              src={dummy4}
              alt=""
              className="h-full scale-125 object-cover transition-all duration-1000 hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
