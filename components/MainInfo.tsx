import React from 'react'

type Props = {}

const MainInfo = () => {
  return (
    <div className='flex justify-center w-full h-auto text-white bg-gradient-to-b from-web3blue to-white font-web3'>
        <div className='relative px-8 py-16 space-y-8 text-xl bg-web3pink md:w-2/3 md:rounded-md md:my-20 md:shadow'>
            <p>
              Web3 Partners is an easy-going space for collaboration, education and support for those who are interested in projects and communities on web3.
            </p>
            <p>
              We are a group of people who are interested in the web3 ecosystem and want to learn more about it. We are not affiliated with any specific project or company. We are just a group of people who want to learn more about web3 and meet other people who are interested in it.
            </p>
            <div className='block px-6 py-2 italic text-center rounded-full sm:hidden bg-web3blue'>
              Presentations and panels are English spoken
            </div>
            <p>
              On the 23rd of February we are meeting up in Delft for the first time. There will be a panel discussion and 
              speakers after which we will have a social session.
            </p>
            <div className='absolute z-20 hidden px-4 py-2 text-sm italic border-2 border-white rounded-full lg:text-lg sm:block -right-12 -top-14 bg-web3blue'>
              Presentations and panels are English spoken
            </div>
        </div>

    </div>
  )
}

export default MainInfo