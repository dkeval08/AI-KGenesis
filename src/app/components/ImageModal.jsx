"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Share2, X } from "lucide-react";

const ImageModal = ({
  selectedImage,
  setSelectedImage,
  handleDownload,
  handleShare,
}) => (
  <AnimatePresence>
    {selectedImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-lg z-999 flex items-center justify-center p-4"
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
                  `/api/proxy?url=${encodeURIComponent(selectedImage)}`
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
);

export default ImageModal;
