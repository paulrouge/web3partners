import React from 'react'
import Image from 'next/image'

type Props = {}

const Navbar = () => {
  return (
    <nav className='absolute top-0 z-20 w-full p-4'>
        <div className='w-40'>
            <Image src="/images/logo-web3.png" alt="Web3 Partners Logo" height={730} width={1563} />
        </div>
    </nav>
  )
}

export default Navbar