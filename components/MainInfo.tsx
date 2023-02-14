import React from 'react'

type Props = {}

const MainInfo = (props: Props) => {
  return (
    <div className='w-full h-auto flex font-web3 justify-center'>
        <div className='w-2/3 px-8 py-8 bg-web3pink rounded text-xl text-white'>
            Web 3 Partners is a global community of Web 3 enthusiasts, developers, and investors. We are building a decentralized ecosystem of Web 3 projects and companies.
            <br/><br/>
            On the 23rd of February we are meeting up in Delft for the first time. There will be a panel discussion and 
            speakers after which we will have a networking session. We will also be announcing the first Web 3 Partners
        </div>

    </div>
  )
}

export default MainInfo