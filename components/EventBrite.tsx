import React from 'react'
import Link
 from 'next/link'
type Props = {}

const EventBrite = (props: Props) => {
  return (
    <div className='mt-20 '>
        <Link 
        href="https://www.eventbrite.com/e/february-meetup-getting-started-in-web3-tickets-546619161627"
        rel="noopener noreferrer" target="_blank"
        className='bg-web3pink p-8 text-xl sm:text-2xl font-bold text-white rounded uppercase'
        >
            get your free ticket here
        </Link>
    </div>
  )
}

export default EventBrite