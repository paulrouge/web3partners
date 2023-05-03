import React from 'react'

type Props = {
    input: string,
}

const SimpleElement = (props: Props) => {
    return (
        <div className='z-20 px-4 py-2 mx-2 text-sm tracking-widest text-white border border-white rounded-full font-web3 bg-web3blue md:py-4 lg:mx-10 md:text-lg md:px-12 md:uppercase'>
            {props.input}
        </div>
    )
}

const ThreeBoxes = () => {
  return (
    <div className='relative w-full h-48 m-auto md:h-96'>
    
        {/* Overlaying element with 3 elements in it*/}
        <div className='absolute flex items-center justify-center w-full top-1/2 '>
            <div className='absolute z-20 w-full border border-white top-1/2'></div>
            <div className='flex flex-row items-center justify-center w-full'>
                <SimpleElement input="Learning"/>
                <SimpleElement input="Connecting"/>
                <SimpleElement input="Vibing"/>
            </div>
        </div>
    </div>
  )
}

export default ThreeBoxes