import AlumniProgramSections from "../components/landing/AlumniProgramSection"
import MarketingOpsCurriculumSection from "../components/landing/MarketingOpsCurriculumSection"
import MartechMasteryWorksSection from "../components/landing/MartechMasteryWorksSection"
import RealProjectsSection from "../components/landing/RealProjectsSection"
import ProgramsCareerSection from "../components/program/ProgramsCareerSection"


const ProgramPage = () => {
  return (
    <div>
      <ProgramsCareerSection />
      <MarketingOpsCurriculumSection />
      <RealProjectsSection />
      <AlumniProgramSections/>
      <MartechMasteryWorksSection />
    </div>
  )
}

export default ProgramPage