'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800, 
        easing: 'ease',
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom', 
      });
    }
  }, []);

  return <>{children}</>;
}
