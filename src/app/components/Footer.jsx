"use client";
import { Sparkles, Github, Twitter, Instagram, Heart, X } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ favorites, setIsOpen }) => (
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
            {[
              { Icon: Github, href: "https://github.com/dkeval08" },
              { Icon: Twitter, href: "https://x.com/GamerboyA65016" },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/keval_prajapati475/",
              },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-all inline-flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#Home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#Generate"
                className="hover:text-white transition-colors"
              >
                Generate
              </a>
            </li>
            <li>
              <a
                href="#Features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition-colors">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">More</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Heart className="w-4 h-4 text-pink-500" />
                My Favorites ({favorites.length})
              </button>
            </li>
            <li>
              <a
                href="https://github.com/dkeval08"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
