import React from 'react';
import Image from 'react-bootstrap/Image';
import '@/app/css/Gallery.css';

export default function Gallery_SM() {
    return (
        <div className="w-full h-auto  bg-slate-600 grid md:grid-rows-1 sm:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 p-20 justify-center">
            <div className="relative  justify-center sm:pb-80 md:pb-0"> 
                <Image
                    src="/images/technoloy-gear.png"
                    alt="office"
                    className="rounded-full absolute rotating-image bg-transparent"
                />
                <Image
                    src="/images/officeStaff.png"
                    alt="office"
                    className="rounded-full absolute bg-transparent"
                />
            </div>

            <div className="grid grid-cols-1 mt-96 md:mt-0 md:ml-0 ml-1 md:mr-0 mr-1 h-auto">
                <h1 className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-slate-500 text-2xl">
                    Professional IT Service
                </h1>
                <p className="text-lg">
                Beryl Technologies Ltd : futuristic solutions - an it company providing it solution and services for businesses throughout the world. We are focused on empowering the future of innovation by revolutionizing the industry through cutting edge advancements and groundbreaking solutions through team of dedicated it engineers across the globe.
                </p>
                <h1 className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-slate-500 text-2xl">
                Mission Vision
                </h1>
                <p className="text-lg">
                Our vision is to be the catalyst for transformative change in the tech industry, driving innovation and creating a better future. We are committed to our mission of empowering businesses and individuals through cutting-edge technologies that enhance efficiency, productivity, and sustainability. By pushing boundaries and embracing challenges, we strive to unlock the full potential of technology in shaping a brighter tomorrow.
                </p>
  </div>
</div>

    );
}
