import AlumniProgramSections from "../components/landing/AlumniProgramSection"
import Hero from "../components/landing/Hero"
import MarketingOpsCurriculumSection from "../components/landing/MarketingOpsCurriculumSection"
import MartechMasteryWorksSection from "../components/landing/MartechMasteryWorksSection"
import ProgramFAQSection from "../components/landing/ProgramFAQSection"
import RealProjectsSection from "../components/landing/RealProjectsSection"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AlumniProgramSections/>
      <MartechMasteryWorksSection />
      <MarketingOpsCurriculumSection />
      <RealProjectsSection />
      <ProgramFAQSection /> 
    </div>
  )
}

export default LandingPage