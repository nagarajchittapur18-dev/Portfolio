import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          left: position.x - 150,
          top: position.y - 150,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ left: position.x - 150, top: position.y - 150 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          left: position.x - 4,
          top: position.y - 4,
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 10px rgba(99,102,241,0.8)",
        }}
        animate={{ left: position.x - 4, top: position.y - 4 }}
        transition={{ type: "spring", damping: 25, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
};

export default CursorGlow;
