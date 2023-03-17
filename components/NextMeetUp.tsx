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
                <p>March 30 2023</p>
                <p>The Hague</p>
                <p>18:00</p>
            </div>
            <div className='px-2 text-xl'>
               Location: <a href='https://www.thesocialhub.co/the-hague/' className='inline-block underline'>The Social Hub - The Hague - Hoefkade 9</a>
            </div>
            {/* <div className='w-11/12 mt-12 text-center md:w-3/5'>
                This evening will feature a panel discussion with speakers from the web3 ecosystem. The panel discussion 
                will circle around 'how one gets involved' in the web3 industry.
            </div> */}
            <div className='
            flex flex-col items-center justify-center 
            w-full mt-8 md:flex-row sm:items-start
            px-4
            '>
                
            <SpeakerElement
                    name='Emily Barker'
                    title='Cum Laude graduate of the Arts, Culture, and Society Master&sbquo;s programme at the Erasmus University Rotterdam in the Netherlands.'
                    image='/images/Emily.png'
                    subtitle='Guest Speaker'
                    topic='Emily graduated cum laude with her thesis, &#8221;NFT CONSUMPTION: What motivations do NFT consumers have for claiming ownership of digital media?&#8221; This examined NFT consumption from a sociological perspective and especially focused on the implications of NFTs and blockchain technology on the traditional art world. will be presenting on NFTs in Art: What motivations do NFT consumers have for claiming ownership of digital media?'
                />
   
                <SpeakerElement
                    name='Justin &#8221;Haylo&#8221;'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/justin.png'
                    subtitle='Community Manager'
                    topic='Justin will be talking about the importance of bold and creative thinking to drive innovation in the Web3 space. He will share his insights on the next steps for Web3 gaming projects and encourage attendees to reflect on how far the industry has come. Justin will also discuss the importance of revisiting existing relationships, removing barriers to entry, and enabling traditional players to benefit from decentralization. You can catch Justins presentation titled &#8221;Breaking out of Web3&#8221; at Web3 Partners.'
                />
                
 
 
                <SpeakerElement
                    name='Paul Rouge'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/paul3.png'
                    subtitle='Developer'
                    topic='Paul is a co-organizer of Web3 Partners and a self-taught developer with experience in multiple projects in the Web3 space. During the event, he will be giving a presentation with the goal of explaining how wallet-apps like MetaMask use encryption to keep your private key safe. He aims to demystify the "crypto" in cryptocurrencies and help attendees gain a better understanding of this aspect of the industry.'
                />
                
               
            </div>
            <EventBrite/>
            <Iwanttospeak/>
        </div>
    </div>
  )
}

export default NextMeetUp