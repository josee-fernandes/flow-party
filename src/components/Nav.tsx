export const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between p-8 mix-blend-difference">
      <div className="logo">
        <a
          href="#"
          className="font-[Humane,_sans-serif] text-7xl uppercase text-white mix-blend-difference [text-decoration:none]"
        >
          OUTFLOW
        </a>
      </div>
      <div className="links flex items-center gap-4">
        <a
          href="#"
          className="rounded-full border-[1px] border-white px-4 pb-2 pt-2.5 text-sm uppercase text-white transition-all [text-decoration:none] hover:bg-white hover:text-black"
        >
          JOIN COMMUNITY
        </a>
        <a
          href="#"
          className="rounded-full border-[1px] border-white px-4 pb-2 pt-2.5 text-sm uppercase text-white [text-decoration:none]"
        >
          ENROLL NOW
        </a>
      </div>
    </nav>
  )
}
