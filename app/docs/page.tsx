"use client";

import React from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";
import { FadeText } from "@/components/magicui/fade-text";

const features = [
  {
    name: "Dr.John Doe",
    description: "Pediatrician",
    href: "/",
    cta: "Learn more",
    background: <img src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" alt ="dr john"className="absolute h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"  />,
    className: "col-span-2 lg:col-span-1"
  },
  {
    name: "Dr.Joh Doe",
    description: "Pediatrician",
    href: "/",
    cta: "Learn more",
    background: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWDmw7UW2jSzHH6WQ_mAkuPlzwm1qpdg-VA&s" alt ="dr john"className="absolute h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"  />,
    className: "col-span-2 lg:col-span-1"
  },
  {
    name: "Dr.John oe",
    description: "Pediatrician",
    href: "/",
    cta: "Learn more",
    background: <img src="https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress.jpg" alt ="dr john" className="absolute h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"   />,
    className: "col-span-2 lg:col-span-1"
  },
  {
    name: "DrJohn Doe",
    description: "Pediatrician",
    href: "/",
    cta: "Learn more",
    background: <img src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" alt ="dr john"className="absolute h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"  />,
    className: "col-span-2 lg:col-span-1"
  },
  {
    name: "Dr.John D",
    description: "Pediatrician",
    href: "/",
    cta: "Learn more",
    background: <img src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" alt ="dr john"className="absolute  h-[300px] w-[400px] border-none transition-all ease-out group-hover:scale-105" style={{ maskImage: "linear-gradient(to top, transparent 0%, #faeee7 100%)" }} />,
    className: "col-span-2 lg:col-span-1"
  },
];

const BentoDemo = () => {
  return (
    <div className="bg-[#faeee7] bg-cover bg-center min-h-[100vh]">
    <div className="center m-[auto] w-[70%]">
      <div className="mt-[100px] text-center">
          <FadeText
        className="text-[45px]  text-center font-bold text-[#ff8ba7] bg-clip-text "
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.1 } },
        }}
        text="Where would you like to go for your consultation?"
      />
      </div>
        <div className="mt-[25px] text-center">
          <FadeText
        className="info text-center text-[30px] text-[#706f6f]"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Choose from our range of specialists and get the care you need."
      />
      </div>
    <div className="bluertext mt-[60px] bg-[#fffffe] relative z-10 p-[20px] w-[1250px] h-full md:shadow-2xl border-[1px] rounded-lg backdrop-blur-md">
    {/* relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl */}
    <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (

        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    <BorderBeam size={1250} duration={12} delay={9}/>
    </div>
    <div className="mt-[30px]"></div>
    </div>
    </div>
  );
}

export default BentoDemo;
