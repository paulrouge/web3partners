import React from 'react'
import Image from 'next/image'

type Props = {}

const Navbar = () => {
  return (
    <nav className='absolute top-0 z-20 flex flex-row items-center justify-between w-full p-4 font-web3'>
        {/* <div className='w-40'>
            <Image src="/images/logo-web3.png" alt="Web3 Partners Logo" height={730} width={1563} />
        </div> */}
        {/* <div className='px-3 py-3 text-sm font-bold rounded-md shadow-lg sm:text-lg bg-web3mint h-fit'>
          <button dataTfSlider="v2Up5imQ" dataTfPosition="right" dataTfOpacity="100" dataTfIframeProps="title=Web3 Partners Netherlands: General Questionnaire" dataTfTransitive-search-params data-tf-medium="snippet" >Feedback Questionnaire</button><script src="//embed.typeform.com/next/embed.js"></script>
        </div> */}
        
    </nav>
  )
}

export default Navbar