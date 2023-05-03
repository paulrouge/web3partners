import React from 'react'
import Link
 from 'next/link'
type Props = {}

const EventBrite = (props: Props) => {
  return (
    <button className='mt-20'>
        <Link 
        href='https://www.eventbrite.com/e/march-meetup-collaborating-in-web3-tickets-577792261207?aff=ebdsoporgprofile'
        rel="noopener noreferrer" target="_blank"
        className='
        p-8 text-xl font-bold text-white uppercase 
        rounded bg-web3pink sm:text-2xl
        flex flex-row items-center justify-center
        '
        >
            get your free ticket here
        </Link>
    </button>
  )
}

export default EventBrite