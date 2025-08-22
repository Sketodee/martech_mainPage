import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const TestimonialSection: React.FC = () => {
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

  // Mobile-responsive animation classes for directional slides
  const getSlideAnimation = (direction: 'left' | 'right' | 'top' | 'bottom', isMobileDevice: boolean) => {
    const mobileDistance = '24px';
    const desktopDistance = '48px';
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

  // Using a business/marketing related YouTube video
  const youtubeVideos = [
    { id: "u4ZoJKF_VuA", url: "https://www.youtube.com/embed/u4ZoJKF_VuA" },
    { id: "dQw4w9WgXcQ", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "3JZ_D3ELwOQ", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: "2Vv-BfVoq4g", url: "https://www.youtube.com/embed/2Vv-BfVoq4g" }
  ];

  // Extract all translatable content
  const testimonialsTitle = t("testimonialSection.testimonials.title");
  const testimonialsDescription = t("testimonialSection.testimonials.description");
  const testimonialsImageAlt = t("testimonialSection.testimonials.imageAlt");
  
  const successStoriesTitle = t("testimonialSection.successStories.title");
  const successStoriesDescription = t("testimonialSection.successStories.description");
  const videoInstruction = t("testimonialSection.successStories.videoInstruction");
  const videoTitleTemplate = t("testimonialSection.successStories.videoTitleTemplate");
  const videoCaption = t("testimonialSection.successStories.videoCaption");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        
        {/* Testimonials Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Testimonials Content (Slide from Left) */}
          <div className={`
            space-y-6 transition-all ease-out
            ${isMobile ? 'duration-800' : 'duration-1000'}
            ${getSlideAnimation('left', isMobile)}
          `}
          style={{ 
            transitionDelay: isMobile ? '100ms' : '200ms'
          } as React.CSSProperties}
          >
             <h2 className="
              inline-block text-4xl md:text-5xl font-bold  mb-6
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
             {testimonialsTitle}
            </h2>
            
            <div className={`
              text-gray-600 text-lg leading-relaxed space-y-4 transition-all ease-out
              ${isMobile ? 'duration-700' : 'duration-800'}
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : isMobile 
                  ? 'opacity-0 translate-y-3 scale-98' 
                  : 'opacity-0 translate-y-6 scale-95'
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '300ms' : '400ms'
            } as React.CSSProperties}
            >
              <p>
                {testimonialsDescription}
              </p>
            </div>
          </div>

          {/* Right Column - Image (Slide from Right) */}
          <div className={`
            relative transition-all ease-out
            ${isMobile ? 'duration-800' : 'duration-1000'}
            ${getSlideAnimation('right', isMobile)}
          `}
          style={{ 
            transitionDelay: isMobile ? '500ms' : '600ms'
          } as React.CSSProperties}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
                alt={testimonialsImageAlt}
                className={`
                  w-full h-auto object-cover transition-all ease-out
                  ${isMobile ? 'duration-600' : 'duration-700'}
                  ${isVisible 
                    ? 'opacity-100 scale-100' 
                    : isMobile 
                      ? 'opacity-0 scale-105' 
                      : 'opacity-0 scale-110'
                  }
                `}
                style={{ 
                  transitionDelay: isMobile ? '700ms' : '800ms'
                } as React.CSSProperties}
              />
              
              {/* Subtle overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
              
              {/* Digital elements overlay to simulate the tech environment */}
              <div className={`
                absolute top-6 right-6 w-16 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30
                transition-all ease-out
                ${isMobile ? 'duration-500' : 'duration-600'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : isMobile 
                    ? 'opacity-0 -translate-y-2 scale-90' 
                    : 'opacity-0 -translate-y-4 scale-75'
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '900ms' : '1000ms'
              } as React.CSSProperties}
              ></div>
              <div className={`
                absolute bottom-6 left-6 w-12 h-8 bg-blue-500/20 backdrop-blur-sm rounded border border-blue-400/30
                transition-all ease-out
                ${isMobile ? 'duration-500' : 'duration-600'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : isMobile 
                    ? 'opacity-0 translate-y-2 scale-90' 
                    : 'opacity-0 translate-y-4 scale-75'
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '1100ms' : '1200ms'
              } as React.CSSProperties}
              ></div>
            </div>
          </div>
        </div>

        {/* Success Stories Section - Slide from Top */}
        <div className={`
          text-center mb-16 transition-all ease-out
          ${isMobile ? 'duration-800' : 'duration-1000'}
          ${getSlideAnimation('top', isMobile)}
        `}
        style={{ 
          transitionDelay: isMobile ? '1300ms' : '1400ms'
        } as React.CSSProperties}
        >
             <h2 className="
              inline-block text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
           {successStoriesTitle}
            </h2>
          
          <p className={`
            text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12 transition-all ease-out
            ${isMobile ? 'duration-700' : 'duration-800'}
            ${isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : isMobile 
                ? 'opacity-0 translate-y-4 scale-98' 
                : 'opacity-0 translate-y-6 scale-95'
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '1500ms' : '1600ms'
          } as React.CSSProperties}
          >
            {successStoriesDescription}
          </p>

          {/* Video Instruction */}
          <div className={`
            mb-8 transition-all ease-out
            ${isMobile ? 'duration-600' : 'duration-700'}
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : isMobile 
                ? 'opacity-0 translate-y-3' 
                : 'opacity-0 translate-y-4'
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '1700ms' : '1800ms'
          } as React.CSSProperties}
          >
            <p className="text-gray-600 flex items-center justify-center space-x-2">
              <span>{videoInstruction}</span>
              <span className={`
                text-xl transition-all ease-out
                ${isMobile ? 'duration-600' : 'duration-700'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0 animate-bounce' 
                  : isMobile 
                    ? 'opacity-0 translate-y-2' 
                    : 'opacity-0 translate-y-3'
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '1900ms' : '2000ms'
              } as React.CSSProperties}
              >
                👇
              </span>
            </p>
          </div>
        </div>

        {/* Video Players - Alternating Left/Right Slides */}
        <div className="max-w-4xl mx-auto">
          {youtubeVideos.map((video, index) => {
            // Alternate slide directions: even indices from left, odd from right
            const slideDirection = index % 2 === 0 ? 'left' : 'right';
            
            return (
              <div 
                key={video.id} 
                className={`
                  relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 
                  p-2 md:p-2 shadow-lg mb-8 transition-all ease-out
                  hover:shadow-2xl
                  ${isMobile 
                    ? 'duration-700 hover:scale-102' 
                    : 'duration-900 hover:scale-105'
                  }
                  ${getSlideAnimation(slideDirection, isMobile)}
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${2100 + index * 300}ms`
                    : `${2200 + index * 400}ms`
                } as React.CSSProperties}
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                  <iframe
                    className={`
                      absolute top-0 left-0 w-full h-full rounded-xl shadow-lg transition-all ease-out
                      ${isMobile ? 'duration-600' : 'duration-800'}
                      ${isVisible 
                        ? 'opacity-100 scale-100' 
                        : isMobile 
                          ? 'opacity-0 scale-95' 
                          : 'opacity-0 scale-90'
                      }
                    `}
                    src={video.url}
                    title={`${videoTitleTemplate} ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ 
                      transitionDelay: isMobile 
                        ? `${2300 + index * 300}ms`
                        : `${2400 + index * 400}ms`
                    } as React.CSSProperties}
                  ></iframe>
                </div>
                <p className={`
                  text-gray-600 text-sm md:text-base font-medium mt-4 text-center transition-all ease-out
                  ${isMobile ? 'duration-500' : 'duration-600'}
                  ${isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : isMobile 
                      ? 'opacity-0 translate-y-2' 
                      : 'opacity-0 translate-y-3'
                  }
                `}
                style={{ 
                  transitionDelay: isMobile 
                    ? `${2500 + index * 300}ms`
                    : `${2600 + index * 400}ms`
                } as React.CSSProperties}
                >
                  {videoCaption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;