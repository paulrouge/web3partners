import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ThreeBoxes from '../components/ThreeBoxes'
import MainInfo from '../components/MainInfo'
import Footer from '../components/Footer'
import NextMeetUp from '../components/NextMeetUp'
import SubHero from '../components/SubHero'
import Head from 'next/head'	
import Navbar from '../components/Navbar'
import PreviousMeetUps from '../components/PreviousMeetUps'
import addOrganizationData from '../components/StructuredData'

const IndexPage = () => (
  <>
    <Head>

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrganizationData()}
          key="product-jsonld"
      />
      <title>Web3 Partners: the Netherlands</title>
      <meta name="description" content="Web3 Partners is a community of web3 enthusiasts in the Netherlands. We organise meetups and events to connect people in the web3 ecosystem." />
      <meta name="keywords" content='web3, ethereum, blockchain, dapps, defi, nft, decentralised, decentralization, decentralised finance, non-fungible tokens, smart contracts, crypto, cryptocurrency, cryptoassets' />
      
      <meta property="og:url" content="https://www.web3partners.nl/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Web3 Partners"/>
      <meta property="og:description" content="Web3 Partners is a community of web3 enthusiasts in the Netherlands. We organise meetups and events to connect people in the web3 ecosystem."/>
      <meta property="og:image" content="../public/images/link_preview.jpg'"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="web3partners.nl"/>
      <meta property="twitter:url" content="https://www.web3partners.nl/"/>
      <meta name="twitter:title" content="Web3 Partners"/>
      <meta name="twitter:description" content="Web3 Partners is a community of web3 enthusiasts in the Netherlands. We organise meetups and events to connect people in the web3 ecosystem."/>
      <meta name="twitter:image" content='../public/images/link_preview.jpg'/>
    
    </Head>  

    <Layout title="Web3 Partners">
      <Navbar/>
      <Hero/>
      {/* <SubHero/> */}
      {/* <ThreeBoxes/> */}
      <MainInfo/>
      <PreviousMeetUps/>
      <NextMeetUp />
      <Footer/>
    </Layout>
  </>
)

export default IndexPage
