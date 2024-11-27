import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='w-full sm:h-[90px] md:h-[80px] flex items-center justify-center border-b-2'>
      <div className='w-[80%] h-full flex sm:flex-col md:flex-row items-center justify-between'>
        {/*left side */}
        <div>
            <h1 className='text-3xl font-bold'>Exclusive</h1>
        </div>
        {/**right side */}
        <div>
            <ul className='flex gap-5 mr-4 font-semibold sm:mb-4 md:mb-0'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
                <li>
                    <Link href="/Signup">Sign up</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
