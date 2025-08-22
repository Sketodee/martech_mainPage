import { useTranslation } from 'react-i18next';
import { FaStar, FaCheck } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

interface VisibleElements {
  description?: boolean;
  cta?: boolean;
  salary?: boolean;
  video?: boolean;
}

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [,setIsVisible] = useState<boolean>(false);
  const [visibleElements, setVisibleElements] = useState<VisibleElements>({});
  const [fallbackVisible, setFallbackVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Record<string, HTMLElement | null>>({});

  // Fallback visibility after 500ms to ensure content is never permanently hidden
  useEffect(() => {
    const timer = setTimeout(() => {
      setFallbackVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Extract all translatable content
  const headlineLineOne = t("heroProgram.headline.lineOne");
  const headlineLineTwo = t("heroProgram.headline.lineTwo");
  const description = t("heroProgram.description");
  const ctaButton = t("heroProgram.cta.button");
  
  const profileAlt = t("heroProgram.profiles.alt");
  const joinText = t("heroProgram.profiles.joinText");
  
  const salaryPromise = t("heroProgram.salaryPromise.text");
  const watchVideo = t("heroProgram.video.watchText");
  const videoTitle = t("heroProgram.video.title");
  const videoCaption = t("heroProgram.video.caption");

  const profileImages = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b192?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  ];

  // Using Simon Sinek's "Start with Why" - popular business/marketing video
  const youtubeVideoId = "u4ZoJKF_VuA"; // Simon Sinek: How great leaders inspire action
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&showinfo=0`;

  // Intersection Observer for main hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for individual elements
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Set up observers for all elements (not just existing ones)
    const elementKeys = ['description', 'cta', 'salary', 'video'];
    
    elementKeys.forEach((key) => {
      // Create observer for each key
      const observer = new IntersectionObserver(
        ([entry]: IntersectionObserverEntry[]) => {
          setVisibleElements(prev => ({ ...prev, [key]: entry.isIntersecting }));
        },
        { threshold: 0.1, rootMargin: '30px' }
      );
      
      observers.push(observer);
      
      // Store observer reference for later use
      (observer as any).elementKey = key;
    });

    // Observe elements when they become available
    const checkAndObserve = () => {
      Object.entries(elementsRef.current).forEach(([key, element]) => {
        if (element) {
          const observer = observers.find((obs: any) => obs.elementKey === key);
          if (observer) {
            observer.observe(element);
          }
        }
      });
    };

    // Initial check
    checkAndObserve();
    
    // Recheck periodically until all elements are found
    const interval = setInterval(checkAndObserve, 100);
    
    // Clear interval after 2 seconds
    setTimeout(() => clearInterval(interval), 2000);

    return () => {
      clearInterval(interval);
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Helper function to set element refs
  const setElementRef = (key: string) => (el: HTMLElement | null) => {
    elementsRef.current[key] = el;
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center" ref={heroRef}>
        
        {/* Main Headline */}
        <div className="mb-12">
           <h1 className="
              inline-block text-4xl md:text-5xl font-bold leading-tight mb-8
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {headlineLineOne} <br />
            {headlineLineTwo}
            </h1>

          <p 
            ref={setElementRef('description')}
            className={`
              text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12
              transition-all duration-1200 ease-out
              ${(visibleElements.description || fallbackVisible)
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }
            `}
            style={{ transitionDelay: '200ms' } as React.CSSProperties}
          >
            {description}
          </p>

          {/* CTA Section with Profiles */}
          <div 
            ref={setElementRef('cta')}
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-6 mb-12
              transition-all duration-1000 ease-out
              ${(visibleElements.cta || fallbackVisible)
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-90'
              }
            `}
            style={{ transitionDelay: '400ms' } as React.CSSProperties}
          >
            <button className={`
              text-white sm:w-auto px-8 py-4 bg-gradient-to-b from-[var(--color-blueFour)] to-[var(--color-blueOne)]  
              rounded-full font-semibold transition-all duration-500 ease-out
              hover:from-gray-950 hover:to-[var(--color-blueThree)] hover:scale-110 hover:shadow-2xl
              active:scale-95 transform hover:rotate-1
              ${(visibleElements.cta || fallbackVisible)
                ? 'animate-pulse hover:animate-none' 
                : ''
              }
            `}>
              {ctaButton}
            </button>
            
            {/* Profile Images and Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {profileImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${profileAlt} ${index + 1}`}
                    className={`
                      w-12 h-12 rounded-full border-2 border-white shadow-md
                      transition-all duration-800 ease-out hover:scale-125 hover:z-10 hover:rotate-12
                      ${(visibleElements.cta || fallbackVisible)
                        ? 'opacity-100 translate-y-0 rotate-0 scale-100' 
                        : 'opacity-0 translate-y-6 -rotate-45 scale-50'
                      }
                    `}
                    style={{ 
                      transitionDelay: `${600 + index * 150}ms`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
              
              <div className={`
                text-left transition-all duration-700 ease-out
                ${(visibleElements.cta || fallbackVisible)
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-90'
                }
              `}
              style={{ transitionDelay: '1000ms' } as React.CSSProperties}
              >
                <div className="flex space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`
                        w-4 h-4 text-yellow-400 fill-current transition-all duration-400 ease-out
                        hover:scale-150 hover:rotate-180 hover:text-yellow-300
                        ${(visibleElements.cta || fallbackVisible)
                          ? 'opacity-100 scale-100 rotate-0' 
                          : 'opacity-0 scale-0 rotate-180'
                        }
                      `}
                      style={{ transitionDelay: `${1200 + i * 100}ms` } as React.CSSProperties}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{joinText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Promise */}
        <div 
          ref={setElementRef('salary')}
          className={`
            mb-8 transition-all duration-1000 ease-out
            ${(visibleElements.salary || fallbackVisible)
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-95'
            }
          `}
          style={{ transitionDelay: '600ms' } as React.CSSProperties}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className={`
              text-gray-700 font-medium transition-all duration-700 ease-out
              ${(visibleElements.salary || fallbackVisible)
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
              }
            `}
            style={{ transitionDelay: '800ms' } as React.CSSProperties}
            >
              {salaryPromise}
            </span>
            <FaCheck className={`
              w-5 h-5 text-green-500 transition-all duration-600 ease-out
              hover:scale-125 hover:rotate-360
              ${(visibleElements.salary || fallbackVisible)
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-0 rotate-180'
              }
            `} 
            style={{ transitionDelay: '1000ms' } as React.CSSProperties}
            />
          </div>
          <p className="text-gray-600 flex items-center justify-center space-x-2">
            <span className={`
              transition-all duration-700 ease-out
              ${(visibleElements.salary || fallbackVisible)
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-3'
              }
            `}
            style={{ transitionDelay: '1200ms' } as React.CSSProperties}
            >
              {watchVideo}
            </span>
            <span className={`
              text-xl transition-all duration-700 ease-out
              ${(visibleElements.salary || fallbackVisible)
                ? 'opacity-100 translate-y-0 animate-bounce' 
                : 'opacity-0 translate-y-4'
              }
            `}
            style={{ transitionDelay: '1400ms' } as React.CSSProperties}
            >
              👇
            </span>
          </p>
        </div>

        {/* Video Player */}
        <div 
          ref={setElementRef('video')}
          className={`
            max-w-4xl mx-auto transition-all duration-1500 ease-out
            ${(visibleElements.video || fallbackVisible)
              ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
              : 'opacity-0 translate-y-16 scale-90 rotate-1'
            }
          `}
          style={{ transitionDelay: '800ms' } as React.CSSProperties}
        >
          <div className={`
            relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 
            p-2 md:p-2 shadow-lg transition-all duration-700 ease-out 
            hover:shadow-2xl hover:scale-105
            ${(visibleElements.video || fallbackVisible)
              ? 'animate-none' 
              : ''
            }
          `}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                className={`
                  absolute top-0 left-0 w-full h-full rounded-xl shadow-lg
                  transition-all duration-1200 ease-out
                  ${(visibleElements.video || fallbackVisible)
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                  }
                `}
                src={youtubeEmbedUrl}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ transitionDelay: '1000ms' } as React.CSSProperties}
              ></iframe>
            </div>
            <p className={`
              text-gray-600 text-sm md:text-base font-medium mt-4 text-center
              transition-all duration-800 ease-out
              ${(visibleElements.video || fallbackVisible)
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-6 scale-95'
              }
            `}
            style={{ transitionDelay: '1200ms' } as React.CSSProperties}
            >
              {videoCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;