import { useEffect, useRef, useState } from "react"

export default function useIsVisible(){
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          {
            root: null, // viewport
            rootMargin: '0px', // no margin
            threshold: 0.5, // 50% of target visible
          }
        );
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        // Clean up the observer
        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      }, []);

    return [elementRef,isVisible]
}