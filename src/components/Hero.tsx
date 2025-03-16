import React from 'react';
import '@fontsource/lobster';

import { heroDetails } from '@/data/hero';
import { footerDetails } from '@/data/footer';
const href = 'https://wa.me/' + footerDetails.telephone;


const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center px-5 h-screen bg-black"
            style={{
                backgroundImage: `url(${heroDetails.centerImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-labelledby="hero-heading"
        >
            {/* Overlay escuro para melhor contraste */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Conteúdo */}
            <div className="relative z-10 max-w-2xl">
                <h1
                    id="hero-heading"
                    className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-md"
                    style={{ fontFamily: 'Lobster, cursive' }}
                >
                    <span
                        className="bg-gradient-to-r from-rose-600 to-rose-300 bg-clip-text text-transparent"
                        translate='no'
                    >
                        {heroDetails.heading}
                    </span>
                </h1>
                <p
                    id="hero-description"
                    className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md"
                >
                    {heroDetails.subheading}
                </p>
                <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full transition">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {heroDetails.textButton}
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Hero;
