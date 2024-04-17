import { useGSAP } from '@gsap/react'
import Head from 'next/head'
import { useRef, useState } from 'react'

import { Content } from '@/components/Content'
import { Intro } from '@/components/Intro'
import { Nav } from '@/components/Nav'
import { Sticky } from '@/components/Sticky'
import { useBreakpoints } from '@/hooks'
import { gsap, ScrollTrigger } from '@/lib/gsap'

function Home() {
  const { isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } =
    useBreakpoints()

  const [positions, setPositions] = useState<number[]>([])

  const stickyRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP()

  /* ScrollTrigger */
  const stickySectionAnimation = contextSafe(() => {
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
  })
  const contentSectionAnimation = contextSafe(() => {
    gsap.fromTo(
      contentRef.current,
      {
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
        scale: 1,
        rotation: 0,
        ease: 'power3.inOut',
      },
    )
  })
  const contentSectionTitleAnimation = contextSafe(() => {
    gsap.set('.event-char', {
      y: '115%',
    })
    gsap.fromTo(
      '.event-char',
      {
        y: '100%',
      },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 90%',
        },
        y: 0,
        stagger: 0.03,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false,
        delay: 0.7,
      },
    )
  })

  /* No ScrollTrigger */
  const stickySectionTitleAnimation = contextSafe(() => {
    gsap.set('.flow-char', {
      y: '115%',
    })
    gsap.fromTo(
      '.flow-char',
      {
        y: '100%',
      },
      {
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false,
        delay: 0.7,
      },
    )
  })
  const emojiEnterAnimation = contextSafe(() => {
    gsap.fromTo(
      '.emoji',
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        ease: 'back',
        delay: 1.7,
      },
    )
  })
  const resetSectionsAnimations = contextSafe(() => {
    gsap.set([contentRef.current, stickyRef.current], { clearProps: true })
  })

  useGSAP(
    () => {
      const triggers = ScrollTrigger.getAll()

      if (!!stickyRef.current && !!contentRef.current && isLargeScreen) {
        contentSectionAnimation()
        stickySectionAnimation()

        for (let i = 0; i < triggers.length; i++) {
          triggers[i].scroll(positions[i])
        }
      } else {
        const newPositions = []

        for (const trigger of triggers) {
          newPositions.push(trigger.scroll())
          trigger.kill()
        }

        setPositions(newPositions)
        resetSectionsAnimations()
      }
    },
    { dependencies: [stickyRef, contentRef, isLargeScreen] },
  )
  useGSAP(
    () => {
      if (stickyRef.current) {
        stickySectionTitleAnimation()
        emojiEnterAnimation()
      }
    },
    {
      dependencies: [
        stickyRef,
        contentRef,
        isExtraSmallScreen,
        isSmallScreen,
        isMediumScreen,
        isLargeScreen,
      ],
      scope: stickyRef,
    },
  )
  useGSAP(
    () => {
      if (contentRef.current) {
        contentSectionTitleAnimation()
      }
    },
    {
      dependencies: [
        stickyRef,
        contentRef,
        isExtraSmallScreen,
        isSmallScreen,
        isMediumScreen,
        isLargeScreen,
      ],
      scope: contentRef,
    },
  )

  return (
    <>
      <Head>
        <title>Flow</title>
      </Head>
      <div className="main-container">
        <Nav />
        <Intro />
        <Sticky stickyRef={stickyRef} contentRef={contentRef} />
        <Content contentRef={contentRef} stickyRef={stickyRef} />
      </div>
    </>
  )
}

export default Home
