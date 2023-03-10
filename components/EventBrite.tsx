import React from 'react'
import Link
 from 'next/link'
type Props = {}

const EventBrite = (props: Props) => {
  return (
    <button className='mt-20 '>
        <Link 
        href=''
        rel="noopener noreferrer" target="_blank"
        className='p-8 text-xl font-bold text-white uppercase rounded bg-web3pink sm:text-2xl'
        >
            get your free ticket here
        </Link>
    </button>
  )
}

export default EventBrite