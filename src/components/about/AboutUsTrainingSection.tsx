import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../../assets/about.jpg'

const AboutUsTrainingSection: React.FC = () => {
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

  // Using a business/marketing related YouTube video

  // Extract all translatable content
  const aboutTitle = t("aboutUsTrainingSection.about.title");
  const aboutDescription = t("aboutUsTrainingSection.about.description");
  const trainingTitle = t("aboutUsTrainingSection.training.title");
  const trainingDescription = t("aboutUsTrainingSection.training.description");
  // const careerPromise = t("aboutUsTrainingSection.training.careerPromise");
  // const videoInstruction = t("aboutUsTrainingSection.training.videoInstruction");
  const businessImageAlt = t("aboutUsTrainingSection.about.imageAlt");
  // const videoCaption = t("aboutUsTrainingSection.training.videoCaption");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        {/* About Us Section */}
        <div className={`
          grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20
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
            transitionDelay: isMobile ? '50ms' : '100ms'
          } as React.CSSProperties}
        >
          {/* Left Column - About Us Content */}
          <div className="space-y-6">
            <h2 className="
              inline-block text-4xl md:text-5xl font-bold  mb-6
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {aboutTitle}
            </h2>

            <div className={`
              text-gray-600 text-lg leading-relaxed space-y-4
              transition-all ease-out
              ${isMobile ? 'duration-350' : 'duration-400'}
              ${isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : getAnimationClasses(
                  'opacity-0 translate-y-6 scale-95',
                  'opacity-0 translate-y-3 scale-98'
                )
              }
            `}
              style={{
                transitionDelay: isMobile ? '150ms' : '200ms'
              } as React.CSSProperties}
            >
              <p>
                {aboutDescription}
              </p>
            </div>
          </div>

          {/* Right Column - Business Meeting Image */}
          <div className={`
            relative transition-all ease-out
            ${isMobile ? 'duration-400' : 'duration-500'}
            ${isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : getAnimationClasses(
                'opacity-0 translate-x-12 scale-95',
                'opacity-0 translate-x-6 scale-98'
              )
            }
          `}
            style={{
              transitionDelay: isMobile ? '250ms' : '300ms'
            } as React.CSSProperties}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt={businessImageAlt}
                className={`
                  w-full h-auto object-cover transition-all ease-out
                  ${isMobile ? 'duration-300' : 'duration-350'}
                  ${isVisible
                    ? 'opacity-100 scale-100'
                    : getAnimationClasses(
                      'opacity-0 scale-110',
                      'opacity-0 scale-105'
                    )
                  }
                `}
                style={{
                  transitionDelay: isMobile ? '350ms' : '400ms'
                } as React.CSSProperties}
              />

              {/* Subtle overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>

              {/* Digital elements overlay to simulate the tech environment */}
              <div className={`
                absolute top-6 right-6 w-16 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30
                transition-all ease-out
                ${isMobile ? 'duration-250' : 'duration-300'}
                ${isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : getAnimationClasses(
                    'opacity-0 -translate-y-4 scale-75',
                    'opacity-0 -translate-y-2 scale-90'
                  )
                }
              `}
                style={{
                  transitionDelay: isMobile ? '450ms' : '500ms'
                } as React.CSSProperties}
              ></div>
              <div className={`
                absolute bottom-6 left-6 w-12 h-8 bg-blue-500/20 backdrop-blur-sm rounded border border-blue-400/30
                transition-all ease-out
                ${isMobile ? 'duration-250' : 'duration-300'}
                ${isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : getAnimationClasses(
                    'opacity-0 translate-y-4 scale-75',
                    'opacity-0 translate-y-2 scale-90'
                  )
                }
              `}
                style={{
                  transitionDelay: isMobile ? '550ms' : '600ms'
                } as React.CSSProperties}
              ></div>
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
            {trainingTitle}
          </h2>

          <p className={`
            text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12
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
              transitionDelay: isMobile ? '650ms' : '700ms'
            } as React.CSSProperties}
          >
            {trainingDescription}
          </p>

          {/* Career Promise */}
          <div className={`
            mb-8 transition-all ease-out
            ${isMobile ? 'duration-350' : 'duration-400'}
            ${isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : getAnimationClasses(
                'opacity-0 translate-y-6 scale-95',
                'opacity-0 translate-y-3 scale-98'
              )
            }
          `}
            style={{
              transitionDelay: isMobile ? '750ms' : '800ms'
            } as React.CSSProperties}
          >
            {/* <p className={`
              text-gray-700 font-medium text-lg mb-4
              transition-all ease-out
              ${isMobile ? 'duration-300' : 'duration-350'}
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : getAnimationClasses(
                    'opacity-0 translate-y-3',
                    'opacity-0 translate-y-2'
                  )
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '850ms' : '900ms'
            } as React.CSSProperties}
            >
              {careerPromise}
            </p> */}

          </div>
        </div>

        {/* Video Player */}
        <div className={`
          max-w-4xl mx-auto transition-all ease-out
          ${isMobile ? 'duration-500' : 'duration-600'}
          ${isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : getAnimationClasses(
              'opacity-0 translate-y-12 scale-95',
              'opacity-0 translate-y-6 scale-98'
            )
          }
        `}
          style={{
            transitionDelay: isMobile ? '1100ms' : '1200ms'
          } as React.CSSProperties}
        >
          <div className={`
            relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 p-2 md:p-2 shadow-lg
            transition-all ease-out hover:shadow-2xl
            ${isMobile
              ? 'duration-250 hover:scale-102'
              : 'duration-350 hover:scale-105'
            }
          `}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                className={`
                absolute top-0 left-0 w-full h-full rounded-xl shadow-lg
                transition-all ease-out
                ${isMobile ? 'duration-400' : 'duration-500'}
                ${isVisible
                    ? 'opacity-100 scale-100'
                    : getAnimationClasses(
                      'opacity-0 scale-95',
                      'opacity-0 scale-98'
                    )
                  }
    `}
                src="https://player.vimeo.com/video/1109831458"
                title="Vimeo video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  transitionDelay: isMobile ? '1250ms' : '1300ms'
                } as React.CSSProperties}
              ></iframe>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTrainingSection;