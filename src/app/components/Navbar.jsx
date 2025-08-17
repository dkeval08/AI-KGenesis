"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, X, Menu } from "lucide-react";

const Navbar = ({
  favorites,
  setIsOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav className="sticky top-0 z-100 bg-black/20 backdrop-blur-sm border-b border-white/10">
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
                  // href={`#${item}`}
                  onClick={() => {
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
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
                  onClick={() => {
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
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
  );
};

export default Navbar;
