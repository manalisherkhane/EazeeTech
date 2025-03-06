import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimationComponent = () => {
  // State to track visibility of the element
  const [isInView, setIsInView] = useState(false);

  // Handle scroll and check if the div is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-container");
      const rect = element.getBoundingClientRect();

      // Check if the element is in the viewport
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Parent div that contains the animated divs */}
      <motion.div
        id="animated-container"
        className="relative flex flex-col space-y-8"
        style={{ height: "100vh" }} // Add height to allow scrolling
      >
        {/* First div to animate (bottom to top) */}
        <motion.div
          animate={{ y: isInView ? 100 : 300 }} // Animate from bottom (300px) to top (100px)
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-blue-500 p-6 rounded-lg shadow-md"
        >
          Div 1 - Scroll to animate me
        </motion.div>

        {/* Second div to animate (bottom to top) */}
        <motion.div
          animate={{ y: isInView ? 100 : 300 }} // Animate from bottom (300px) to top (100px)
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-red-500 p-6 rounded-lg shadow-md"
        >
          Div 2 - Scroll to animate me
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimationComponent;
