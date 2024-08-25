'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        offset: 0,         // offset (in px) from the original trigger point
        delay: 200,        // values from 0 to 3000, with step 50ms
        duration: 0,      // values from 0 to 3000, with step 50ms
        easing: 'ease',   // default easing for AOS animations
        once: false,      // whether animation should happen only once - while scrolling down
        mirror: false,    // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
      });
    }
  }, []);

  return <>{children}</>;
}
