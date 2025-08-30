import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import testimonialImage from '../../assets/testimonial.jpg'

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
  { id: "1113005389", url: "https://player.vimeo.com/video/1113005389" }, // Gabriel A
  { id: "1112617657", url: "https://player.vimeo.com/video/1112617657" }, // Sasie T
  { id: "1112617703", url: "https://player.vimeo.com/video/1112617703" }, // Kerry B
  { id: "1112617646", url: "https://player.vimeo.com/video/1112617646" }, // Timi O
  { id: "1112617691", url: "https://player.vimeo.com/video/1112617691" }, // Ugo Onwuta
  { id: "1112617668", url: "https://player.vimeo.com/video/1112617668" }  // Joshua A
];


  // Extract all translatable content
  const testimonialsTitle = t("testimonialSection.testimonials.title");
  const testimonialsDescription = t("testimonialSection.testimonials.description");
  const testimonialsImageAlt = t("testimonialSection.testimonials.imageAlt");
  
  const successStoriesTitle = t("testimonialSection.successStories.title");
  const successStoriesDescription = t("testimonialSection.successStories.description");
  const videoInstruction = t("testimonialSection.successStories.videoInstruction");
  const videoTitleTemplate = t("testimonialSection.successStories.videoTitleTemplate");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        
        {/* Testimonials Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Testimonials Content (Slide from Left) */}
          <div className={`
            space-y-6 transition-all ease-out
            ${isMobile ? 'duration-400' : 'duration-500'}
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
              ${isMobile ? 'duration-350' : 'duration-400'}
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : isMobile 
                  ? 'opacity-0 translate-y-3 scale-98' 
                  : 'opacity-0 translate-y-6 scale-95'
              }
            `}
            style={{ 
              transitionDelay: isMobile ? '150ms' : '200ms'
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
            ${isMobile ? 'duration-400' : 'duration-500'}
            ${getSlideAnimation('right', isMobile)}
          `}
          style={{ 
            transitionDelay: isMobile ? '250ms' : '300ms'
          } as React.CSSProperties}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={testimonialImage}
                alt={testimonialsImageAlt}
                className={`
                  w-full h-auto object-cover transition-all ease-out
                  ${isMobile ? 'duration-300' : 'duration-350'}
                  ${isVisible 
                    ? 'opacity-100 scale-100' 
                    : isMobile 
                      ? 'opacity-0 scale-105' 
                      : 'opacity-0 scale-110'
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
                  : isMobile 
                    ? 'opacity-0 -translate-y-2 scale-90' 
                    : 'opacity-0 -translate-y-4 scale-75'
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
                  : isMobile 
                    ? 'opacity-0 translate-y-2 scale-90' 
                    : 'opacity-0 translate-y-4 scale-75'
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '550ms' : '600ms'
              } as React.CSSProperties}
              ></div>
            </div>
          </div>
        </div>

        {/* Success Stories Section - Slide from Top */}
        <div className={`
          text-center mb-16 transition-all ease-out
          ${isMobile ? 'duration-400' : 'duration-500'}
          ${getSlideAnimation('top', isMobile)}
        `}
        style={{ 
          transitionDelay: isMobile ? '650ms' : '700ms'
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
            ${isMobile ? 'duration-350' : 'duration-400'}
            ${isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : isMobile 
                ? 'opacity-0 translate-y-4 scale-98' 
                : 'opacity-0 translate-y-6 scale-95'
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '750ms' : '800ms'
          } as React.CSSProperties}
          >
            {successStoriesDescription}
          </p>

          {/* Video Instruction */}
          <div className={`
            mb-8 transition-all ease-out
            ${isMobile ? 'duration-300' : 'duration-350'}
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : isMobile 
                ? 'opacity-0 translate-y-3' 
                : 'opacity-0 translate-y-4'
            }
          `}
          style={{ 
            transitionDelay: isMobile ? '800ms' : '900ms'
          } as React.CSSProperties}
          >
            <p className="text-gray-600 flex items-center justify-center space-x-2">
              <span>{videoInstruction}</span>
              <span className={`
                text-xl transition-all ease-out
                ${isMobile ? 'duration-300' : 'duration-350'}
                ${isVisible 
                  ? 'opacity-100 translate-y-0 animate-bounce' 
                  : isMobile 
                    ? 'opacity-0 translate-y-2' 
                    : 'opacity-0 translate-y-3'
                }
              `}
              style={{ 
                transitionDelay: isMobile ? '900ms' : '1000ms'
              } as React.CSSProperties}
              >
                👇
              </span>
            </p>
          </div>
        </div>

        {/* Video Players - Alternating Left/Right Slides */}
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  {youtubeVideos.map((video, index) => {
    // Alternate slide directions: even indices from left, odd from right
    const slideDirection = index % 2 === 0 ? 'left' : 'right';

    return (
      <div
        key={video.id}
        className={`
          relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200
          p-2 md:p-2 shadow-lg transition-all ease-out
          hover:shadow-2xl
          ${isMobile 
            ? 'duration-350 hover:scale-102' 
            : 'duration-450 hover:scale-105'
          }
          ${getSlideAnimation(slideDirection, isMobile)}
        `}
        style={{
          transitionDelay: isMobile
            ? `${2100 + index * 150}ms`
            : `${2200 + index * 200}ms`
        } as React.CSSProperties}
      >
        <div
          className="relative w-full"
          style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}
        >
          <iframe
            className={`
              absolute top-0 left-0 w-full h-full rounded-xl shadow-lg transition-all ease-out
              ${isMobile ? 'duration-300' : 'duration-400'}
              ${isVisible
                ? 'opacity-100 scale-100'
                : isMobile
                  ? 'opacity-0 scale-95'
                  : 'opacity-0 scale-90'
              }
            `}
            src={video.url}
            title={`${videoTitleTemplate} ${video.id}`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              transitionDelay: isMobile
                ? `${2300 + index * 150}ms`
                : `${2400 + index * 200}ms`
            } as React.CSSProperties}
          ></iframe>
        </div>
 
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default TestimonialSection;