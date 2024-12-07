"use client";
import React from "react";
import AnimatedBoy from "../AnimatedBoy/AnimatedBoy";
const HomePage = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between mt-10">
                <div className="">
                    <h2 className="text-[35px] text-gray-800  my-3">Hello There!</h2>
                    <h3 className="text-5xl text-gray-800 font-bold">
                        I&apos;M ARIF{" "}
                        <span className="text-[#1CBAD6] stroke-black">ADNAN</span>
                    </h3>
                    <h4 className="text-[30px] text-gray-400 my-3">MERN Stack Developer</h4>
                    <div className="space-x-6">
                        <button className="py-2 px-4 bg-[#303030] text-white rounded-lg hover:bg-transparent border-2 hover:text-black transition-all">
                            Hire Me
                        </button>
                        <button className="py-2 px-4 border-2 rounded-lg text-gray-400 hover:bg-[#303030] hover:text-white transition-all">
                            Know More
                        </button>
                    </div>
                </div>
                <div className="w-[300px]">
                    <AnimatedBoy />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
