import React from 'react'
import Image from 'next/image'

type Props = {
    name: string,
    title: string,
    image: string,
    description: string
    topic: string
}

const SpeakerElement = (props: Props) => {
    return (
        <div className='w-1/3 h-auto flex flex-col justify-center items-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden'>

                <Image
                    src={props.image}
                    alt={props.name}
                    width={128}
                    height={128}
                />

            </div>
            <div className='text-xl font-bold mt-4'>
                {props.name}
            </div>
            <div className='text-lg'>
                {props.title}
            </div>
            <div className='text-lg'>
                {props.topic}
            </div>
            <div className=''>
                {props.description}
            </div>
        </div>
    )
}


const NextMeetUp = () => {
  return (
    <div className='w-full mt-48 m-auto'>
        <div className='w-full h-auto flex flex-col font-web3 justify-center items-center'>
            <div className='w-2/3 px-8 py-8 text-5xl font-bold'>
                23-02-2023 | Delft | 18:00
            </div>
            <div className='text-xl'>
               Location: The Social Hub, right next to Delft Central Station.
            </div>
            <div className='mt-12 w-3/5'>
                This evening we have a panel discussion with speakers from the Web 3 ecosystem. After the panel discussion 
                there will be several speakers from the web3 industry.
            </div>
            <div className='mt-8 w-full flex justify-center'>
                <SpeakerElement
                    name='Digital Dave'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/dave.png'
                    description='Dave is a web3 enthusiast and co-organiser of Web3 Partners. He is also a co-founder of the Dutch Web3 Foundation.'
                    topic='Icon Foundation'
                />
                <SpeakerElement
                    name='Digital Dave'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/dave.png'
                    description='Dave is a web3 enthusiast and co-organiser of Web3 Partners. He is also a co-founder of the Dutch Web3 Foundation.'
                    topic='Icon Foundation'
                />
            </div>
        </div>
    </div>
  )
}

export default NextMeetUp