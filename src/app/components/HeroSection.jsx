"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../Animations/hero.json";
import { Zap } from "lucide-react";

const HeroSection = () => (
  <section id="Home" className="relative pb-12 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-0">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.div
          variants={{
            hidden: { y: 15, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          className="mb-4"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-2 md:mb-6">
            <Zap className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Build with Stability AI</span>
          </div>
        </motion.div>
        <motion.h1
          variants={{
            hidden: { y: 15, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Create Stunning
          </span>
          <br />
          <span className="text-white mt-2">AI-Generated Images</span>
        </motion.h1>
        <motion.p
          variants={{
            hidden: { y: 15, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          className="text-sm  md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Transform your imagination into reality with our state-of-the-art AI
          image generation technology. Create, customize, and download
          professional-quality images in seconds.
        </motion.p>
      </motion.div>
    </div>
    <motion.div
      variants={{
        hidden: { y: 15, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      className="mb-8 flex justify-center"
    >
      <Lottie
        animationData={heroAnimation}
        loop
        autoplay
        className="h-40 md:h-56"
      />
    </motion.div>
  </section>
);

export default HeroSection;
