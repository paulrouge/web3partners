import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

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


const MeetUpMarch23 = () => {
    const [slider, setSlider] = useState(false)

    const handleClick = () => {
        setSlider(!slider)
    }
  
  return (
    <div className='w-full px-4 py-2 mx-auto sm:w-5/6 max-w-7xl'>
        <motion.div
            animate={{
                height: !slider ? 40 : 740,
            }}
            className='flex flex-col items-center justify-between mx-auto overflow-y-scroll border border-black rounded-lg shadow-lg font-web3 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thumb-slate-800/50'
            >
                <button onClick={handleClick} className={'flex flex-row justify-center relative items-center w-full hover:bg-transparent bg-transparent  py-1 rounded-lg cursor-pointer '}>
                    <p>30.03.2023 - The Hague - 18:00</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={'absolute right-4 m-1 w-4 h-4 ' + (slider ? 'rotate-180' : 'rotate-0')}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button> 
                {/* DROPDOWN PART  */}
                <motion.div
                    animate={{ 
                    opacity: !slider ? 0 : 1,
                    y: !slider ? -20 : 0 
                    }}
                    transition={{
                        duration: 0.3,
                        type: "spring",
                    }}
                    className={'text-center ' + (!slider ? 'hidden' : 'block')}
                >
                    <div className='w-full '>
                        <div className='flex flex-col items-center justify-center font-web3'>
                            <div className='p-4 text-xl font-bold text-center md:text-4xl'>
                                30.03.2023 - The Hague - 18:00
                            </div>
                            <div className='px-2 text-lg sm:text-xl'>
                                Location: <a href='https://www.thesocialhub.co/the-hague/' className='inline-block underline'>The Social Hub - The Hague - Hoefkade 9</a>
                            </div>
                            <div className='w-11/12 mt-12 text-center md:w-3/5'>
                                This evening will feature a panel discussion with speakers from the Web3 ecosystem. The panel discussion 
                                will circle around collaborating in the Web3 industry.
                            </div>
                            <div className='flex flex-col items-center justify-center w-full mt-8 md:flex-row sm:items-start'>
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
                        </div>
                    </div>
                </motion.div>
        </motion.div> 
    </div>
  )
}

export default MeetUpMarch23
