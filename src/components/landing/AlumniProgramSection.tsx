import { useTranslation } from 'react-i18next';
import { FaUser, FaChartBar, FaRocket } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const AlumniProgramSections: React.FC = () => {
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

  // Single intersection observer for the whole section
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

  // Extract all translatable content
  const alumniTitle = t("alumniProgramSections.alumni.title");
  const alumniDescription = t("alumniProgramSections.alumni.description");
  const viewMoreButton = t("alumniProgramSections.alumni.viewMoreButton");

  const programTitle = t("alumniProgramSections.program.title");
  const programDescription = t("alumniProgramSections.program.description");

  // Video testimonials with translations
  const videoTestimonials = [
    {
      id: 1,
      youtubeId: "gYPuupsNxuE", // Career change success story
      title: t("alumniProgramSections.alumni.videos.sarah.title")
    },
    {
      id: 2,
      youtubeId: "ZXsQAXx_ao0", // Marketing career transition
      title: t("alumniProgramSections.alumni.videos.mark.title")
    },
    {
      id: 3,
      youtubeId: "JWuMJlyq8yQ", // Tech skills development
      title: t("alumniProgramSections.alumni.videos.jessica.title")
    }
  ];

  // Program targets with translations
  const programTargets = [
    {
      id: 1,
      icon: <FaUser className="w-12 h-12" />,
      title: t("alumniProgramSections.program.targets.careerChangers.title"),
      description: t("alumniProgramSections.program.targets.careerChangers.description")
    },
    {
      id: 2,
      icon: <FaChartBar className="w-12 h-12" />,
      title: t("alumniProgramSections.program.targets.marketers.title"),
      description: t("alumniProgramSections.program.targets.marketers.description")
    },
    {
      id: 3,
      icon: <FaRocket className="w-12 h-12" />,
      title: t("alumniProgramSections.program.targets.futurePros.title"),
      description: t("alumniProgramSections.program.targets.futurePros.description")
    }
  ];

  // Mobile-responsive animation classes
  const getAnimationClasses = (baseAnimation: string, mobileAnimation: string) => {
    return isMobile ? mobileAnimation : baseAnimation;
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        
        {/* What Our Alumni Are Saying */}
        <div className="text-center mb-20">
          <h2 className="
              inline-block text-3xl md:text-4xl font-bold  mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {alumniTitle}
            </h2>
          
          <p className={`
            text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12
            transition-all ease-out
            ${isMobile ? 'duration-800' : 'duration-1000'}
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
            {alumniDescription}
          </p>

          {/* Video Testimonials Grid */}
          <div className={`
            grid grid-cols-1 md:grid-cols-3 gap-8 mb-12
            transition-all ease-out
            ${isMobile ? 'duration-800' : 'duration-1200'}
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : getAnimationClasses(
                  'opacity-0 translate-y-12',
                  'opacity-0 translate-y-6'
                )
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '200ms' : '400ms'
          } as React.CSSProperties}
          >
            {videoTestimonials.map((video, index) => (
              <div
                key={video.id}
                className={`
                  group transition-all ease-out
                  ${isMobile ? 'duration-600' : 'duration-800'}
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : getAnimationClasses(
                        'opacity-0 translate-y-8 scale-90 rotate-2',
                        'opacity-0 translate-y-4 scale-95'
                      )
                  }
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${300 + index * 150}ms`
                    : `${600 + index * 200}ms`
                } as React.CSSProperties}
              >
                <div className={`
                  bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all ease-out
                  ${isMobile 
                    ? 'duration-400 hover:scale-102' 
                    : 'duration-500 hover:scale-105 hover:-rotate-1'
                  }
                `}>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                    <iframe
                      className={`
                        absolute top-0 left-0 w-full h-full rounded-xl
                        transition-all ease-out
                        ${isMobile ? 'duration-500' : 'duration-700'}
                        ${isVisible 
                          ? 'opacity-100 scale-100' 
                          : getAnimationClasses(
                              'opacity-0 scale-75',
                              'opacity-0 scale-90'
                            )
                        }
                      `}
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ 
                        transitionDelay: isMobile 
                          ? `${400 + index * 150}ms`
                          : `${800 + index * 200}ms`
                      } as React.CSSProperties}
                    ></iframe>
                  </div>
                  <h3 className={`
                    text-center text-sm font-medium text-gray-700 mt-3
                    transition-all ease-out
                    ${isMobile ? 'duration-400' : 'duration-600'}
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : getAnimationClasses(
                          'opacity-0 translate-y-4',
                          'opacity-0 translate-y-2'
                        )
                    }
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${500 + index * 150}ms`
                      : `${1000 + index * 200}ms`
                  } as React.CSSProperties}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <button className={`
            text-white sm:w-auto px-8 py-4 bg-gradient-to-b from-[var(--color-blueFour)] to-[var(--color-blueOne)]  
            rounded-full font-semibold transition-all ease-out
            hover:from-gray-950 hover:to-[var(--color-blueThree)] hover:shadow-2xl
            active:scale-95 transform
            ${isMobile 
              ? 'duration-500 hover:scale-105' 
              : 'duration-700 hover:scale-110 hover:rotate-1'
            }
            ${isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : getAnimationClasses(
                  'opacity-0 translate-y-8 scale-90',
                  'opacity-0 translate-y-4 scale-95'
                )
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '700ms' : '1400ms'
          } as React.CSSProperties}
          >
            {viewMoreButton}
          </button>
        </div>

        {/* Who This Program Is For */}
        <div className="text-center">
          <h2 className="
              inline-block text-3xl md:text-4xl font-bold  mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {programTitle}
            </h2>
          
          <p className={`
            text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16
            transition-all ease-out
            ${isMobile ? 'duration-800' : 'duration-1000'}
            ${isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : getAnimationClasses(
                  'opacity-0 translate-y-8 scale-95',
                  'opacity-0 translate-y-4 scale-98'
                )
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '800ms' : '1600ms'
          } as React.CSSProperties}
          >
            {programDescription}
          </p>

          {/* Program Target Grid */}
          <div className={`
            grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12
            transition-all ease-out
            ${isMobile ? 'duration-800' : 'duration-1200'}
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : getAnimationClasses(
                  'opacity-0 translate-y-16',
                  'opacity-0 translate-y-8'
                )
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '1000ms' : '1800ms'
          } as React.CSSProperties}
          >
            {programTargets.map((target, index) => (
              <div
                key={target.id}
                className={`
                  bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ease-out text-center
                  hover:bg-blue-50
                  ${isMobile 
                    ? 'duration-500 hover:scale-102' 
                    : 'duration-800 hover:scale-105 hover:-rotate-1'
                  }
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : getAnimationClasses(
                        'opacity-0 translate-y-12 scale-85 rotate-3',
                        'opacity-0 translate-y-6 scale-95'
                      )
                  }
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${1200 + index * 200}ms`
                    : `${2000 + index * 300}ms`
                } as React.CSSProperties}
              >
                {/* Icon */}
                <div className={`
                  flex justify-center mb-6 transition-all ease-out
                  ${isMobile ? 'duration-500' : 'duration-700'}
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : getAnimationClasses(
                        'opacity-0 translate-y-6 scale-50 rotate-45',
                        'opacity-0 translate-y-3 scale-75'
                      )
                  }
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${1400 + index * 200}ms`
                    : `${2200 + index * 300}ms`
                } as React.CSSProperties}
                >
                  <div className={`
                    w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 
                    hover:bg-blue-200 transition-all duration-300
                    ${isMobile 
                      ? 'hover:scale-105' 
                      : 'hover:scale-110 hover:rotate-12'
                    }
                  `}>
                    {target.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`
                    text-xl font-bold text-gray-900 transition-all ease-out
                    ${isMobile ? 'duration-400' : 'duration-600'}
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : getAnimationClasses(
                          'opacity-0 translate-y-4',
                          'opacity-0 translate-y-2'
                        )
                    }
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${1600 + index * 200}ms`
                      : `${2400 + index * 300}ms`
                  } as React.CSSProperties}
                  >
                    {target.title}
                  </h3>
                  <p className={`
                    text-gray-600 leading-relaxed transition-all ease-out
                    ${isMobile ? 'duration-400' : 'duration-600'}
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : getAnimationClasses(
                          'opacity-0 translate-y-4',
                          'opacity-0 translate-y-2'
                        )
                    }
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${1800 + index * 200}ms`
                      : `${2600 + index * 300}ms`
                  } as React.CSSProperties}
                  >
                    {target.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniProgramSections;