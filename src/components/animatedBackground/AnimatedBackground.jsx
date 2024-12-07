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
    <div className="absolute inset-0 w-full h-screen z-[-1]">
      {View}
    </div>
  );
};

export default AnimatedBackground;
