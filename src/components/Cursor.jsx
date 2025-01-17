import React, { useState, useEffect, useRef } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ballRef = useRef(null); // Reference for the ball
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ballRef.current) {
        const ball = ballRef.current;
        // Smoothly update ball position with some delay (10ms)
        ball.style.left = `${position.x - 10}px`;
        ball.style.top = `${position.y - 10}px`;
      }
    }, 10); // 10ms interval creates smooth delay

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(intervalId); // Clean up interval on unmount
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]); // Runs when position changes, ensuring the ball updates position

  return (
    <>
      <div
        ref={ballRef}
        className={`cursor-ball ${isHovering ? "hovering" : ""}`}
      ></div>
    </>
  );
};

export default Cursor;
