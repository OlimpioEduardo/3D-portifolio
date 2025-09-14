import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import LogoSection from "./sections/LogoSection"
import ShowCase from "./sections/ShowCase"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowCase/>
    <LogoSection/>
    <FeatureCards/>
    </>
  )
}

export default App