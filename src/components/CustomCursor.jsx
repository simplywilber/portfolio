import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallCircle] = useState({ x: 0, y: 0 });

  // Tracks the x and y coordinates of the mouse and utilizes it with the state
  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  return (
    // Subtracted by 32 and 8 in order to center circles
    <div>
      <motion.div
        animate={{
          x: largeCircle.x - 22,
          y: largeCircle.y - 22,
          transition: { type: "spring", stiffness: 150 },
        }}
        className="large_circle"
      ></motion.div>
      <motion.div
        animate={{
          x: smallCircle.x - 4,
          y: smallCircle.y - 4,
          transition: { type: "spring", stiffness: 150 },
        }}
        className="small_circle"
      ></motion.div>
    </div>
  );
}
