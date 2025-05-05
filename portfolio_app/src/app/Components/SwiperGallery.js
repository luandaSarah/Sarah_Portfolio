"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function SwiperGallery({ imgGalery }) {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {imgGallery.map((img, index) => {
          <div key={index} className="swiper-slide relative w-full h-96">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
            />
          </div>;
        })}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
