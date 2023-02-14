import React from 'react'

type Props = {}

const NextMeetUp = (props: Props) => {
  return (
    <div className='w-full mt-48 m-auto'>
        <div className='w-full h-auto flex flex-col font-web3 justify-center items-center'>
            <div className='w-2/3 px-8 py-8 text-5xl font-bold'>
                23-02-2023 | Delft | 18:00
            </div>
            <div className='text-xl'>
               Location: The Social Hub, right next to Delft Central Station.
            </div>
            <div className='mt-12'>
                we have blablabla
            </div>
        </div>
    </div>
  )
}

export default NextMeetUp