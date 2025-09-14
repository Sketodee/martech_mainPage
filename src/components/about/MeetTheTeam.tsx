import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FiUsers, 
  FiTool, 
  FiTarget, 
  FiRepeat 
} from 'react-icons/fi';
import Bukola from '../../assets/Bukola Odunaiya - Headshot.jpeg.jpg';
import Ola from '../../assets/Ola Daranijo New Headshot.jpeg.jpg'
import Carol from '../../assets/Carol Apaestagui Profile.jpeg.jpg'
import Deji from '../../assets//Deji Sangowawa.png'


const MeetTheTeam: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: isMobile ? 0.01 : 0.1, // Very low threshold for instant mobile response
        rootMargin: isMobile ? '100px 0px 100px 0px' : '50px' // Large margin for early mobile detection
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Mobile-responsive animation classes for directional slides
  const getSlideAnimation = (direction: 'left' | 'right' | 'top' | 'bottom', isMobileDevice: boolean) => {
    const mobileDistance = isMobileDevice ? '20px' : '40px';
    const desktopDistance = '60px';
    const distance = isMobileDevice ? mobileDistance : desktopDistance;
    
    switch (direction) {
      case 'left':
        return isVisible 
          ? 'opacity-100 translate-x-0 scale-100' 
          : `opacity-0 -translate-x-[${distance}] scale-95`;
      case 'right':
        return isVisible 
          ? 'opacity-100 translate-x-0 scale-100' 
          : `opacity-0 translate-x-[${distance}] scale-95`;
      case 'top':
        return isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : `opacity-0 -translate-y-[${distance}] scale-95`;
      case 'bottom':
        return isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : `opacity-0 translate-y-[${distance}] scale-95`;
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  // Extract all translatable content
  const whyWorksTitle = t("meetTheTeamSection.whyWorks.title");
  const whyWorksSubtitle = t("meetTheTeamSection.whyWorks.subtitle");
  
  const teamTitle = t("meetTheTeamSection.team.title");
  const teamDescription = t("meetTheTeamSection.team.description");

  // Features with translations
  const features = [
    {
      icon: <FiUsers className="w-8 h-8 text-white" />,
      title: t("meetTheTeamSection.features.builtByExperts.title"),
      description: t("meetTheTeamSection.features.builtByExperts.description")
    },
    {
      icon: <FiTool className="w-8 h-8 text-white" />,
      title: t("meetTheTeamSection.features.realToolExperience.title"), 
      description: t("meetTheTeamSection.features.realToolExperience.description")
    },
    {
      icon: <FiTarget className="w-8 h-8 text-white" />,
      title: t("meetTheTeamSection.features.jobFocusedTraining.title"),
      description: t("meetTheTeamSection.features.jobFocusedTraining.description")
    },
    {
      icon: <FiRepeat className="w-8 h-8 text-white" />,
      title: t("meetTheTeamSection.features.repeatableSystems.title"),
      description: t("meetTheTeamSection.features.repeatableSystems.description")
    }
  ];

  // Team members with translations
  const teamMembers = [
    {
      name: "Ola Daranijo",
      role: t("meetTheTeamSection.teamMembers.sarahChen.role"),
      image: Ola
    },
    {
      name: "Bukola Odunaiya", 
      role: t("meetTheTeamSection.teamMembers.mikeTorres.role"),
      image: Bukola
    },
    {
      name: "Carol Apaestagui",
      role: t("meetTheTeamSection.teamMembers.malikBanjo.role"), 
      image: Carol
    },
    {
      name: "Deji Sangowawa",
      role: t("meetTheTeamSection.teamMembers.jennaKim.role"),
      image: Deji
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Slides from Top */}
        <div className={`
          text-center pt-16 pb-12 transition-all ease-out
          ${isMobile ? 'duration-400' : 'duration-500'}
          ${getSlideAnimation('top', isMobile)}
        `}
        style={{ 
          transitionDelay: isMobile ? '50ms' : '100ms'
        } as React.CSSProperties}
        >
          <h2 className="
              inline-block text-4xl md:text-5xl font-bold mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
             {whyWorksTitle}
            </h2>

          <p className={`
            text-lg text-gray-600 max-w-md mx-auto transition-all ease-out
            ${isMobile ? 'duration-350' : 'duration-400'}
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : isMobile 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-0 translate-y-6'
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '150ms' : '200ms'
          } as React.CSSProperties}
          >
            {whyWorksSubtitle}
          </p>
        </div>

        {/* Features Grid - Alternating Left/Right Slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ease-out group
                hover:-translate-y-2
                ${isMobile ? 'duration-300' : 'duration-350'}
                ${index % 2 === 0 
                  ? getSlideAnimation('left', isMobile)
                  : getSlideAnimation('right', isMobile)
                }
              `}
              style={{ 
                transitionDelay: isMobile 
                  ? `${500 + index * 150}ms`
                  : `${600 + index * 200}ms`
              } as React.CSSProperties}
            >
              <div className={`
                w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 
                transition-all ease-out
                ${isMobile 
                  ? 'duration-200 group-hover:scale-105' 
                  : 'duration-250 group-hover:scale-110 group-hover:rotate-12'
                }
                ${isVisible 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : isMobile 
                    ? 'opacity-0 scale-75' 
                    : 'opacity-0 scale-50 rotate-45'
                }
              `}
              style={{ 
                transitionDelay: isMobile 
                  ? `${700 + index * 50}ms`
                  : `${800 + index * 100}ms`
              } as React.CSSProperties}
              >
                {feature.icon}
              </div>
              <h3 className={`
                text-xl font-semibold text-gray-900 mb-4 transition-all ease-out
                ${isMobile ? 'duration-250' : 'duration-300'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : isMobile 
                    ? 'opacity-0 translate-y-2' 
                    : 'opacity-0 translate-y-3'
                }
              `}
              style={{ 
                transitionDelay: isMobile 
                  ? `${900 + index * 50}ms`
                  : `${1000 + index * 100}ms`
              } as React.CSSProperties}
              >
                {feature.title}
              </h3>
              <p className={`
                text-gray-600 leading-relaxed transition-all ease-out
                ${isMobile ? 'duration-250' : 'duration-300'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : isMobile 
                    ? 'opacity-0 translate-y-2' 
                    : 'opacity-0 translate-y-3'
                }
              `}
              style={{ 
                transitionDelay: isMobile 
                  ? `${1100 + index * 50}ms`
                  : `${1200 + index * 100}ms`
              } as React.CSSProperties}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center pb-16">
          {/* Team Header - Slides from Bottom */}
          <div className={`
            transition-all ease-out
            ${isMobile ? 'duration-400' : 'duration-500'}
            ${getSlideAnimation('bottom', isMobile)}
          `}
          style={{ 
            transitionDelay: isMobile ? '650ms' : '800ms'
          } as React.CSSProperties}
          >
            <h2 className="
                inline-block text-4xl md:text-5xl font-bold mb-4
                bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
                bg-clip-text !text-transparent
                [-webkit-text-fill-color:transparent]
              ">
               {teamTitle}
              </h2>
            <p className={`
              text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all ease-out
              ${isMobile ? 'duration-350' : 'duration-400'}
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : isMobile 
                  ? 'opacity-0 translate-y-4' 
                  : 'opacity-0 translate-y-6'
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '750ms' : '900ms'
            } as React.CSSProperties}
            >
              {teamDescription}
            </p>
          </div>

          {/* Team Grid - Alternating Directions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              // Determine slide direction: 0,2 from left, 1,3 from right
              const slideDirection = index % 2 === 0 ? 'left' : 'right';
              
              return (
                <div 
                  key={index}
                  className={`
                    group cursor-pointer transition-all ease-out
                    ${isMobile ? 'duration-350' : 'duration-400'}
                    ${getSlideAnimation(slideDirection, isMobile)}
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${1700 + index * 100}ms`
                      : `${2000 + index * 150}ms`
                  } as React.CSSProperties}
                >
                  <div className={`
                    relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all ease-out
                    ${isMobile 
                      ? 'duration-250 hover:-translate-y-1' 
                      : 'duration-350 hover:-translate-y-2'
                    }
                  `}>
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className={`
                          w-full h-full object-cover transition-all ease-out
                          ${isMobile 
                            ? 'duration-200 group-hover:scale-105' 
                            : 'duration-350 group-hover:scale-110'
                          }
                          ${isVisible 
                            ? 'opacity-100 scale-100' 
                            : isMobile 
                              ? 'opacity-0 scale-95' 
                              : 'opacity-0 scale-90'
                          }
                        `}
                        style={{ 
                          transitionDelay: isMobile 
                            ? `${1900 + index * 100}ms`
                            : `${2200 + index * 150}ms`
                        } as React.CSSProperties}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Text Overlay */}
                      <div className={`
                        absolute bottom-0 left-0 right-0 p-6 text-white transition-all ease-out
                        ${isMobile ? 'duration-300' : 'duration-350'}
                        ${isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : isMobile 
                            ? 'opacity-0 translate-y-4' 
                            : 'opacity-0 translate-y-6'
                        }
                      `}
                      style={{ 
                        transitionDelay: isMobile 
                          ? `${2100 + index * 100}ms`
                          : `${2400 + index * 150}ms`
                      } as React.CSSProperties}
                      >
                        <h4 className="text-xl font-bold mb-1">
                          {member.name}
                        </h4>
                        <p className="text-blue-200 text-sm font-medium">
                          {member.role}
                        </p>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className={`
                        absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity ease-out
                        ${isMobile ? 'duration-150' : 'duration-250'}
                      `}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeetTheTeam;