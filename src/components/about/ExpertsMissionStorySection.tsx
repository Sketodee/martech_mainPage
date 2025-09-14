import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import FormModal from '../FormModal';

const ExpertsMissionStorySection: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

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
  const expertsTitle = t("expertsMissionStorySection.experts.title");
  const expertsDescription = t("expertsMissionStorySection.experts.description");
  const expertsButtonText = t("expertsMissionStorySection.experts.buttonText");
  
  const missionTitle = t("expertsMissionStorySection.mission.title");
  const missionParagraph1 = t("expertsMissionStorySection.mission.paragraph1");
  const missionParagraph2 = t("expertsMissionStorySection.mission.paragraph2");
  
  const storyTitle = t("expertsMissionStorySection.story.title");
  const storyParagraph1 = t("expertsMissionStorySection.story.paragraph1");
  const storyParagraph2 = t("expertsMissionStorySection.story.paragraph2");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        
        {/* Built by Experts Section */}
        <div className={`
          text-center mb-20 transition-all ease-out
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
          <h2 className="
              inline-block text-3xl md:text-4xl font-bold  lg:text-5xl  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {expertsTitle}
            </h2>

          <p className={`
            text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12
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
            {expertsDescription}
          </p>
          
         <button onClick={() => setOpen(true)} className={`
           text-white sm:w-auto px-8 py-4 bg-gradient-to-b from-[var(--color-blueFour)] to-[var(--color-blueOne)]  
           rounded-full font-semibold transition-all ease-out transform
           hover:from-gray-950 hover:to-[var(--color-blueThree)] hover:shadow-2xl
           active:scale-95
           ${isMobile 
             ? 'duration-250 hover:scale-105' 
             : 'duration-350 hover:scale-110 hover:rotate-1'
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
           transitionDelay: isMobile ? '250ms' : '300ms'
         } as React.CSSProperties}
         >
           {expertsButtonText}
         </button>
        </div>

        {/* Our Mission Section */}
        <div className={`
          text-center mb-20 transition-all ease-out
          ${isMobile ? 'duration-400' : 'duration-500'}
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : getAnimationClasses(
                'opacity-0 translate-y-10',
                'opacity-0 translate-y-5'
              )
          }
        `}
        style={{ 
          transitionDelay: isMobile ? '350ms' : '400ms'
        } as React.CSSProperties}
        >
           <h2 className="
              inline-block text-2xl md:text-3xl font-bold mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
             {missionTitle}
            </h2>
          
          <div className="text-gray-600 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p className={`
              transition-all ease-out
              ${isMobile ? 'duration-300' : 'duration-350'}
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : getAnimationClasses(
                    'opacity-0 translate-y-4 scale-95',
                    'opacity-0 translate-y-2 scale-98'
                  )
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '450ms' : '500ms'
            } as React.CSSProperties}
            >
              {missionParagraph1}
            </p>
            
            <p className={`
              transition-all ease-out
              ${isMobile ? 'duration-300' : 'duration-350'}
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : getAnimationClasses(
                    'opacity-0 translate-y-4 scale-95',
                    'opacity-0 translate-y-2 scale-98'
                  )
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '550ms' : '600ms'
            } as React.CSSProperties}
            >
              {missionParagraph2}
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className={`
          text-center transition-all ease-out
          ${isMobile ? 'duration-400' : 'duration-500'}
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : getAnimationClasses(
                'opacity-0 translate-y-10',
                'opacity-0 translate-y-5'
              )
          }
        `}
        style={{ 
          transitionDelay: isMobile ? '650ms' : '700ms'
        } as React.CSSProperties}
        >
          <h2 className="
              inline-block text-2xl md:text-3xl font-bold mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
             {storyTitle}
            </h2>
          
          <div className="text-gray-600 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p className={`
              transition-all ease-out
              ${isMobile ? 'duration-300' : 'duration-350'}
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : getAnimationClasses(
                    'opacity-0 translate-y-4 scale-95',
                    'opacity-0 translate-y-2 scale-98'
                  )
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '750ms' : '800ms'
            } as React.CSSProperties}
            >
              {storyParagraph1}
            </p>
            
            <p className={`
              transition-all ease-out
              ${isMobile ? 'duration-300' : 'duration-350'}
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : getAnimationClasses(
                    'opacity-0 translate-y-4 scale-95',
                    'opacity-0 translate-y-2 scale-98'
                  )
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '850ms' : '900ms'
            } as React.CSSProperties}
            >
              {storyParagraph2}
            </p>
          </div>
        </div>
      </div>
        <FormModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ExpertsMissionStorySection;