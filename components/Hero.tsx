import React from 'react'
import BlockBg from './BlockBg'
import ThreeBoxes from './ThreeBoxes'
import Image from 'next/image'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { allmeetups } from './allmeetups'

type Props = {}

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
        `Next Meetup: ${allmeetups[0].date} in ${allmeetups[0].location}`,
    ],
    loop: true,
    delaySpeed: 2000,
})
  
  return (
    <div className='relative flex flex-col items-center w-full h-screen py-48 bg-web3blue font-web3'>
        <div className='relative z-10 flex flex-row items-center justify-center uppercase text-left rounded-full h-[90px] sm:h-[144px] w-fit max-w-xs sm:max-w-7xl font-regular text-web3blue bg-gradient-to-r from-web3mint via-white to-white'>
          <div className='w-[120px] sm:w-[144px]'>
            <Image src="/favicon/logo2.png" alt="Web3 Partners Logo" height={300} width={300}  />
          </div>
       
          <p className='px-3 text-2xl font-regular sm:px-6 sm:text-3xl lg:text-5xl w-fit'>
            <span>Web3 Partners:</span> <span className='whitespace-nowrap'>the Netherlands</span>
          </p>
          
        </div>
        <ThreeBoxes/>
        <h1 className='w-1/2 px-10 text-xl text-center h-28 lg:text-2xl'>
                <span className="mr-3 text-white/80">{text}</span>
                <Cursor cursorColor="#80FFCB"/>
        </h1>
        <BlockBg width="25%" height="100%" position_top={0} position_right={0} z_index={3}/>
        <div className='absolute text-xs font-light text-white bottom-10 font-web3 md:text-sm'>
          {/* <p className='inline-block'>scroll down</p> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-5 h-5 animate-bounce">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>
        </div>
        <div className='absolute text-xs font-light text-white bottom-2 left-2 font-web3 md:text-sm'>
          <p>Powered by the ICON Foundation</p>
        </div>
    </div>
  )
}

export default Hero