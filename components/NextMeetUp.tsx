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
        <div className='mt-8 md:w-1/3 w-10/12 h-auto flex flex-col justify-center items-center'>
            <div className='w-40 h-40 rounded-full overflow-hidden flex flex-col justify-center items-center'>
                <Image
                    src={props.image}
                    alt={props.name}
                    width={1000}
                    height={1000}  
                />
            </div>
            <div className='text-xl font-bold mt-4'>
                {props.name}
            </div>
            <div className='text-sm my-2 text-center'>
                {props.title}
            </div>
            <div className='font-bold text-center'>
                {props.subtitle}
            </div>
            <div className='mt-2 w-4/5'>
                {props.topic}
            </div>

        </div>
    )
}


const NextMeetUp = () => {
  return (
    <div className='w-full md:mt-48 mt-12 m-auto'>
        <div className='w-full h-auto flex flex-col font-web3 justify-center items-center'>
            <div className='
            w-2/3 px-8 py-8 font-bold text-3xl
            md:text-5xl text-center'>
                23.02.2023 - Delft - 18:00
            </div>
            <div className='text-xl px-2'>
               Location: <a href='https://goo.gl/maps/KqXD8XuqurgERLt7A' className='inline-block underline'>The Social Hub</a>, right next to Delft Central Station.
            </div>
            <div className='mt-12 md:w-3/5 w-11/12 text-center'>
                This evening will feature a panel discussion with speakers from the web3 ecosystem. The panel discussion 
                will circle around 'how one gets involved' in the web3 industry.
            </div>
            <div className='mt-8 w-full flex flex-col md:flex-row justify-center items-center sm:items-start'>
                <SpeakerElement
                    name='David the Digital'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/david4.png'
                    subtitle='Communications at ICON'
                    topic='David works for the ICON Foundation, is a general web3 enthousiast co-organiser of the Web3 Partners meet-up in the Netherlands.'
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