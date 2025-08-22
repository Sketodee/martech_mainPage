import { useTranslation } from 'react-i18next';
import { 
  FaCogs, 
  FaDatabase, 
  FaRocket 
} from 'react-icons/fa';

const RealProjectsSection = () => {
  const { t } = useTranslation();

  // Extract all translatable content
  const sectionTitle = t("realProjectsSection.title");
  const sectionDescription = t("realProjectsSection.description");

  // Projects with translations
  const projects = [
    {
      id: 1,
      title: t("realProjectsSection.projects.marketingAutomation.title"),
      description: t("realProjectsSection.projects.marketingAutomation.description"),
      icon: <FaCogs className="w-8 h-8" />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500"
    },
    {
      id: 2,
      title: t("realProjectsSection.projects.crmIntegration.title"),
      description: t("realProjectsSection.projects.crmIntegration.description"),
      icon: <FaDatabase className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      id: 3,
      title: t("realProjectsSection.projects.campaignExecution.title"),
      description: t("realProjectsSection.projects.campaignExecution.description"),
      icon: <FaRocket className="w-8 h-8" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="
              inline-block text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {sectionTitle}
            </h2>
  
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`${project.iconBg} ${project.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealProjectsSection;