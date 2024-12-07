import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./animated.json";
const AnimatedBoy = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return (
    <div
      className="absolute z-[-1]"
      style={{}}
    >
      {View}
    </div>
  );
};

export default AnimatedBoy;
