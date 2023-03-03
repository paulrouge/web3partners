import React from 'react'
import Image from 'next/image'
import MeetUp23022023 from './Meetup23022023'


const PreviousMeetUps = () => {
  return (
    <div className='relative w-full py-10 space-y-8 font-web3'>
        <p className='w-full font-bold text-center sm:text-xl lg:text-3xl'>Previous Meetups</p>
        <div className='space-y-2'>
            <MeetUp23022023/>

        </div>
        
    </div>
  )
}

export default PreviousMeetUps