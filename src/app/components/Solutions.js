'use client';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import WebIcon from '@mui/icons-material/Web';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const cardData = [
    {
      title: "Server and Storage Systems",
      text: "To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.",
      icon: <WebIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "IT Support Services",
      text: "Our customers have the right to unlimited calls and on-site support within the scope of the agreement.",
      icon: <AdsClickIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Desktop and Server Virtualization",
      text: "Our server virtualization, workforce mobility platform enables end users to access their data and applications from any device.",
      icon: <ScreenSearchDesktopIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Network and Security Solutions",
      text: "The security of IT infrastructures of institutions is an important subject of expertise and professional protection of data security.",
      icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Cloud Services",
      text: "A copy of our customers' Business Critical Systems is the provision of service in IT Cloud Cloud technologies.",
      icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Tracing Solutions",
      text: "With our IT Cloud Monitoring service, we monitor the entire infrastructure of our customers by setting alarms.",
      icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    }
  ];

  
function Solutions() {
    const [flippedState, setFlippedState] = useState(cardData.map(() => false));
  
    const handleFlip = (idx) => {
      const newFlippedState = flippedState.map((isFlipped, i) => (i === idx ? !isFlipped : isFlipped));
      setFlippedState(newFlippedState);
    };
  
    return (
        <div className='min-h-svh w-full bg-slate-600'>
        <div className="grid grid-cols-1 place-items-center place-content-center mt-5">
        <h1 data-aos="fade-down" className="font-extrabold text-2xl md:text-3xl">Our Services and Solutions</h1>
        <p data-aos="fade-down" className="font-semibold text-lg md:text-2xl text-center">Your IT Infrastructure is Entrusted to Us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center place-content-center gap-4 p-6 mb-5">
        {cardData.map((card, idx) => (
        <div key={idx} className="d-flex align-items-stretch" data-aos="fade-up">
        <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" key={idx} isFlipped={flippedState[idx]} flipDirection="horizontal">
         <div 
        onMouseEnter={() => handleFlip(idx)}
        onMouseLeave={() => handleFlip(idx)}
         className='p-6 shadow-md text-white bg-slate-800 flex flex-col align-middle justify-center text-center  w-80 h-48 shadow-slate-500/40'>
        <div>{card.icon}</div>
        <h1>{card.title}</h1>
         </div>
         <div className="relative backdrop-blur-md p-6 shadow-md text-white bg-[url('/images/customer_service.jpg')] bg-cover opacity-50 flex flex-col shadow-slate-500/40 w-80 h-48 align-middle justify-center text-center">
         <h1>{card.text}</h1>
         </div>
         </ReactCardFlip>
         </div>
        ))}
        </div>
        </div>
    )
}

export default Solutions;