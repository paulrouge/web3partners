import React from 'react'

type Props = {
    input: string,
}

const SimpleElement = (props: Props) => {
    return (
        <div className='rounded-full text-white
        border border-web3blue bg-web3blue z-20 text-lg px-12 py-4 mx-10
        font-web3 text-3xl tracking-widest uppercase 
        '>
            {props.input}
        </div>
    )
}

const ThreeBoxes = () => {
  return (
    <div className='w-11/12 m-auto h-96 relative'>
    
        {/* Overlaying element with 3 elements in it*/}
        <div className='w-full flex absolute items-center space-between top-1/2 justify-center '>
        <div className='w-full border-b border-web3blue top-1/2 absolute z-10'></div>
            <SimpleElement input="Building"/>
            <SimpleElement input="Connecting"/>
            <SimpleElement input="Vibing"/>
        </div>
    </div>
  )
}

export default ThreeBoxes