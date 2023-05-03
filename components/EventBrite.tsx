import React from 'react'
import Link from 'next/link'
import {allmeetups} from './allmeetups'

const EventBrite = () => {
  
  return (
    <button className='mt-20'>
        <Link 
        href={allmeetups[0].eventbrite}
        rel="noopener noreferrer" target="_blank"
        className='flex flex-row items-center justify-center p-8 text-xl font-bold text-white uppercase rounded bg-web3pink sm:text-2xl'
        >
            get your free ticket here
        </Link>
    </button>
  )
}

export default EventBrite