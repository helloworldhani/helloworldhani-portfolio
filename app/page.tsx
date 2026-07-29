"use client";

import React, { useState } from "react";

/**
 * Graphic Design Portfolio — Cover Slide
 * Pixel-accurate recreation of the reference image using a single
 * SVG canvas (viewBox 0 0 700 521) so every element scales together
 * and stays in the exact same relative position at any size.
 *
 * Interactivity:
 * - Page-load entrance: sparkle scales/rotates in, title lines and
 *   credit text stagger-fade upward.
 * - Sparkle: gentle idle pulse, plus a snappier spin + glow on hover.
 * - Footer: "Index" and "01" underline on hover; dividers brighten.
 */

const PortfolioCover: React.FC = () => {
  const [sparkleHover, setSparkleHover] = useState(false);

  return (
    <div className="w-full bg-black flex items-start justify-center">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparkleIn {
          from { opacity: 0; transform: scale(0.4) rotate(-45deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes idlePulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50%      { transform: scale(1.04) rotate(2deg); }
        }
        .fade-line {
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .sparkle-wrap {
          transform-origin: 443px 175px;
          opacity: 0;
          animation:
            sparkleIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            idlePulse 5s ease-in-out 1s infinite;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }
        .sparkle-wrap.hovered {
          animation:
            sparkleIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transform: scale(1.12) rotate(90deg);
        }
        .footer-item {
          cursor: pointer;
          transition: opacity 0.25s ease;
        }
        .footer-item:hover {
          opacity: 1 !important;
        }
        .footer-underline {
          transition: stroke-dashoffset 0.35s ease;
        }
        .divider {
          transition: stroke-opacity 0.25s ease;
        }
        .footer-group:hover .divider {
          stroke-opacity: 0.6;
        }
      `}</style>

      <svg
        viewBox="0 0 700 521"
        className="w-full h-full"
        style={{ maxWidth: "1000px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="700" height="521" fill="#000000" />

        {/* ---------------- Sparkle graphic ---------------- */}
        <g
          className={`sparkle-wrap${sparkleHover ? " hovered" : ""}`}
          onMouseEnter={() => setSparkleHover(true)}
          onMouseLeave={() => setSparkleHover(false)}
        >
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
        </g>

        {/* ---------------- Designer credit block ---------------- */}
        <text
          x="572"
          y="200"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="12.5"
          opacity="0.85"
          className="fade-line"
          style={{ animationDelay: "0.5s" }}
        >
          Graphic Designer
        </text>
        <text
          x="572"
          y="219"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="18"
          fontWeight="600"
          className="fade-line"
          style={{ animationDelay: "0.6s" }}
        >
          Kim Seo Yeon
        </text>
        <text
          x="572"
          y="247"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="15"
          className="fade-line"
          style={{ animationDelay: "0.7s" }}
        >
          Graphic Design
        </text>
        <text
          x="572"
          y="265"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="15"
          className="fade-line"
          style={{ animationDelay: "0.75s" }}
        >
          &amp;Photography
        </text>

        {/* ---------------- Title block ---------------- */}
        <text
          x="22"
          y="310"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="58"
          letterSpacing="-1"
          className="fade-line"
          style={{ animationDelay: "0.1s" }}
        >
          GRAPHIC
        </text>
        <text
          x="226"
          y="362"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="58"
          letterSpacing="-1"
          className="fade-line"
          style={{ animationDelay: "0.2s" }}
        >
          DESIGN
        </text>
        <text
          x="226"
          y="414"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="58"
          letterSpacing="-1"
          className="fade-line"
          style={{ animationDelay: "0.3s" }}
        >
          PORTFOLIO
        </text>
        <text
          x="580"
          y="388"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="500"
          fontSize="15"
          className="fade-line"
          style={{ animationDelay: "0.4s" }}
        >
          2022
        </text>
        <text
          x="580"
          y="406"
          fill="#ffffff"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="500"
          fontSize="15"
          className="fade-line"
          style={{ animationDelay: "0.45s" }}
        >
          ~ 2023
        </text>

        {/* ---------------- Footer ---------------- */}
        <g
          className="footer-item footer-group"
          style={{ opacity: 0.7 }}
          onClick={() => {}}
        >
          <text
            x="22"
            y="503"
            fill="#ffffff"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
          >
            Index
          </text>
        </g>
        <line
          className="divider"
          x1="211"
          y1="478"
          x2="211"
          y2="521"
          stroke="#ffffff"
          strokeOpacity="0.3"
        />
        <line
          className="divider"
          x1="381"
          y1="478"
          x2="381"
          y2="521"
          stroke="#ffffff"
          strokeOpacity="0.3"
        />
        <g className="footer-item" style={{ opacity: 0.7 }}>
          <text
            x="678"
            y="503"
            fill="#ffffff"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            textAnchor="end"
          >
            01
          </text>
        </g>
      </svg>
    </div>
  );
};

export default PortfolioCover;