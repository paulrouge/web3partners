import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ThreeBoxes from '../components/ThreeBoxes'
import MainInfo from '../components/MainInfo'
import Footer from '../components/Footer'
import NextMeetUp from '../components/NextMeetUp'
import SubHero from '../components/SubHero'

const IndexPage = () => (
  <Layout title="Web3 Partners">
    <Hero/>
    {/* <SubHero/> */}
    {/* <ThreeBoxes/> */}
    <MainInfo/>
    <NextMeetUp />
    <Footer/>
  </Layout>
)

export default IndexPage
