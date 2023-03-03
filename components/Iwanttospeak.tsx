import React from 'react'
import Link
 from 'next/link'
type Props = {}

const Iwanttospeak = (props: Props) => {
  return (
    <button className='mt-20 '>
        <Link 
        href=''
        rel="noopener noreferrer" target="_blank"
        className='p-8 text-xl font-bold text-white uppercase rounded bg-web3blue sm:text-2xl'
        >
            I want to speak
        </Link>
    </button>
  )
}

export default Iwanttospeak