import React from 'react'
import Link
 from 'next/link'
type Props = {}

const Iwanttospeak = (props: Props) => {
  return (
    
    <div className='flex flex-col gap-4 mt-20 bg-web3mint rounded p-8 h-60'>
      {/* <div> */}
        <p className='w-full font-bold text-center sm:text-xl lg:text-3xl'>
          Want to speak at our next meetup? Let us know!
        </p>
        <p>
          We are always looking for speakers to share their knowledge, passion and experience with the community.
        </p>
      {/* </div> */}
      <button className='mt-20'>
        <Link 
        href='https://docs.google.com/forms/d/e/1FAIpQLSfQSzzJXRu8N2hgzDg64veklPBo9VKthuWNYbN-lXbJzk5SLA/viewform'
        rel="noopener noreferrer" target="_blank"
        className='p-8 text-xl font-bold text-white uppercase rounded bg-web3blue sm:text-2xl'
        >
            I want to speak
        </Link>
      </button>
    </div>
  )
}

export default Iwanttospeak