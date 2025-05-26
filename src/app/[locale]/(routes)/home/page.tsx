'use client'
import React from 'react';
import {  ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import ZoaCards from '@/app/my-components/zoaCards';
import ScrollSyncComponent from '@/app/my-components/ScrollSyncComponent';
import PortfolioShowcase from '@/app/my-components/PortofolioShowcase';
import ClientShowcase from '@/app/my-components/ClientShowCase';
import SocialMedia from '@/app/my-components/SocialMedia';
import Service from '@/app/my-components/services';

const Page = () => {
  const languages = [
    "أهلاً وسهلاً",
    "Bienvenue !",
    "Welcome",
    "환영",
    "Benvenuto !",
    "いらっしゃいませ",
    "欢迎",
    "स्वागत",
    "Willkommen!",
    "¡Bienvenido"
  ];

  return (

    <div className='w-full'>
      <div className="min-h-screen text-white overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 lg:p-6">
          <div className="container mx-auto px-4 lg:px-10">
            <div className="flex justify-between lg:justify-center items-center">

              {/* Center - Scrolling languages (hidden on mobile) */}
              <div className="hidden lg:flex flex-1 justify-center overflow-hidden mx-8">
                <div className="relative flex items-center text-sm w-max animate-scroll whitespace-nowrap py-4">
                  {/* Pink line centered above text */}
                  <div className="absolute top-[29px] -translate-y-full left-0 w-full h-[3px] bg-pink-500" />

                  {/* Scrolling languages */}
                  {[...languages, ...languages].map((lang, index) => (
                    <span
                      key={index}
                      className="text-white hover:text-pink-300 transition-colors whitespace-nowrap px-2"
                    >
                      {lang}
                      <span className="text-gray-600 mx-2">—</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side controls */}
              <div className="flex items-center space-x-4 ml-auto lg:ml-0">
                <div className="border border-cyan-400 px-3 py-1 text-cyan-400 text-sm">
                  DE
                </div>
                <div className="w-8 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-pink-400"></div>
                  <div className="w-full h-0.5 bg-pink-400"></div>
                  <div className="w-full h-0.5 bg-pink-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
      @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-scroll {
        animation: scroll 40s linear infinite;
      }
    `}</style>

        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row  pt-20 lg:pt-24">

            {/* Left Half - Logo and Social Icons */}
            <div className="w-full lg:w-1/2 flex flex-col lg:relative">

              {/* Logo Section */}
              <div className=" lg:mb-0 lg:absolute lg:-top-[70px] lg:left-0 z-30">
                <div className="flex flex-col items-center  lg:items-start">
                  <Image
                    src="/style/images/sdsLogo.svg"
                    alt="Snow Dream Studios Logo"
                    width={200}
                    height={200}
                    className="lg:w-[270px] lg:h-[270px] mb-4 lg:mb-2"
                  />

                  {/* Social Icons - Horizontal on mobile, vertical on desktop */}
                  <div className='flex flex-wrap md:flex-nowrap flex-row  mt-8'>

                    <div className="flex lg:flex-col flex-wrap md:flex-nowrap gap-3 md:gap-0 lg:space-y-5 space-x-4 lg:space-x-0 justify-center lg:justify-start py-5 lg:py-0 mt-0 md:mt-8">
                    <div className="w-11 h-11 border border-gray-600 flex items-center justify-center text-gray-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      Be
                    </div>
                    <div className="w-11 h-11  border border-gray-600 flex items-center justify-center text-gray-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      in
                    </div>
                    <div className="w-11 h-11  border border-gray-600 flex items-center justify-center text-gray-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      𝕏
                    </div>
                    <div className="w-11 h-11  border border-gray-600 flex items-center justify-center text-gray-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      f
                    </div>
                    <div className="w-11 h-11  border border-gray-600 flex items-center justify-center text-gray-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      ⚬
                    </div>
                  </div>
                    <div className="hidden lg:flex flex-col w-full items-center space-y-2 absolute bottom-8 left-1/2 lg:left-[270px]  transform -translate-x-1/2">
                      <span className="text-gray-400 text-sm">Nach unten scrollen</span>
                      <div className="border border-cyan-400 p-2 hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer">
                        <ChevronDown className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* Scroll Down Indicator - Hidden on mobile */}
             

            {/* Right Half - Moving Cards and Content */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-8 lg:space-y-12">

              {/* Moving Cards Section - Hidden on mobile or simplified */}
              <div className="hidden lg:block relative overflow-hidden">
                <div className="flex animate-slide-left space-x-9 h-auto items-center">
                  <div className="flex justify-center gap-14">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-[300px] xl:w-[400px] bg-transparent overflow-hidden flex-shrink-0"
                      >
                        <ZoaCards />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content Section */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="max-w-full lg:max-w-2xl text-center lg:text-left px-4 lg:px-0">
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-4 lg:mb-6">
                    <span className="text-cyan-400">Digitale Strategien entwickeln</span>, die Markenträume in Realität verwandeln.
                  </h1>
                  <p className="text-base lg:text-lg font-bold leading-relaxed mb-6 lg:mb-8 text-gray-300">
                    Marken dabei helfen, ihre Vision aufzubauen, groß zu träumen und erfolgreiche Strategien umzusetzen.
                  </p>
                  <button className="bg-cyan-400 text-black px-6 lg:px-8 py-3 font-semibold flex items-center justify-center space-x-2 hover:bg-cyan-300 transition-colors w-full sm:w-auto">
                    <span className='text-white'>Kontakt</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Mobile Scroll Indicator */}
              <div className="flex lg:hidden flex-col items-center space-y-2 mt-8">
                <span className="text-gray-400 text-sm">Nach unten scrollen</span>
                <div className="border border-cyan-400 p-2 hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-6">
          <ScrollSyncComponent />
          <SocialMedia/>
          <PortfolioShowcase />
          <ClientShowcase/>
          <Service/>
        </div>
        <style jsx>{`
      @keyframes slide-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-slide-left {
        animation: slide-left 8s linear infinite;
      }
      
      @media (max-width: 1023px) {
        .animate-slide-left {
          animation-play-state: paused;
        }
      }
    `}</style>

        {/* Other Components */}
     
      </div>
    </div>
  );
};

export default Page;