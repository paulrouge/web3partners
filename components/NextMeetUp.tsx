import React from 'react'
import Image from 'next/image'
import EventBrite from './EventBrite'
import Iwanttospeak from './Iwanttospeak'

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
    <div className='w-full py-16 m-auto font-web3'>
        <p className='w-full font-bold text-center sm:text-xl lg:text-3xl'>Next Meetup</p>
        <div className='flex flex-col items-center justify-center w-full h-auto font-web3'>
            <div className='px-8 py-8 space-y-1 text-xl font-bold text-center md:text-5xl'>
                <p>Toward the end of March </p>
                <p>Delft/Rotterdam/the Hague</p>
                <p>18:00</p>
            </div>
            <div className='px-2 text-xl'>
               Location: <a href='/' className='inline-block underline'>TBA</a>
            </div>
            {/* <div className='w-11/12 mt-12 text-center md:w-3/5'>
                This evening will feature a panel discussion with speakers from the web3 ecosystem. The panel discussion 
                will circle around 'how one gets involved' in the web3 industry.
            </div> */}
            <div className='flex flex-col items-center justify-center w-full mt-8 md:flex-row sm:items-start'>
                <SpeakerElement
                    name='Speak at this meetup!'
                    title=''
                    image='/images/speaker_none.png'
                    subtitle=''
                    topic=''
                />
               
            </div>
            {/* <EventBrite/> */}
            <Iwanttospeak/>
        </div>
    </div>
  )
}

export default NextMeetUp