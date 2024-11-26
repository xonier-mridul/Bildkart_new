"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineHorizontalRule } from "react-icons/md";
import Image from "next/image";

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false
  };
  return (
    <>
      <div className="py-16 overflow-hidden bg-[#1e1b4b05]">
        <div className="flex flex-col items-center gap-2 justify-center mb-16">
          <span className="text-amber-400 text-xl font-bold flex gap-5 items-center">
            <MdOutlineHorizontalRule className="w-5" />
            Hassle-Free Ordering <MdOutlineHorizontalRule className="w-5" />
          </span>
          <h2 className="text-5xl text-neutral-800 font-semibold w-2/3 text-center leading-tight">
            Construction Product Orders Simplified
          </h2>
        </div>
        <Slider {...settings}>
          <div >
            <div className="flex flex-col items-center justify-center gap-3">
            <Image 
            className="text-center"
            src="/1545.jpg"
            height={150}
            width={150}
            alt="ttext"
            />
            <h4 className="text-center text-xl">Sanitary</h4>
            </div>
          </div>
          <div>
          <div className="flex flex-col items-center justify-center gap-3">
          <Image 
            src="/5731.jpg"
            height={150}
            width={150}
            alt="ttext"
            />
            <h4 className="text-center text-xl">Plaster</h4>
            </div>
          </div>
          <div>
          <div className="flex flex-col items-center justify-center gap-3">
          <Image 
            src="/10144.jpg"
            height={150}
            width={150}
            alt="ttext"
            />
            <h4 className="text-center text-xl">Facades</h4>
            </div>
          </div>
          <div>
          <div className="flex flex-col items-center justify-center gap-3">
          <Image 
            src="/15204.jpg"
            height={150}
            width={150}
            alt="ttext"
            />
            <h4 className="text-center text-xl">Electricity</h4>
            </div>
          </div>
          <div>
          <div className="flex flex-col items-center justify-center gap-3">
          <Image 
            src="/132625.jpg"
            height={150}
            width={150}
            alt="ttext"
            />
            <h4 className="text-center text-xl">Hardware</h4>
            </div>
          </div>
          <div>
          <div className="flex flex-col items-center justify-center gap-3">
          <Image 
            src="/111573.jpg"
            height={150}
            width={150}
            alt="ttext"
            />
            <h4 className="text-center text-xl">Paint</h4>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
