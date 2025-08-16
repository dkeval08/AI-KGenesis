"use client";
import Image from "next/image";
import { X } from "lucide-react";

const Drawer = ({
  isOpen,
  setIsOpen,
  favorites,
  removeFavorite,
  setSelectedImage,
}) => (
  <div
    className={`fixed top-0 right-0 h-full max-w-full sm:max-w-100 bg-white shadow-lg transform transition-transform duration-300 z-998 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
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
        <div className="grid grid-cols-2 gap-4">
          {favorites.map((url, i) => (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={url}
                height={300}
                width={300}
                alt="favorite"
                className="w-full h-42 object-cover"
              />
              <button
                onClick={() => removeFavorite(url)}
                className="bg-white z-50 absolute top-0 right-0 p-1.5 py-0.5 text-red-500 rounded-full hover:text-white hover:bg-red-400 text-black"
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
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Drawer;
