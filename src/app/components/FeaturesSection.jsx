"use client";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import downloadAnim from "../Animations/download.json";
import shareAnim from "../Animations/share.json";
import favoriteAnim from "../Animations/favourite.json";

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
          />
          <path
            fill="#8fbffa"
            d="M12.354 17.047c.182-2.557 2.136-4.51 4.694-4.693C19.602 12.17 23.367 12 28.5 12s8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.133-.171 8.897-.354 11.453c-.182 2.557-2.136 4.51-4.694 4.693c-2.555.183-6.32.354-11.452.354c-5.133 0-8.897-.171-11.453-.354c-2.557-.182-4.51-2.136-4.693-4.694C12.17 37.398 12 33.633 12 28.5s.171-8.897.354-11.453"
          />
          <path
            fill="#fff"
            d="M32 22a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12.846 14.389c-.059 1.38-.128 2.564-.2 3.563c-.182 2.558-2.136 4.512-4.694 4.694c-2.555.183-6.32.354-11.452.354c-5.133 0-8.897-.171-11.453-.354c-2.557-.182-4.51-2.136-4.693-4.694a128 128 0 0 1-.233-4.4c3.545-3.327 6.048-5.238 7.668-6.319c1.44-.96 3.205-.802 4.543.293s3.378 2.874 6.338 5.705c1.99-1.709 3.515-2.839 4.625-3.58c1.44-.96 3.205-.8 4.543.294c1.128.922 2.753 2.33 5.008 4.444"
          />
          <path
            stroke="#2859c5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M35.474 7c-.552-2.024-2.29-3.486-4.473-3.643C28.445 3.173 24.665 3 19.5 3c-5.134 0-8.898.171-11.453.354c-2.557.182-4.512 2.136-4.694 4.694C3.17 10.603 3 14.368 3 19.5c0 5.165.174 8.944.357 11.5c.157 2.183 1.62 3.922 3.643 4.473"
          />
          <path
            stroke="#2859c5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.354 17.047c.182-2.557 2.136-4.51 4.694-4.693C19.602 12.17 23.367 12 28.5 12s8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.133-.171 8.897-.354 11.453c-.182 2.557-2.136 4.51-4.694 4.693c-2.555.183-6.32.354-11.452.354c-5.133 0-8.897-.171-11.453-.354c-2.557-.182-4.51-2.136-4.693-4.694C12.17 37.398 12 33.633 12 28.5s.171-8.897.354-11.453"
          />
          <path
            stroke="#2859c5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M44.846 36.389c-2.255-2.114-3.88-3.522-5.008-4.444c-1.338-1.095-3.102-1.254-4.543-.293c-1.11.74-2.634 1.87-4.625 3.579c-2.96-2.831-5-4.61-6.338-5.705s-3.102-1.253-4.543-.293c-1.62 1.08-4.123 2.992-7.668 6.318M32 22a3 3 0 1 0 6 0a3 3 0 1 0-6 0"
          />
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
        />
        <path
          fill="#00ad46"
          d="M254.974 251.873L129.335 129.296a2.266 2.266 0 0 0-2.9-.274c-10.406 7.457-12.21 21.207-19.203 26.303c-20.712 15.098-32.435 18.93-31.709 25.417c.066.451.286.866.622 1.174l45.389 44.276c26.09 25.473 83.598 29.134 131.757 29.795a2.401 2.401 0 0 0 1.683-4.114"
        />
        <path
          fill="#04d659"
          d="M121.534 226.205c-14.263-13.915-20.872-41.44 6.462-98.2c-44.437 19.859-60.008 45.962-52.35 53.437z"
        />
        <path
          fill="#00c7d4"
          d="M251.869 1.03L129.305 126.67a2.26 2.26 0 0 0-.274 2.895c7.457 10.406 21.202 12.21 26.303 19.203c15.098 20.712 18.933 32.435 25.417 31.709c.453-.065.87-.285 1.178-.622l44.276-45.389C251.678 108.376 255.339 50.868 256 2.71a2.405 2.405 0 0 0-4.131-1.678"
        />
        <path
          fill="#11e1ee"
          d="M226.226 134.466c-13.915 14.263-41.44 20.873-98.204-6.462c19.859 44.437 45.963 60.009 53.437 52.351z"
        />
        <path
          fill="#e43921"
          d="m1.018 4.131l125.638 122.565c.772.78 1.992.896 2.896.273c10.406-7.457 12.21-21.207 19.203-26.303c20.712-15.098 32.435-18.929 31.709-25.417a2 2 0 0 0-.622-1.178l-45.389-44.276C108.363 4.322 50.855.661 2.696 0a2.4 2.4 0 0 0-1.678 4.131"
        />
        <path
          fill="#ff7557"
          d="M134.475 29.8c14.263 13.915 20.872 41.44-6.462 98.204c44.437-19.859 60.008-45.967 52.35-53.437z"
        />
        <path
          fill="#0cb6ff"
          d="M29.795 121.543C43.71 107.28 71.235 100.67 128 128.004c-19.86-44.436-45.963-60.008-53.438-52.35z"
        />
        <circle cx={128.017} cy={127.983} r={5.479} fill="#4a4848" />
      </svg>
    ),
    title: "Easy to Use",
    description:
      "Generate, save, and share — no login or complicated steps required.",
  },
];

const FeaturesSection = () => (
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
        {features.map((feature, i) => (
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
);

export default FeaturesSection;
