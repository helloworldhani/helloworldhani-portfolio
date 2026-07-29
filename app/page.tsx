import React from "react";

/**
 * Graphic Design Portfolio — Cover Slide
 * Pixel-accurate recreation of the reference image using a single
 * SVG canvas (viewBox 0 0 700 521) so every element scales together
 * and stays in the exact same relative position at any size.
 */

const PortfolioCover: React.FC = () => {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <svg
        viewBox="0 0 700 521"
        className="w-full h-full"
        style={{ maxWidth: "1000px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="700" height="521" fill="#000000" />

        {/* ---------------- Sparkle graphic ---------------- */}
        <g transform="translate(443,175) scale(0.62)">
          {/* Vertical (top-bottom) spike */}
          <path
            d="M0 -140
               C8 -60 10 -30 0 0
               C-10 -30 -8 -60 0 -140 Z"
            fill="white"
          />
          <path
            d="M0 140
               C8 60 10 30 0 0
               C-10 30 -8 60 0 140 Z"
            fill="white"
          />
          {/* Horizontal (left-right) spike */}
          <path
            d="M-140 0
               C-60 8 -30 10 0 0
               C-30 -8 -60 -10 -140 0 Z"
            fill="white"
          />
          <path
            d="M140 0
               C60 8 30 10 0 0
               C30 -8 60 -10 140 0 Z"
            fill="white"
          />
          {/* Diagonal small flares for the sparkle look */}
          <path
            d="M-110 -50 C-40 -10 -10 -10 0 0 C-10 -10 -40 -30 -110 -50 Z"
            fill="white"
            opacity="0.95"
          />
          <path
            d="M110 -50 C40 -10 10 -10 0 0 C10 -10 40 -30 110 -50 Z"
            fill="white"
            opacity="0.6"
          />
          <path
            d="M0 0 C20 40 30 80 40 120 C15 85 5 40 0 0 Z"
            fill="white"
            opacity="0.85"
          />
          {/* Core */}
          <circle cx="0" cy="0" r="6" fill="white" />
        </g>

        {/* ---------------- Designer credit block ---------------- */}
        <text x="572" y="200" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12.5" opacity="0.85">
          Graphic Designer
        </text>
        <text x="572" y="219" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="18" fontWeight="600">
          Kim Seo Yeon
        </text>
        <text x="572" y="247" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="15">
          Graphic Design
        </text>
        <text x="572" y="265" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="15">
          &amp;Photography
        </text>

        {/* ---------------- Title block ---------------- */}
        <text x="22" y="310" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontWeight="800" fontSize="58" letterSpacing="-1">
          GRAPHIC
        </text>
        <text x="226" y="362" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontWeight="800" fontSize="58" letterSpacing="-1">
          DESIGN
        </text>
        <text x="226" y="414" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontWeight="800" fontSize="58" letterSpacing="-1">
          PORTFOLIO
        </text>
        <text x="580" y="388" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontWeight="500" fontSize="15">
          2022
        </text>
        <text x="580" y="406" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontWeight="500" fontSize="15">
          ~ 2023
        </text>

        {/* ---------------- Footer ---------------- */}
        <text x="22" y="503" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" opacity="0.7">
          Index
        </text>
        <line x1="211" y1="478" x2="211" y2="521" stroke="#ffffff" strokeOpacity="0.3" />
        <line x1="381" y1="478" x2="381" y2="521" stroke="#ffffff" strokeOpacity="0.3" />
        <text x="678" y="503" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" opacity="0.7" textAnchor="end">
          01
        </text>
      </svg>
    </div>
  );
};

export default PortfolioCover;