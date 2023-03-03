import React from 'react'

type Props = {}

const MainInfo = () => {
  return (
    <div className='flex justify-center w-full h-auto text-white bg-white font-web3'>
        <div className='relative px-8 py-16 space-y-8 text-xl bg-web3pink md:w-2/3 md:rounded-md md:my-20 md:shadow'>
            <p>
              Web3 Partners is an easy-going space for collaboration, education and support for those who are interested in projects and communities on web3.
            </p>
            <div className='block w-11/12 px-6 py-2 mx-auto text-sm text-center rounded-full sm:hidden bg-web3blue'>
              Presentations and panels are English spoken
            </div>
            <p>
              We are a group of people who are interested in the Web3 ecosystem and want to learn more about it. We are not affiliated with any specific project or company, but we invite projects and companies to come and share their knowledge and challenges with us.
            </p>
            
            <div className='absolute z-20 hidden px-4 py-2 text-sm italic rounded-full lg:text-lg sm:block -right-12 -top-14 bg-web3blue'>
              Presentations and panels are English spoken
            </div>
        </div>

    </div>
  )
}

export default MainInfo