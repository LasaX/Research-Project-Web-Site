import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IntroductionSection from './components/IntroductionSection'
import ArchitectureSection from './components/ArchitectureSection'
import ScenariosSection from './components/ScenariosSection'
import ContributionsSection from './components/ContributionsSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <ArchitectureSection />
      <ScenariosSection />
      <ContributionsSection />
      <TeamSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}
