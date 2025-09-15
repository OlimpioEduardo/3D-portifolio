import Navbar from "./components/Navbar"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import LogoSection from "./sections/LogoSection"
import ShowCase from "./sections/ShowCase"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowCase/>
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    </>
  )
}

export default App