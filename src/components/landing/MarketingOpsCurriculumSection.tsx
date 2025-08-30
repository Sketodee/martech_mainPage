import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const MarketingOpsCurriculumSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredWeek, setHoveredWeek] = useState<any>(null);
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

  // Mobile-responsive animation classes
  const getAnimationClasses = (baseAnimation: string, mobileAnimation: string) => {
    return isMobile ? mobileAnimation : baseAnimation;
  };

  // Extract all translatable content
  const sectionTitle = t("marketingopscurriculumsection.title");
  const sectionDescription = t("marketingopscurriculumsection.description");
  const imageAlt = t("marketingopscurriculumsection.imageAlt");

  // Curriculum weeks with translations
  const curriculumWeeks = [
    {
      id: 1,
      weeks: t("marketingopscurriculumsection.weeks.week1to3.weeks"),
      title: t("marketingopscurriculumsection.weeks.week1to3.title"),
      description: t("marketingopscurriculumsection.weeks.week1to3.description"),
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop" // Analytics and data visualization
    },
    {
      id: 2,
      weeks: t("marketingopscurriculumsection.weeks.week4to6.weeks"),
      title: t("marketingopscurriculumsection.weeks.week4to6.title"),
      description: t("marketingopscurriculumsection.weeks.week4to6.description"),
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop" // Person working on laptop with tools
    },
    {
      id: 3,
      weeks: t("marketingopscurriculumsection.weeks.week7to9.weeks"),
      title: t("marketingopscurriculumsection.weeks.week7to9.title"),
      description: t("marketingopscurriculumsection.weeks.week7to9.description"),
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop" // Team working on campaigns
    },
    {
      id: 4,
      weeks: t("marketingopscurriculumsection.weeks.week10to12.weeks"),
      title: t("marketingopscurriculumsection.weeks.week10to12.title"),
      description: t("marketingopscurriculumsection.weeks.week10to12.description"),
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" // Professional headshot/interview prep
    }
  ];

  // Default image when no week is hovered
  const defaultImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop";
  
  // Get current image based on hovered week
  const getCurrentImage = () => {
    if (hoveredWeek !== null) {
      const week = curriculumWeeks.find(w => w.id === hoveredWeek);
      return week ? week.image : defaultImage;
    }
    return defaultImage;
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="
              text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {sectionTitle}
            </h2>
          <p className={`
            text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto
            transition-all ease-out
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
            {sectionDescription}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`
          grid lg:grid-cols-2 gap-12 lg:gap-16 items-start
          transition-all ease-out
          ${isMobile ? 'duration-400' : 'duration-500'}
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
          
          {/* Left Column - Curriculum Timeline */}
          <div className="space-y-2">
            {curriculumWeeks.map((week, index) => (
              <div
                key={week.id}
                className={`
                  ${week.bgColor} ${week.borderColor} border-2 rounded-2xl p-6 shadow-sm 
                  hover:shadow-2xl transition-all cursor-pointer transform
                  ${isMobile 
                    ? 'duration-200 hover:scale-102' 
                    : 'duration-250 hover:scale-105'
                  }
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : getAnimationClasses(
                        'opacity-0 translate-y-8 scale-90 rotate-1',
                        'opacity-0 translate-y-4 scale-95'
                      )
                  }
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${400 + index * 150}ms`
                    : `${600 + index * 200}ms`
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredWeek(week.id)}
                onMouseLeave={() => setHoveredWeek(null)}
              >
                <div className="space-y-3">
                  <div className={`
                    text-blue-600 font-bold text-sm uppercase tracking-wide
                    transition-all ease-out
                    ${isMobile ? 'duration-150' : 'duration-200'}
                    ${isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : getAnimationClasses(
                          'opacity-0 -translate-x-4',
                          'opacity-0 -translate-x-2'
                        )
                    }
                  `}
                  style={{ 
                    transitionDelay: isMobile 
                      ? `${500 + index * 50}ms`
                      : `${700 + index * 100}ms`
                  } as React.CSSProperties}
                  >
                    {week.weeks}
                  </div>
                  <h3 className={`
                    text-xl font-bold text-gray-900
                    transition-all ease-out
                    ${isMobile ? 'duration-200' : 'duration-250'}
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
                      : `${800 + index * 100}ms`
                  } as React.CSSProperties}
                  >
                    {week.title}
                  </h3>
                  <p className={`
                    text-gray-600 leading-relaxed
                    transition-all ease-out
                    ${isMobile ? 'duration-200' : 'duration-250'}
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
                      ? `${700 + index * 50}ms`
                      : `${900 + index * 100}ms`
                  } as React.CSSProperties}
                  >
                    {week.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Dynamic Image */}
          <div className={`
            relative transition-all ease-out
            ${isMobile ? 'duration-400' : 'duration-600'}
            ${isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : getAnimationClasses(
                  'opacity-0 translate-x-12 scale-95',
                  'opacity-0 translate-x-6 scale-98'
                )
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '400ms' : '600ms'
          } as React.CSSProperties}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={getCurrentImage()}
                alt={imageAlt}
                className={`
                  w-full h-auto object-cover transition-all ease-in-out
                  ${isMobile ? 'duration-200' : 'duration-250'}
                  ${isVisible 
                    ? 'opacity-100 scale-100' 
                    : getAnimationClasses(
                        'opacity-0 scale-110',
                        'opacity-0 scale-105'
                      )
                  }
                `}
                style={{ 
                  transitionDelay: isMobile ? '1000ms' : '1400ms'
                } as React.CSSProperties}
              />
              
              {/* Subtle overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
              
              {/* Digital workspace elements overlay */}
              <div className={`
                absolute top-6 right-6 w-16 h-12 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center
                transition-all ease-out
                ${isMobile ? 'duration-300' : 'duration-350'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : getAnimationClasses(
                      'opacity-0 -translate-y-4 scale-75',
                      'opacity-0 -translate-y-2 scale-90'
                    )
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '600ms' : '800ms'
              } as React.CSSProperties}
              >
                <div className="w-8 h-6 bg-blue-400/70 rounded-sm"></div>
              </div>
              
              <div className={`
                absolute bottom-6 left-6 w-20 h-16 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 p-2
                transition-all ease-out
                ${isMobile ? 'duration-300' : 'duration-350'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : getAnimationClasses(
                      'opacity-0 translate-y-4 scale-75',
                      'opacity-0 translate-y-2 scale-90'
                    )
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '700ms' : '800ms'
              } as React.CSSProperties}
              >
                <div className="space-y-1">
                  <div className="w-full h-2 bg-green-400/70 rounded-full"></div>
                  <div className="w-3/4 h-2 bg-blue-400/70 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-purple-400/70 rounded-full"></div>
                </div>
              </div>

              {/* Progress indicators */}
              <div className={`
                absolute top-1/2 left-6 w-3 h-3 bg-blue-500 rounded-full
                transition-all ease-out
                ${isMobile ? 'duration-250' : 'duration-300'}
                ${isVisible 
                  ? 'opacity-100 scale-100 animate-pulse' 
                  : getAnimationClasses(
                      'opacity-0 scale-50',
                      'opacity-0 scale-75'
                    )
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '800ms' : '1000ms'
              } as React.CSSProperties}
              ></div>
              <div className={`
                absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-500 rounded-full
                transition-all ease-out
                ${isMobile ? 'duration-250' : 'duration-300'}
                ${isVisible 
                  ? 'opacity-100 scale-100 animate-pulse' 
                  : getAnimationClasses(
                      'opacity-0 scale-50',
                      'opacity-0 scale-75'
                    )
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '800ms' : '1200ms',
                animationDelay: '0.5s'
              } as React.CSSProperties}
              ></div>
              
              {/* Week indicator overlay */}
              {hoveredWeek && (
                <div className={`
                  absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium
                  transition-all ease-out
                  ${isMobile ? 'duration-150' : 'duration-200'}
                  opacity-100 scale-100
                `}>
                  {curriculumWeeks.find(w => w.id === hoveredWeek)?.weeks}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingOpsCurriculumSection;