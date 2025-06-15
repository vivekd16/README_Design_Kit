"use client";
import { Link } from 'react-router-dom';

import { motion } from "motion/react";
import Aurora from "@/components/LandingComponents/Aurora";
import LiquidChrome from "@/components/LandingComponents/LiquidChrome";
import { useTheme } from "@/components/theme-provider";
import { Star } from "lucide-react";

  export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="w-full min-h-screen flex flex-col mb-5 ">
      <div className="w-full  flex flex-col flex-1 px-4">
        <div className="flex flex-col items-center justify-center flex-1 relative">
          <div className="absolute inset-0 -z-10 rounded-b-4xl overflow-hidden">
            {theme === "dark" ? (
              <Aurora colorStops={["#f77f00", "#f4a261", "#ffbe0b"]} />
             
            ) : (
              <LiquidChrome
                color={[0.6, 0.4, 0.9]}
                mouseReact={false}
                amplitude={0.1}
                speed={1.0}
              />
            )}
          </div>
<Link to="Elements" className="inline-block">
      <div className="group cursor-pointer">
        <div className="relative rounded-xl bg-white/25 backdrop-blur-md border border-white/20 px-5 py-2.5 transition-all duration-300 hover:bg-white/10 hover:border-white  hover:scale-105">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">
              Get Beautiful README Components
            </span>
            <div className="w-2 h-2 bg-white rounded-full opacity-100 animate-pulse"></div>
          </div>
        </div>
      </div>
      </Link>

     <motion.div 
  initial={{ opacity: 0, y: 30 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ delay: 0.2, duration: 0.8 }} 
  className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto"
>
  <h1 className="text-center text-[25px] leading-none sm:text-[80px] lg:text-[70px] font-bold bg-gradient-to-r from-purple-200 via-purple-100 to bg-purple-300 bg-clip-text text-transparent">
    <span>Create,</span>{" "}
    Generate, and{" "}
    <span className="text-purple-950 drop-shadow-[0_0_2px_white] ">Share</span> in Seconds!
  </h1>
</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center px-4 text-lg md:text-xl text-white my-10 max-w-2xl"
          >
            Effortlessly generate beautiful README components, badges, and graphics for your projects{" "}
            <span className="text-purple-950 font-semibold">—all at once.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
          </motion.div>
        </div>
      </div>
    </div>
  )
}