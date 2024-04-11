import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

import { Content } from '@/components/Content'
import { Nav } from '@/components/Nav'
import { Sticky } from '@/components/Sticky'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Home() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!!stickyRef.current && !!contentRef.current) {
        gsap.to(stickyRef.current, {
          scrollTrigger: {
            trigger: stickyRef.current,
            start: 'top top',
            end: () =>
              `+=${window.innerHeight + contentRef.current!.offsetHeight * 0.5}`,
            scrub: 1.5,
            pin: true,
            immediateRender: false,
            invalidateOnRefresh: true,
          },
          y: 200,
          scale: 0.5,
          rotation: -10,
          ease: 'power3.out',
        })
      }
    },
    { dependencies: [stickyRef, contentRef], scope: stickyRef },
  )
  useGSAP(
    () => {
      if (!!stickyRef.current && !!contentRef.current) {
        gsap.set(contentRef.current, {
          y: 0,
          scale: 0.75,
          rotation: 5,
        })

        gsap.to(contentRef.current, {
          scrollTrigger: {
            trigger: stickyRef.current,
            start: 'bottom bottom',
            end: () =>
              `+=${window.innerHeight + stickyRef.current!.offsetHeight * 0.5}`,
            scrub: 1.5,
            pin: true,
            immediateRender: false,
            invalidateOnRefresh: true,
          },
          y: 100,
          scale: 1,
          rotation: 0,
          ease: 'power3.out',
        })
      }
    },
    { dependencies: [stickyRef, contentRef], scope: contentRef },
  )

  return (
    <div>
      <Nav />
      <Sticky stickyRef={stickyRef} contentRef={contentRef} />
      <Content contentRef={contentRef} stickyRef={stickyRef} />
    </div>
  )
}

export default Home
