"use client";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import downloadAnim from "./Animations/download.json";
import shareAnim from "./Animations/share.json";
import favoriteAnim from "./Animations/favourite.json";
import heroAnimation from "./Animations/hero.json";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Sparkles,
  Heart,
  Trash2,
  Download,
  X,
  Share2,
  Zap,
  ImageIcon,
  Palette,
  Wand2,
  Menu,
  Github,
  Twitter,
  Instagram,
  ChevronDown,
  Star,
  Users,
  TrendingUp,
  View,
} from "lucide-react";

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // 📥 Download function
  const handleDownload = (url, i) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `AI_Image_${i ? i + 1 : 0}.png`;
    link.click();
  };

  // 📤 Share function
  const handleShare = async (url) => {
    if (navigator.share) {
      await navigator.share({ title: "AI Generated Image", url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = (url) => {
    setFavorites((prev) => prev.filter((f) => f !== url));
  };

  // ⭐ Favorite function
  const toggleFavorite = (url) => {
    setFavorites((prev) =>
      prev.includes(url) ? prev.filter((f) => f !== url) : [...prev, url]
    );
  };

  // Simulate API call (replace with your actual logic)
  const generateImage = async () => {
    try {
      setLoading(true);
      setImages([]);

      const response = await axios.post("/api/generate", { prompt });
      console.log(response.data);
      const images = response?.data?.data?.[0];
      // setImage(images);
      setImages(images);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: (
        <Lottie animationData={downloadAnim} loop autoplay className="h-16" />
      ),
      title: "HD Downloads",
      description:
        "Download your creations in high resolution for professional use",
    },
    {
      icon: <Lottie animationData={shareAnim} loop autoplay className="h-16" />,
      title: "One-Click Share",
      description: "Easily share images via link or social apps.",
    },
    {
      icon: (
        <Lottie animationData={favoriteAnim} loop autoplay className="h-16 " />
      ),
      title: "Favorites",
      description: "Save images you love for later access.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-100 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI KGenesis
                </span>
              </motion.div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Generate", "Features", "About"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow hover:border-red-500 hover:text-red-500 cursor-pointer "
                >
                  <Heart className="w-5 h-5 text-red-500" />
                  My Favorites ({favorites.length})
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sticky top-0 z-100 bg-black/20 backdrop-blur-lg border-b border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "Generate", "Features", "About"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </a>
                ))}

                <button
                  onClick={() => setIsOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow hover:border-red-500 hover:text-red-500 cursor-pointer "
                >
                  <Heart className="w-5 h-5 text-red-500" />
                  My Favorites ({favorites.length})
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="Home" className="relative pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-2 md:mb-6">
                <Zap className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">
                  Build with Stability AI
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Create Stunning
              </span>
              <br />
              <span className="text-white mt-2">AI-Generated Images</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm  md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transform your imagination into reality with our state-of-the-art
              AI image generation technology. Create, customize, and download
              professional-quality images in seconds.
            </motion.p>

            {/* <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>
                    {stats.imagesGenerated.toLocaleString()}+ Images Generated
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-blue-400 mr-1" />
                  <span>
                    {stats.activeUsers.toLocaleString()}+ Active Users
                  </span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                  <span>{stats.modelsAvailable} AI Models</span>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
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

      {/* Main Generator Section */}
      <section id="Generate" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Image Generator
              </h2>
              <p className="text-gray-300 text-lg">
                Describe your vision and watch it come to life
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the image you want to create... (e.g., 'A majestic dragon flying over a crystal mountain at sunset')"
                  className="w-full p-4 bg-black/30 text-sm md:text-base lg:text-lg backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none h-32 transition-all"
                  rows={4}
                />
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-gray-400" />
                  <Wand2 className="h-5 w-5 text-purple-400" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={generateImage}
                  disabled={!prompt.trim() || loading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      Generating Images...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Sparkles className="w-6 h-6 mr-3" />
                      Generate Images
                    </div>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Generated Images Section */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Your Generated Images
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div
                      onClick={() =>
                        setSelectedImage(
                          `/api/proxy?url=${encodeURIComponent(img.image.url)}`
                        )
                      }
                      className="relative overflow-hidden rounded-xl mb-4"
                    >
                      <Image
                        key={i}
                        src={`/api/proxy?url=${encodeURIComponent(
                          img.image.url
                        )}`}
                        alt={`Generated ${i}`}
                        width={256}
                        height={256}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* Download 
                        <motion.button
                          onClick={() =>
                            handleDownload(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`,
                              i
                            )
                          }
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>

                        {/* Share 
                        <motion.button
                          onClick={() =>
                            handleShare(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`
                            )
                          }
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>

                        {/* Favorite 
                        <motion.button
                          onClick={() =>
                            toggleFavorite(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`
                            )
                          }
                          className={`p-2 rounded-full ${
                            favorites.includes(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`
                            )
                              ? "bg-pink-500"
                              : "bg-white/20 hover:bg-white/30"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Star className="w-4 h-4" />
                        </motion.button>
                      </div> */}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">
                        Image {i + 1}
                      </span>
                      <div className="flex space-x-2">
                        <motion.button
                          onClick={() =>
                            handleDownload(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`,
                              i
                            )
                          }
                          className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>

                        <motion.button
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.2 }}
                          onClick={() =>
                            handleShare(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`
                            )
                          }
                          whileTap={{ scale: 0.8 }}
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          onClick={() =>
                            toggleFavorite(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`
                            )
                          }
                          className={`p-1  ${
                            favorites.includes(
                              `/api/proxy?url=${encodeURIComponent(
                                img.image.url
                              )}`
                            )
                              ? "text-pink-500"
                              : "text-gray-400"
                          } hover:text-purple-400 transition-colors`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Star className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <section id="Features" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to create stunning AI-generated images
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ...features,
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36px"
                    height="36px"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill="url(#SVGiDU7PeBD)"
                        d="M13.152 9.188V3.71c.027-.135-.024-.456-.444-.653c-.366-.172-.765.083-.885.247c-1.825 2.917-5.233 9.051-5.366 9.36c-.169.389-.054.631.106.81c.119.134.403.214.555.214h3.705l-.79 6.7c.01.155.14.49.564.592c.425.101.717-.205.81-.37l6.057-10.25c.088-.135.27-.494.076-.81a.78.78 0 0 0-.7-.362z"
                      ></path>
                      <defs>
                        <linearGradient
                          id="SVGiDU7PeBD"
                          x1={12}
                          x2={12}
                          y1={3}
                          y2={21}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#087ffe"></stop>
                          <stop offset={1} stopColor="#50c0fe"></stop>
                        </linearGradient>
                      </defs>
                    </g>
                  </svg>
                ),
                title: "Lightning Fast",
                description:
                  "Generate high-quality images in seconds with our optimized AI models",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36px"
                    height="36px"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none" strokeWidth={1.5}>
                      <path
                        fill="#fff"
                        d="M8.048 3.354C5.49 3.536 3.536 5.49 3.354 8.048C3.17 10.603 3 14.368 3 19.5c0 5.133.171 8.897.354 11.453c.182 2.557 2.136 4.51 4.694 4.693c1.123.08 2.48.159 4.085.221A191 191 0 0 1 12 28.5c0-5.133.171-8.897.354-11.452c.182-2.558 2.136-4.512 4.694-4.694C19.602 12.17 23.367 12 28.5 12c2.876 0 5.322.054 7.367.133c-.062-1.605-.14-2.962-.22-4.085c-.183-2.558-2.137-4.512-4.695-4.694C28.397 3.17 24.632 3 19.5 3c-5.133 0-8.897.171-11.452.354"
                      ></path>
                      <path
                        fill="#8fbffa"
                        d="M12.354 17.047c.182-2.557 2.136-4.51 4.694-4.693C19.602 12.17 23.367 12 28.5 12s8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.133-.171 8.897-.354 11.453c-.182 2.557-2.136 4.51-4.694 4.693c-2.555.183-6.32.354-11.452.354c-5.133 0-8.897-.171-11.453-.354c-2.557-.182-4.51-2.136-4.693-4.694C12.17 37.398 12 33.633 12 28.5s.171-8.897.354-11.453"
                      ></path>
                      <path
                        fill="#fff"
                        d="M32 22a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12.846 14.389c-.059 1.38-.128 2.564-.2 3.563c-.182 2.558-2.136 4.512-4.694 4.694c-2.555.183-6.32.354-11.452.354c-5.133 0-8.897-.171-11.453-.354c-2.557-.182-4.51-2.136-4.693-4.694a128 128 0 0 1-.233-4.4c3.545-3.327 6.048-5.238 7.668-6.319c1.44-.96 3.205-.802 4.543.293s3.378 2.874 6.338 5.705c1.99-1.709 3.515-2.839 4.625-3.58c1.44-.96 3.205-.8 4.543.294c1.128.922 2.753 2.33 5.008 4.444"
                      ></path>
                      <path
                        stroke="#2859c5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M35.474 7c-.552-2.024-2.29-3.486-4.473-3.643C28.445 3.173 24.665 3 19.5 3c-5.134 0-8.898.171-11.453.354c-2.557.182-4.512 2.136-4.694 4.694C3.17 10.603 3 14.368 3 19.5c0 5.165.174 8.944.357 11.5c.157 2.183 1.62 3.922 3.643 4.473"
                      ></path>
                      <path
                        stroke="#2859c5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.354 17.047c.182-2.557 2.136-4.51 4.694-4.693C19.602 12.17 23.367 12 28.5 12s8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.133-.171 8.897-.354 11.453c-.182 2.557-2.136 4.51-4.694 4.693c-2.555.183-6.32.354-11.452.354c-5.133 0-8.897-.171-11.453-.354c-2.557-.182-4.51-2.136-4.693-4.694C12.17 37.398 12 33.633 12 28.5s.171-8.897.354-11.453"
                      ></path>
                      <path
                        stroke="#2859c5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M44.846 36.389c-2.255-2.114-3.88-3.522-5.008-4.444c-1.338-1.095-3.102-1.254-4.543-.293c-1.11.74-2.634 1.87-4.625 3.579c-2.96-2.831-5-4.61-6.338-5.705s-3.102-1.253-4.543-.293c-1.62 1.08-4.123 2.992-7.668 6.318M32 22a3 3 0 1 0 6 0a3 3 0 1 0-6 0"
                      ></path>
                    </g>
                  </svg>
                ),
                title: "Images Variety",
                description:
                  "Get 4 unique variations for every prompt — explore different styles in one go.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34px"
                    height="34px"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#017cee"
                      d="m4.127 254.974l122.568-125.639a2.265 2.265 0 0 0 .274-2.896c-7.453-10.406-21.207-12.21-26.303-19.203c-15.098-20.711-18.929-32.434-25.417-31.708a1.98 1.98 0 0 0-1.178.622l-44.276 45.388C4.322 147.628.661 205.137 0 253.295a2.4 2.4 0 0 0 4.127 1.679"
                    ></path>
                    <path
                      fill="#00ad46"
                      d="M254.974 251.873L129.335 129.296a2.266 2.266 0 0 0-2.9-.274c-10.406 7.457-12.21 21.207-19.203 26.303c-20.712 15.098-32.435 18.93-31.709 25.417c.066.451.286.866.622 1.174l45.389 44.276c26.09 25.473 83.598 29.134 131.757 29.795a2.401 2.401 0 0 0 1.683-4.114"
                    ></path>
                    <path
                      fill="#04d659"
                      d="M121.534 226.205c-14.263-13.915-20.872-41.44 6.462-98.2c-44.437 19.859-60.008 45.962-52.35 53.437z"
                    ></path>
                    <path
                      fill="#00c7d4"
                      d="M251.869 1.03L129.305 126.67a2.26 2.26 0 0 0-.274 2.895c7.457 10.406 21.202 12.21 26.303 19.203c15.098 20.712 18.933 32.435 25.417 31.709c.453-.065.87-.285 1.178-.622l44.276-45.389C251.678 108.376 255.339 50.868 256 2.71a2.405 2.405 0 0 0-4.131-1.678"
                    ></path>
                    <path
                      fill="#11e1ee"
                      d="M226.226 134.466c-13.915 14.263-41.44 20.873-98.204-6.462c19.859 44.437 45.963 60.009 53.437 52.351z"
                    ></path>
                    <path
                      fill="#e43921"
                      d="m1.018 4.131l125.638 122.565c.772.78 1.992.896 2.896.273c10.406-7.457 12.21-21.207 19.203-26.303c20.712-15.098 32.435-18.929 31.709-25.417a2 2 0 0 0-.622-1.178l-45.389-44.276C108.363 4.322 50.855.661 2.696 0a2.4 2.4 0 0 0-1.678 4.131"
                    ></path>
                    <path
                      fill="#ff7557"
                      d="M134.475 29.8c14.263 13.915 20.872 41.44-6.462 98.204c44.437-19.859 60.008-45.967 52.35-53.437z"
                    ></path>
                    <path
                      fill="#0cb6ff"
                      d="M29.795 121.543C43.71 107.28 71.235 100.67 128 128.004c-19.86-44.436-45.963-60.008-53.438-52.35z"
                    ></path>
                    <circle
                      cx={128.017}
                      cy={127.983}
                      r={5.479}
                      fill="#4a4848"
                    ></circle>
                  </svg>
                ),
                title: "Easy to Use",
                description:
                  "Generate, save, and share — no login or complicated steps required.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:border-purple-400/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="About"
        className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI KGenesis
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Unleash your creativity with the power of AI. Generate stunning,
                unique images from simple text descriptions in seconds.
              </p>
              <div className="flex space-x-4">
                {[Github, Twitter, Instagram].map((Icon, i) => (
                  <motion.button
                    key={i}
                    className="p-2 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                {["Features", "Pricing", "API", "Gallery"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                {["Help Center", "Contact", "Status", "Terms"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`fixed top-0 right-0 h-full max-w-100 bg-white shadow-lg transform transition-transform duration-300 z-999 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg text-black font-semibold">My Favorites</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center">No favorites yet</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {favorites.map((url, i) => (
                <div
                  key={i}
                  className="relative group rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={url}
                    // fill
                    height={300}
                    width={300}
                    alt="favorite"
                    className="w-full h-42 object-cover"
                  />

                  <button
                    onClick={() => removeFavorite(url)}
                    className="bg-white z-50 absolute top-0 right-0 p-1.5 py-0.5 text-red-500 rounded-full hover:text-white hover:bg-red-400     text-black"
                  >
                    <X className="w-4 " />
                  </button>
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                    <button
                      onClick={() => setSelectedImage(url)}
                      className="bg-white p-2 text-black rounded-full shadow hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        height="32px"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <circle
                            cx={12}
                            cy={12}
                            r={4}
                            fill="currentColor"
                          ></circle>
                          <path
                            stroke="currentColor"
                            strokeWidth={2}
                            d="M21 12s-1-8-9-8s-9 8-9 8"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    {/* <button
                      onClick={() => handleDownload(url)}
                      className="bg-white p-2 text-black rounded-full shadow hover:bg-gray-200"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeFavorite(url)}
                      className="bg-red-500 p-2 rounded-full shadow hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-[500px] h-full">
                <img
                  src={selectedImage}
                  alt="Generated image"
                  className="w-auto h-full rounded-xl"
                />
              </div>
              <div className="flex w-full justify-between items-center mt-3 px-2">
                <motion.button
                  onClick={() =>
                    handleDownload(
                      `/api/proxy?url=${encodeURIComponent(selectedImage)}`,
                      i
                    )
                  }
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-400 hover:text-green-400 hover:bg-green-400/10 transition-colors shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" /> Download
                </motion.button>

                <motion.button
                  onClick={() =>
                    handleShare(
                      `/api/proxy?url=${encodeURIComponent(selectedImage)}`
                    )
                  }
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-colors shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4" /> Share
                </motion.button>

                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-4 h-4" /> Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
