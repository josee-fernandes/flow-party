import Image from 'next/image'

import dummy1 from '/public/1.jpg'
import dummy2 from '/public/2.png'
import dummy3 from '/public/3.jpg'
import dummy4 from '/public/4.jpg'

export function Content() {
  return (
    <section className="absolute top-[100vh] h-[300vh] w-full bg-neutral-900 px-24 py-8">
      <header className="section-header">
        <h1>Events</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non eius
          expedita laboriosam numquam earum!
        </p>
      </header>
      <div className="section-images">
        <div className="row">
          <Image src={dummy1} alt="" className="h-full w-full object-cover" />
          <Image src={dummy2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="row">
          <Image src={dummy3} alt="" className="h-full w-full object-cover" />
          <Image src={dummy4} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
