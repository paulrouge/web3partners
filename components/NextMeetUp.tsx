import React from 'react'
import Image from 'next/image'
import EventBrite from './EventBrite'

type Props = {
    name: string,
    title: string,
    image: string,
    subtitle: string
    topic: string
}

const SpeakerElement = (props: Props) => {
    return (
        <div className='flex flex-col items-center justify-center w-10/12 h-auto mt-8 md:w-1/3'>
            <div className='flex flex-col items-center justify-center w-40 h-40 overflow-hidden rounded-full'>
                <Image
                    className='scale-[115%]'
                    src={props.image}
                    alt={props.name}
                    width={1000}
                    height={1000}  
                />
            </div>
            <div className='mt-4 text-xl font-bold'>
                {props.name}
            </div>
            <div className='my-2 text-sm text-center'>
                {props.title}
            </div>
            <div className='font-bold text-center'>
                {props.subtitle}
            </div>
            <div className='w-4/5 mt-2'>
                {props.topic}
            </div>

        </div>
    )
}


const NextMeetUp = () => {
  return (
    <div className='w-full m-auto mt-12 md:mt-48'>
        <div className='flex flex-col items-center justify-center w-full h-auto font-web3'>
            <div className='w-2/3 px-8 py-8 text-3xl font-bold text-center md:text-5xl'>
                23.02.2023 - Delft - 18:00
            </div>
            <div className='px-2 text-xl'>
               Location: <a href='https://goo.gl/maps/KqXD8XuqurgERLt7A' className='inline-block underline'>The Social Hub</a>, right next to Delft Central Station.
            </div>
            <div className='w-11/12 mt-12 text-center md:w-3/5'>
                This evening will feature a panel discussion with speakers from the web3 ecosystem. The panel discussion 
                will circle around 'how one gets involved' in the web3 industry.
            </div>
            <div className='flex flex-col items-center justify-center w-full mt-8 md:flex-row sm:items-start'>
                <SpeakerElement
                    name='David the Digital'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/david4.png'
                    subtitle='Communications at ICON'
                    topic='David works for the ICON Foundation, is a general web3 enthousiast and co-organiser of the Web3 Partners meet-up in the Netherlands.'
                />
                <SpeakerElement
                    name='Paul Rouge'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/paul3.png'
                    subtitle='Developer'
                    topic='Paul is a self-taught developer and co-organiser of Web3 Partners. He has worked on several projects in the web3 space.'
                />
                <SpeakerElement
                    name='Justin &#8221;Haylo&#8221;'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/justin.png'
                    subtitle='Community Manager'
                    topic='As a Community Manager, Justin is involved with the people-side of web3. His interests range from DeFi to NFT and from Blockchain Gaming to business development.'
                />
            </div>
            <EventBrite/>

        </div>
    </div>
  )
}

export default NextMeetUp