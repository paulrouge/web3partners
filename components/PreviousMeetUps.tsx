import React from 'react'
import MeetUpFeb23 from './MeetupFeb23'
import MeetUpMarch23 from './MeetupMarch23'
import MeetUpMay23 from './MeetupMay23'


const PreviousMeetUps = () => {
  return (
    <div className='relative w-full py-10 space-y-8 font-web3 mb-60'>
        <p className='w-full font-bold text-center sm:text-xl lg:text-3xl'>Previous Meetups</p>
        <div className='space-y-2'>
            <MeetUpFeb23/>
            <MeetUpMarch23/>
            <MeetUpMay23/>
        </div>
        
    </div>
  )
}

export default PreviousMeetUps