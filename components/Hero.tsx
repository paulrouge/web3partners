import React from 'react'
import BlockBg from './BlockBg'
import ThreeBoxes from './ThreeBoxes'

type Props = {}

const Hero = () => {
  return (
    <div className='
    w-full bg-web3blue py-48 flex flex-col items-center relative
    '>
        <div className='
        text-white font-bold rounded-full px-12 border-2 z-10 bg-web3blue
        py-4
        md:text-6xl md:py-8 
        '>
            Web 3 Partners Netherlands
        </div>
        <ThreeBoxes/>
        <BlockBg width="25%" height="100%" position_top={0} position_right={0} z_index={3}/>
    </div>
  )
}

export default Hero