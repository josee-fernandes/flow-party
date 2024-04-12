import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
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
        gsap.fromTo(
          stickyRef.current,
          {
            y: 0.5,
            scale: 1,
            rotation: 0,
          },
          {
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
            y: 250,
            scale: 0.7,
            rotation: -10,
            ease: 'power3.inOut',
          },
        )
      }
    },
    { dependencies: [stickyRef, contentRef], scope: stickyRef },
  )
  useGSAP(
    () => {
      if (!!stickyRef.current && !!contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            y: 300,
            scale: 0.75,
            rotation: 5,
          },
          {
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top bottom',
              end: () =>
                `+=${window.innerHeight + stickyRef.current!.offsetHeight * 0.5}`,
              scrub: 1.5,
              immediateRender: false,
              invalidateOnRefresh: true,
            },
            y: 300,
            scale: 1,
            rotation: 0,
            ease: 'power3.inOut',
          },
        )
      }
    },
    { dependencies: [stickyRef, contentRef], scope: contentRef },
  )

  return (
    <>
      <Head>
        <title>Outflow</title>
      </Head>
      <div className="main-container">
        <Nav />
        <Sticky stickyRef={stickyRef} contentRef={contentRef} />
        <Content contentRef={contentRef} stickyRef={stickyRef} />
      </div>
    </>
  )
}

export default Home
