import { useRef } from 'react'

import { Content } from '@/components/Content'
import { Sticky } from '@/components/Sticky'

function Home() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <Sticky stickyRef={stickyRef} contentRef={contentRef} />
      <Content contentRef={contentRef} />
    </div>
  )
}

export default Home
