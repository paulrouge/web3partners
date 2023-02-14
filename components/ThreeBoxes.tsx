import React from 'react'

type Props = {
    input: string,
}

const SimpleElement = (props: Props) => {
    return (
        <div className='
        font-web3 rounded-full text-white
        border border-white bg-web3blue z-20 
        mx-4 px-4 py-2 tracking-widest text-sm
        md:py-4 md:mx-10 md:text-lg md:px-12
        md:text-3xl md:uppercase
        '>
            {props.input}
        </div>
    )
}

const ThreeBoxes = () => {
  return (
    <div className='w-11/12 md:w-full m-auto md:h-96 h-48 relative'>
    
        {/* Overlaying element with 3 elements in it*/}
        <div className='w-full flex absolute items-center top-1/2 justify-center '>
        <div className='w-full border border-white top-1/2 absolute z-20'></div>
            <SimpleElement input="Building"/>
            <SimpleElement input="Connecting"/>
            <SimpleElement input="Vibing"/>
        </div>
    </div>
  )
}

export default ThreeBoxes