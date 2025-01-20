import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full py-3 px-5 bg-[url('/assets/NavBG.png')] bg-[length:700px_200px] border-b-2 border-[#787777]">
      <div className='flex justify-between'>
      <Link href="/">
        <h1 className='text-light-2 font-bold head-text'>My Portfolio</h1>
      </Link>

      <ul className="flex gap-8 text-light-2 font-bold cursor-pointer items-center mr-12">
        <Link href="/projects">
          <li className='hover:scale-125 transition-all duration-200'>My Projects</li>
        </Link>
        <Link href="/about">
          <li className='text-3xl hover:scale-125 transition-all duration-200'>About</li>
        </Link>
        <Link href="/contact">
          <li className='hover:scale-125 transition-all duration-200'>Contact Me</li>
        </Link>
      </ul>
    </div>
    </div>  
  )
}

export default NavBar;
