import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/img3.jpg"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(1.1) contrast(1.05)'
          }}
        >
          <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(10,15,25,0.45) 0%, rgba(10,15,25,0.35) 50%, rgba(10,15,25,0.45) 100%)'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <h1
            className="font-bold leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
            aria-label="カーベイ株式会社"
          >
            カーベイ株式会社
          </h1>

          {/* Subtitle */}
          <p
            className="font-medium leading-relaxed max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 2rem)',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}
            aria-label="儲かる車屋をみんなの手に"
          >
            儲かる車屋をみんなの手に。
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
        aria-label="下にスクロール"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }
        }}
      >
        <ChevronDown className="h-8 w-8" />
      </div>

      {/* Reduced Motion Support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          video {
            display: none;
          }
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;