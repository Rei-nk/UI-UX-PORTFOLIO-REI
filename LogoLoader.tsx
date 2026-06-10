import React, { useEffect, useState } from 'react';

export default function LogoLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Animasi selesai dan menghilang setelah 3.5 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0F] animate-fadeOut">
      <div className="relative flex flex-col items-center">
        {/* SVG Logo Geometric dengan Efek Neon */}
        <svg
          className="w-24 h-24 md:w-32 md:h-32 stroke-current text-[#FF5F1F] animate-logoAssemble"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(255, 95, 31, 0.6))'
          }}
        >
          {/* Garis Kinetik Inisial "W" */}
          <path
            d="M20 30 L35 70 L50 45 L65 70 L80 30"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-drawPath"
          />
          {/* Garis Potong Estetika Inisial "R" */}
          <path
            d="M50 45 L65 30 L80 45 L65 60 L85 75"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-drawPath2"
          />
        </svg>

        {/* Teks Brand Identity */}
        <h1 className="mt-6 font-sans text-lg md:text-xl font-bold tracking-[0.3em] text-white uppercase opacity-0 animate-textFadeIn">
          REI DESIGNARY
        </h1>
        <p className="mt-1 font-sans text-xs tracking-[0.15em] text-[#FF5F1F] uppercase opacity-0 animate-textFadeInDelay">
          UI/UX & Visual Design 
        </p>
      </div>

      {/* Bar Progress Mini Premium */}
      <div className="absolute bottom-12 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-[#FF5F1F] w-0 animate-progressBar shadow-[0_0_8px_#FF5F1F]"></div>
      </div>

      {/* Custom CSS Injection */}
      <style jsx>{`
        @keyframes drawPath {
          0% { stroke-dasharray: 200; stroke-dashoffset: 200; }
          40% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPath2 {
          0% { stroke-dasharray: 150; stroke-dashoffset: 150; }
          20% { stroke-dashoffset: 150; }
          60% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes logoAssemble {
          0%, 60% { transform: scale(0.9); }
          75% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes textFadeIn {
          0%, 50% { opacity: 0; transform: translateY(10px); }
          75%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes textFadeInDelay {
          0%, 65% { opacity: 0; transform: translateY(5px); }
          85%, 100% { opacity: 0.6; transform: translateY(0); }
        }
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fadeOut {
          0%, 85% { opacity: 1; visibility: visible; }
          100% { opacity: 0; visibility: hidden; }
        }
        .animate-drawPath { animation: drawPath 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-drawPath2 { animation: drawPath2 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-logoAssemble { animation: logoAssemble 3s ease-out forwards; }
        .animate-textFadeIn { animation: textFadeIn 2.5s ease-out forwards; }
        .animate-textFadeInDelay { animation: textFadeInDelay 2.5s ease-out forwards; }
        .animate-progressBar { animation: progressBar 2.8s cubic-bezier(0.1, 0.85, 0.25, 1) forwards; }
        .animate-fadeOut { animation: fadeOut 3.3s cubic-bezier(0.7, 0, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}