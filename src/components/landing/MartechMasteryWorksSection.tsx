import { useTranslation } from 'react-i18next';
import { 
  FaUsers, 
  FaTools, 
  FaBriefcase, 
  FaCogs 
} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const MarTechMasteryWorksSection: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for the whole section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        // On mobile, be more conservative - require more of the section to be visible
        if (isMobile) {
          // Only trigger when at least 30% of section is visible on mobile
          const visibilityRatio = entry.intersectionRatio;
          setIsVisible(visibilityRatio > 0.3);
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      { 
        threshold: isMobile ? [0, 0.1, 0.2, 0.3, 0.4, 0.5] : 0.1, // Multiple thresholds for mobile
        rootMargin: isMobile ? '-50px 0px -50px 0px' : '50px' // Negative margin to delay mobile triggers
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Extract all translatable content
  const sectionTitle = t("marTechMasteryWorks.title");
  const sectionSubtitle = t("marTechMasteryWorks.subtitle");

  // Features with translations
  const features = [
    {
      id: 1,
      title: t("marTechMasteryWorks.features.builtByExperts.title"),
      description: t("marTechMasteryWorks.features.builtByExperts.description"),
      icon: <FaUsers className="w-8 h-8" />,
      bgColor: "bg-blue-200",
      textColor: "text-gray-800",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: t("marTechMasteryWorks.features.realToolExperience.title"),
      description: t("marTechMasteryWorks.features.realToolExperience.description"),
      icon: <FaTools className="w-8 h-8" />,
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconColor: "text-orange-500"
    },
    {
      id: 3,
      title: t("marTechMasteryWorks.features.jobFocusedTraining.title"),
      description: t("marTechMasteryWorks.features.jobFocusedTraining.description"),
      icon: <FaBriefcase className="w-8 h-8" />,
      bgColor: "bg-blue-200",
      textColor: "text-gray-800",
      iconColor: "text-red-500"
    },
    {
      id: 4,
      title: t("marTechMasteryWorks.features.repeatableSystems.title"),
      description: t("marTechMasteryWorks.features.repeatableSystems.description"),
      icon: <FaCogs className="w-8 h-8" />,
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconColor: "text-blue-500"
    }
  ];

  // Mobile-responsive animation classes
  const getAnimationClasses = (baseAnimation: string, mobileAnimation: string) => {
    return isMobile ? mobileAnimation : baseAnimation;
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="
              inline-block text-3xl md:text-4xl font-bold  mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {sectionTitle}
            </h2>

          <p className={`
            text-gray-600 text-lg transition-all ease-out
            ${isMobile ? 'duration-400' : 'duration-500'}
            ${isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : getAnimationClasses(
                  'opacity-0 translate-y-8 scale-95',
                  'opacity-0 translate-y-4 scale-98'
                )
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '100ms' : '200ms'
          } as React.CSSProperties}
          >
            {sectionSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`
          grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12
          transition-all ease-out
          ${isMobile ? 'duration-400' : 'duration-600'}
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : getAnimationClasses(
                'opacity-0 translate-y-12',
                'opacity-0 translate-y-6'
              )
          }
        `}
        style={{ 
          transitionDelay: isMobile ? '100ms' : '200ms'
        } as React.CSSProperties}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                ${feature.bgColor} ${feature.textColor} rounded-2xl p-8 shadow-lg 
                hover:shadow-2xl transition-all ease-out
                ${isMobile 
                  ? 'duration-250 hover:scale-102' 
                  : 'duration-350 hover:scale-105 hover:-rotate-1'
                }
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                  : getAnimationClasses(
                      'opacity-0 translate-y-10 scale-90 rotate-2',
                      'opacity-0 translate-y-4 scale-95'
                    )
                }
              `}
              style={{ 
                transitionDelay: isMobile 
                  ? `${300 + index * 50}ms`
                  : `${600 + index * 100}ms`
              } as React.CSSProperties}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`
                  ${feature.iconColor} transition-all ease-out
                  ${isMobile 
                    ? 'duration-250' 
                    : 'duration-350 hover:scale-110 hover:rotate-12'
                  }
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : getAnimationClasses(
                        'opacity-0 translate-y-4 scale-75 rotate-45',
                        'opacity-0 translate-y-2 scale-90'
                      )
                  }
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${400 + index * 50}ms`
                    : `${800 + index * 100}ms`
                } as React.CSSProperties}
                >
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`
                    text-xl font-bold transition-all ease-out
                    ${isMobile ? 'duration-250' : 'duration-300'}
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : getAnimationClasses(
                          'opacity-0 translate-y-3',
                          'opacity-0 translate-y-2'
                        )
                    }
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${500 + index * 50}ms`
                      : `${1000 + index * 100}ms`
                  } as React.CSSProperties}
                  >
                    {feature.title}
                  </h3>
                  <p className={`
                    text-base leading-relaxed transition-all ease-out
                    ${isMobile ? 'duration-250' : 'duration-300'}
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : getAnimationClasses(
                          'opacity-0 translate-y-3',
                          'opacity-0 translate-y-2'
                        )
                    }
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${600 + index * 50}ms`
                      : `${1200 + index * 100}ms`
                  } as React.CSSProperties}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarTechMasteryWorksSection;