"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const itens = [
    { title: "Item 1", image: "/images/carousel/iten1.png", description: "Description for item 1" },
    { title: "Item 2", image: "/images/carousel/iten2.png", description: "Description for item 2" },
    { title: "Item 3", image: "/images/carousel/iten3.png", description: "Description for item 3" },
    { title: "Item 4", image: "/images/carousel/iten4.png", description: "Description for item 4" },
    { title: "Item 5", image: "/images/carousel/iten5.png", description: "Description for item 5" },
    { title: "Item 6", image: "/images/carousel/iten6.png", description: "Description for item 6" },
    { title: "Item 7", image: "/images/carousel/iten7.png", description: "Description for item 7" },
    { title: "Item 8", image: "/images/carousel/iten8.png", description: "Description for item 8" },
    { title: "Item 8", image: "/images/carousel/iten9.png", description: "Description for item 8" },
    { title: "Item 8", image: "/images/carousel/iten10.png", description: "Description for item 8" },
    { title: "Item 8", image: "/images/carousel/iten11.png", description: "Description for item 8" },
    { title: "Item 8", image: "/images/carousel/iten12.png", description: "Description for item 8" },
    { title: "Item 8", image: "/images/carousel/iten13.png", description: "Description for item 8" },
];

export default function Carousel() {
    return (
        <section className="w-full flex flex-col items-center mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
                We have the perfect look for you. Come and visit our store
            </h2>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="w-full max-w-3xl"
            >
                {itens.map((iten, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src={iten.image}
                                alt={iten.title}
                                width={300}
                                height={200}
                                className="w-auto h-auto object-cover rounded-xl shadow-md"
                            />
                            {/*
                            <h3 className="text-xl font-semibold mt-4">{iten.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{iten.description}</p>
                           */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}