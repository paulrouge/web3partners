import React from 'react'
import BlockBg from './BlockBg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full bg-web3blue py-48 flex flex-col items-center relative'>
        <div className='text-white font-bold text-7xl border-2 rounded-full px-12 py-8 bg-web3blue z-10'>
            Web 3 Partners Netherlands
        </div>
        <div className='text-white text-3xl font-light tracking-widest mt-8'>
            Bringing the Web 3.0 to the Netherlands
        </div>
        <BlockBg width="25%" height="100%" position_top={0} position_right={0} z_index={3}/>
    </div>
  )
}

export default Hero