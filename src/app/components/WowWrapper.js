"use client";
import 'animate.css/animate.min.css';
import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

export default function WowWrapper({ children }) {
  useEffect(() => {
    if(typeof window ==! 'undefined'){
    const wow = new WOW({
      boxClass: 'wow',     
      animateClass: 'animate__animated',
      offset: 0,           
      mobile: true,        
      live: true           
    });
    wow.init();
  }
  }, []);

  return <>{children}</>;
}
