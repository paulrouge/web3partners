import React from 'react'
import Link
 from 'next/link'
type Props = {}

const Iwanttospeak = (props: Props) => {
  return (
    <button className='mt-20 '>
        <Link 
        href='https://docs.google.com/forms/d/e/1FAIpQLSfQSzzJXRu8N2hgzDg64veklPBo9VKthuWNYbN-lXbJzk5SLA/viewform'
        rel="noopener noreferrer" target="_blank"
        className='p-8 text-xl font-bold text-white uppercase rounded bg-web3blue sm:text-2xl'
        >
            I want to speak
        </Link>
    </button>
  )
}

export default Iwanttospeak