"use client";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";

// Information about exercises for pregnant women
const exercises = [
  {
    title: "Prenatal Yoga",
    description: "A gentle form of yoga focusing on poses for pregnant women.",
    image: "preg.jpg",
  },
  {
    title: "Walking",
    description: "A safe and effective way to stay fit during pregnancy.",
    image: "walk.jpg",
  },
  {
    title: "Stretching",
    description: "Helps to relieve stress and improves circulation.",
    image: "stretch.jpg",
  },
  {
    title: "Pelvic Floor Exercises",
    description: "Strengthens the muscles that support the bladder, bowel, and uterus.",
    image: "sharan.jpg",
  },
];

const FollowerPointerCard = () => {
  return (
    <div>
      <div className="text-center text-4xl pt-10 pb-10">
        <p>
          Some of our recommended exercises during pregnancy
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {exercises.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">

      </div>
    </div>
  );
};

const Card = ({ item }: { item: { title: string, description: string, image: string } }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState(false);

  // Track the rect of the card element
  useLayoutEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    const resizeObserver = new ResizeObserver(updateRect);
    if (ref.current) {
      resizeObserver.observe(ref.current);
      updateRect(); // Initial update
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref.current]); // Watch ref.current to update rect on changes

  // Handle mouse move to update cursor position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (rect) {
        const mouseX = event.clientX - rect.left 
        const mouseY = event.clientY - rect.top 
        console.log("mouseX", scrollX, "mouseY", scrollY);
        // Check if the cursor is within the card bounds
        if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
          x.set(mouseX);
          y.set(mouseY);
          setIsInside(true);
        } else {
          setIsInside(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y, rect]);
  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  return (
    <Link href={"/exercises"}>
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative p-4 bg-white shadow-md rounded-md w-full max-w-[300px] h-[400px]"
        ref={ref}
      >
        <AnimatePresence>
          {isInside && <FollowPointer x={x} y={y} title={item.title} isMounted={true} />}
        </AnimatePresence>
        <motion.img
          src={item.image}
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{ type: "tween", stiffness: 400, damping: 17, duration: 0.2 }}
          alt={item.title}
          className="w-full h-64 rounded-md object-cover"
        />
        <h2 className="mt-2 text-xl font-bold">{item.title}</h2>
        <p className="text-gray-500 mt-1 text-base">{item.description}</p>
      </div>
    </Link>
  );
};

const FollowPointer = ({
  x,
  y,
  title,
  isMounted,
}: {
  x: any;
  y: any;
  title: string;
  isMounted: boolean;
}) => {
  console.log("FollowPointer rendered:", { x, y, title });
  return (
    <motion.div 
    key={title}
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-[#DE3163] transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-[#DE3163]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
       key={title}
        className="px-2 py-1 bg-[#ff6b85] text-white text-xs rounded-full whitespace-nowrap overflow-hidden"
        style={{
          width: "max-content",
          maxWidth: "200px",
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1 ,
          opacity: 1 
        }}
        exit={{
          scale: 0.5,
          opacity: 0
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default FollowerPointerCard;
