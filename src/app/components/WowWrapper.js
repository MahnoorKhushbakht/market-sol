'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({      
        duration: 300,     
        easing: 'linear',   
        once: false,      
        mirror: false,    
      });
    }
  }, []);

  return <>{children}</>;
}
