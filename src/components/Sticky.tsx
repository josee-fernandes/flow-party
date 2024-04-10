import Image from 'next/image'

import eye from '/public/eye.svg'

export function Sticky() {
  return (
    <section>
      <nav>
        <div className="logo">
          <a href="#">Outflow</a>
        </div>
        <div className="links">
          <a href="#">Join Community</a>
          <a href="#">Enroll Now</a>
        </div>
      </nav>

      <header>
        <h1>Outflow</h1>
      </header>

      <div className="tracker">
        <div className="emoji">
          <div className="emoji-face">
            <div className="eyes">
              <Image src={eye} alt="" />
              <Image src={eye} alt="" />
            </div>
          </div>
          <div className="mouth-wrapper">
            <div className="mouth"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
