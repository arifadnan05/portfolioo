"use client";
import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./animated.json";

const AnimatedBackground = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      className="absolute z-[-1]"
      style={{  }} // Adjust opacity here
    >
      {View}
    </div>
  );
};

export default AnimatedBackground;
