import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ThreeBoxes from '../components/ThreeBoxes'
import MainInfo from '../components/MainInfo'
import Footer from '../components/Footer'
import NextMeetUp from '../components/NextMeetUp'
const IndexPage = () => (
  <Layout title="Web3 Partners">
    <Hero/>
    <ThreeBoxes/>
    <MainInfo/>
    <NextMeetUp />
    <Footer/>
  </Layout>
)

export default IndexPage
