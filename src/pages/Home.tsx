"use client";

import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Aurora from "@/components/LandingComponents/Aurora";
import LiquidChrome from "@/components/LandingComponents/LiquidChrome";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import ThemeToggler from "../theme/toggler";
import { ArrowRight, Github, Star } from "lucide-react";

export default function Home() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          Readme Design Kit
        </div>
        <div className="flex items-center space-x-4">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mayur-Pagote/README_Design_Kit">
            <Github className="h-4 w-4 mr-2" />
          </a>
          <ThemeToggler />
        </div>
      </nav>

      <div className="w-full max-w-7xl mx-auto flex flex-col flex-1 px-4">
        <div className="flex flex-col items-center justify-center flex-1 relative">
          <div className="absolute inset-0 -z-10 rounded-4xl overflow-hidden">
            {theme === "dark" ? (
              <Aurora colorStops={["#f77f00", "#f4a261", "#ffbe0b"]} />
            ) : (
              <LiquidChrome
                color={[1, 1, 1]}
                mouseReact={false}
                amplitude={0.1}
                speed={1.0}
              />
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border inline-block px-4 py-2 backdrop-blur-xl border-primary/30 text-xs md:text-sm mb-8 rounded-full bg-black/30 text-white mx-auto"
          >
            <span className="flex items-center gap-2">
              <Star className="h-3 w-3" />
              Get Beautiful README Components 🎉
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto"
          >
            <h1 className="text-center text-[25px] leading-none sm:text-[80px] lg:text-[70px] font-bold bg-clip-text">
              <span>Create,</span>{" "}
              Generate, and{" "}
              <span className="text-orange-400">Share</span> in Seconds!
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center px-4 text-lg md:text-xl text-muted-foreground my-10 max-w-2xl"
          >
            Effortlessly generate beautiful README components, badges, and graphics for your projects{" "}
            <span className="text-primary font-semibold">—all at once.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button> 
          </motion.div>
        </div>
      </div>
    </div>
  )
}