"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Sparkles, Download, Share2, Palette, Wand2, Star } from "lucide-react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Drawer from "./Drawer";
import FeaturesSection from "./FeaturesSection";
import ImageModal from "./ImageModal";

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (url, i) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `AI_Image_${i ? i + 1 : 0}.png`;
    link.click();
  };

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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = (url) => {
    setFavorites((prev) => prev.filter((f) => f !== url));
  };

  const toggleFavorite = (url) => {
    setFavorites((prev) =>
      prev.includes(url) ? prev.filter((f) => f !== url) : [...prev, url]
    );
  };

  const generateImage = async () => {
    try {
      setLoading(true);
      setImages([]);

      const response = await axios.post("/api/generate", { prompt });
      console.log(response.data);
      const images = response?.data?.data?.[0];

      setImages(images);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <Navbar
        favorites={favorites}
        setIsOpen={setIsOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection />

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

      <FeaturesSection />

      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        favorites={favorites}
        removeFavorite={removeFavorite}
        setSelectedImage={setSelectedImage}
      />

      <ImageModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        handleDownload={handleDownload}
        handleShare={handleShare}
      />

      <Footer favorites={favorites} setIsOpen={setIsOpen} />
    </div>
  );
}
