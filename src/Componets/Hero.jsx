import React from "react";
import img1 from '../assets/hero/image1.jpg'
import img2 from '../assets/hero/image2.jpg'
import img3 from '../assets/hero/image3.jpg'
import img4 from '../assets/hero/image4.jpg'

const Hero = () => {
  return (
    <div >
      <section className="mt-4">
        <div className="carousel w-full h-48 md:h-[640px]">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="absolute w-full h-full text-gray-200 max-h-[640px] bg-black/50 flex flex-col justify-center items-center rounded-md">
              <h2 className="px-4 text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold">
                The <span className="text-orange-500">Best</span>
              </h2>

              <h2 className="px-4 text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-bold">
                Foods <span className="text-orange-500">Delivered</span>
              </h2>
              <p className="text-gray-300 mt-1 md:mt-4">
                <small>
                  Savor the Finest Flavors: Discover a Gastronomic Delight. And
                  "Embark on a Gastronomic Adventure: Elevate Your Senses
                </small>
              </p>
              <button className="bg-orange-500 px-4 py-3 rounded-md mt-1 md:mt-4 text-gray-200 hover:bg-orange-400">
                Explore more
              </button>
            </div>

            <img
              src={img1}
              className="w-full rounded-md mx-h-[640px] object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="absolute w-full h-full text-gray-200 max-h-[640px] bg-black/50 flex flex-col justify-center items-center rounded-md">
              <h2 className="px-4 text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold">
                The <span className="text-orange-500">Best</span>
              </h2>

              <h2 className="px-4 text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-bold">
                Foods <span className="text-orange-500">Delivered</span>
              </h2>
              <p className="text-gray-300 mt-1 md:mt-4">
                <small>
                  Savor the Finest Flavors: Discover a Gastronomic Delight. And
                  "Embark on a Gastronomic Adventure: Elevate Your Senses
                </small>
              </p>
              <button className="bg-orange-500 px-4 py-3 rounded-md mt-1 md:mt-4 text-gray-200 hover:bg-orange-400">
                Explore more
              </button>
            </div>

            <img
              src={img2}
              className="w-full rounded-md mx-h-[640px] object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="absolute w-full h-full text-gray-200 max-h-[640px] bg-black/50 flex flex-col justify-center items-center rounded-md">
              <h2 className="px-4 text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold">
                The <span className="text-orange-500">Best</span>
              </h2>

              <h2 className="px-4 text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-bold">
                Foods <span className="text-orange-500">Delivered</span>
              </h2>
              <p className="text-gray-300 mt-1 md:mt-4">
                <small>
                  Savor the Finest Flavors: Discover a Gastronomic Delight. And
                  "Embark on a Gastronomic Adventure: Elevate Your Senses
                </small>
              </p>
              <button className="bg-orange-500 px-4 py-3 rounded-md mt-1 md:mt-4 text-gray-200 hover:bg-orange-400">
                Explore more
              </button>
            </div>

            <img
              src={img3}
              className="w-full rounded-md mx-h-[640px] object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="absolute w-full h-full text-gray-200 max-h-[640px] bg-black/50 flex flex-col justify-center items-center rounded-md">
              <h2 className="px-4 text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold">
                The <span className="text-orange-500">Best</span>
              </h2>

              <h2 className="px-4 text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-bold">
                Foods <span className="text-orange-500">Delivered</span>
              </h2>
              <p className="text-gray-300 mt-1 md:mt-4">
                <small>
                  Savor the Finest Flavors: Discover a Gastronomic Delight. And
                  "Embark on a Gastronomic Adventure: Elevate Your Senses
                </small>
              </p>
              <button className="bg-orange-500 px-4 py-3 rounded-md mt-1 md:mt-4 text-gray-200 hover:bg-orange-400">
                Explore more
              </button>
            </div>

            <img
              src={img4}
              className="w-full rounded-md mx-h-[640px] object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
