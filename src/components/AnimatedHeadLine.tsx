import { useEffect, useRef } from 'react';

interface AnimatedHeadlineProps {
  headlineLineTwo?: string;
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({ headlineLineTwo = "Your second line" }) => {
  const headlineRef = useRef<HTMLSpanElement>(null);
  const words: string[] = ["Innovation", "Excellence", "Success"]; // Change these to your desired words
  const currentWordIndex = useRef<number>(0);

  useEffect(() => {
    const element = headlineRef.current;
    if (!element) return;

    // Set initial word
    element.textContent = words[0];

    const interval = setInterval(() => {
      // Add slide-up animation
      element.style.transform = 'translateY(-20px)';
      element.style.opacity = '0';
      
      setTimeout(() => {
        // Update word
        currentWordIndex.current = (currentWordIndex.current + 1) % words.length;
        element.textContent = words[currentWordIndex.current];
        
        // Slide in new word
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }, 150); // Half of transition duration
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 lg:mb-8 bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)] bg-clip-text !text-transparent [-webkit-text-fill-color:transparent]">
      <span 
        ref={headlineRef}
        style={{
          transition: 'all 0.3s ease-in-out',
          display: 'inline-block'
        }}
      />
      <br />
      {headlineLineTwo}
    </h1>
  );
};

export default AnimatedHeadline;