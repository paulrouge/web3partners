import React from 'react'
import Image from 'next/image'
import EventBrite from './EventBrite'
import Iwanttospeak from './Iwanttospeak'
import {allmeetups} from './allmeetups'

const NextMeetUp = () => {
    return (
    <div className='w-full py-16 m-auto font-web3'>
        <p className='w-full text-4xl font-bold text-center sm:text-5xl lg:text-6xl'>Next Meetup</p>
        <div className='flex flex-col items-center justify-center w-full h-auto font-web3'>
            <div className='px-8 py-8 space-y-1 text-3xl font-bold text-center sm:space-y-4 md:text-5xl text-slate-700'>
                <p>{allmeetups[0].date}</p>
                <p>{allmeetups[0].location}</p>
                <p>{allmeetups[0].start} - {allmeetups[0].end}</p>
            </div>
            
            <div className='flex flex-col items-center justify-center p-10 m-4 space-y-8 text-3xl shadow-md lg:text-4xl bg-gradient-to-b from-white to-slate-100 w-fit rounded-xl lg:w-1/2'>
                <div className='w-full text-center'>
                    <span className='block mb-2 font-semibold'>Topic:</span> {allmeetups[0].topic}
                </div>
                <div className='w-full mb-2 text-center'>
                    <span className='block font-semibold'>Hosted by:</span> {allmeetups[0].host}
                </div>
                <EventBrite />
            </div>
            
            
            <Iwanttospeak/>
        </div>
    </div>
  )
}

export default NextMeetUp