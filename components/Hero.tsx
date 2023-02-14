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
        text-white font-bold rounded-full text-xl
        px-12 border-2 z-10 bg-web3blue py-4
        md:text-6xl md:py-8 
        '>
          Web 3 Partners Netherlands
        </div>
        <ThreeBoxes/>
        <BlockBg width="25%" height="100%" position_top={0} position_right={0} z_index={3}/>
        <div className='
        absolute bottom-2 left-2 text-white font-web3 font-light text-xs md:text-sm
        '>
          Powered by the ICON Foundation
        </div>
    </div>
  )
}

export default Hero