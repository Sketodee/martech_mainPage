import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaGlobe, FaDollarSign, FaHandshake } from 'react-icons/fa';

const ImpactSection = () => {
  const { t } = useTranslation();

  // Extract all translatable content
  const impactTitle = t("impactSection.impact.title");
  const graduatesText = t("impactSection.impact.graduates");
  const jobPlacementText = t("impactSection.impact.jobPlacement");
  const countriesText = t("impactSection.impact.countries");
  const averageSalaryText = t("impactSection.impact.averageSalary");
  
  const nextStoryTitle = t("impactSection.nextStory.title");
  const nextStoryDescription = t("impactSection.nextStory.description");
  const applyButtonText = t("impactSection.nextStory.applyButtonText");

  return (
    <div className="bg-gray-50 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Our Impact So Far Section */}
        <div className="text-center mb-12">
          <h2 className="
              inline-block text-3xl  font-bold  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
            {impactTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 300+ Graduates */}
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-3 rounded-lg mb-3">
                <FaGraduationCap className="w-6 h-6 text-amber-600" />
              </div>
              <p className="font-semibold text-gray-900">{graduatesText}</p>
            </div>

            {/* 65% Job Placement */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-3 rounded-lg mb-3">
                <FaHandshake className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="font-semibold text-gray-900">{jobPlacementText}</p>
            </div>

            {/* 10+ Countries */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-lg mb-3">
                <FaGlobe className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">{countriesText}</p>
            </div>

            {/* Average Salary */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-lg mb-3">
                <FaDollarSign className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">{averageSalaryText}</p>
            </div>
          </div>
        </div>

        {/* Join the Next Success Story Section */}
        <div className="text-center">
            <h2 className="
              inline-block text-3xl  font-bold  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
            {nextStoryTitle}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {nextStoryDescription}
          </p>
          <button className="text-white sm:w-auto px-8 py-4 bg-gradient-to-b from-[var(--color-blueFour)] to-[var(--color-blueOne)]  rounded-full font-semibold hover:from-gray-950 hover:to-[var(--color-blueThree)] transition-all duration-100 transform hover:scale-105">
                {applyButtonText}
              </button>

        </div>
      </div>
    </div>
  );
};

export default ImpactSection;