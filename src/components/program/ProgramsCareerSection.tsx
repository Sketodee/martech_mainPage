import { useTranslation } from 'react-i18next';
import programImage from '../../assets/product.jpg';

const ProgramsCareerSection = () => {
  const { t } = useTranslation();

  // Extract all translatable content
  const programsTitle = t("programsCareerSection.programs.title");
  const programsDescription = t("programsCareerSection.programs.description");
  const programsImageAlt = t("programsCareerSection.programs.imageAlt");
  
  const careerTitle = t("programsCareerSection.career.title");
  const careerDescription = t("programsCareerSection.career.description");
  const careerPromise = t("programsCareerSection.career.careerPromise");
  const videoInstruction = t("programsCareerSection.career.videoInstruction");
  const videoTitle = t("programsCareerSection.career.videoTitle");
  const videoCaption = t("programsCareerSection.career.videoCaption");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - About Us Content */}
          <div className="space-y-6">
            <h2 className="
              inline-block text-4xl md:text-5xl font-bold  mb-6
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
            {programsTitle}
            </h2>
            
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
              <p>
                {programsDescription}
              </p>
            </div>
          </div>

          {/* Right Column - Business Meeting Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={programImage}
                alt={programsImageAlt}
                className="w-full h-auto object-cover"
              />
              
              {/* Subtle overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
              
              {/* Digital elements overlay to simulate the tech environment */}
              <div className="absolute top-6 right-6 w-16 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30"></div>
              <div className="absolute bottom-6 left-6 w-12 h-8 bg-blue-500/20 backdrop-blur-sm rounded border border-blue-400/30"></div>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="text-center mb-16">
          <h2 className="
              inline-block text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
            {careerTitle}
            </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            {careerDescription}
         </p>

          {/* Career Promise */}
          <div className="mb-8">
            <p className="text-gray-700 font-medium text-lg mb-4">
              {careerPromise}
            </p>
            <p className="text-gray-600 flex items-center justify-center space-x-2">
              <span>{videoInstruction}</span>
              <span className="text-xl">👇</span>
            </p>
          </div>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 p-2 md:p-2 shadow-lg">
           <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
     src="https://player.vimeo.com/video/1109831458"
    title={videoTitle}
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

            <p className="text-gray-600 text-sm md:text-base font-medium mt-4 text-center">
              {videoCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsCareerSection