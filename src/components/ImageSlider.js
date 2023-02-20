import Datastc from "../dbitems/dbit";
import urlFor from "../utility/imageUrl";
// import { useEffect } from "react";

const ImageSlider = () => {

  const { Industries } = Datastc("industries");

  return (
    <div>

      <div id="default-carousel" className="relative" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden md:h-60">
          {/* <!-- Item 1 --> */}
          {Industries.map((item) => (
            <div id={"carousel-item-" + (Industries.indexOf(item) + 1)} className="hidden duration-700 ease-in-out w-full h-full" data-carousel-item>
              {/* <!-- item1 of slider --> */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full dark:text-gray-800">

                <div className="grid grid-cils-1 md:grid-cols-5">
                  {/* <!-- text --> */}
                  <div className="col-span-3 flex justify-center bg-green-300 h-56 md:h-60">
                    <div className="w-96">
                      <h1 className="text-4xl font-bold font-serif my-4">{item.title}</h1>
                      <div className="">
                        <p>
                          {item.subtitle}
                        </p>
                      </div>
                      <div className=" my-5">
                        <button className="bg-gradient-to-br from-green-300 to-green-400 w-24">
                          learn More </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- image --> */}
                  <div className="md:col-span-2">
                    <img src={urlFor(item.mainImage)} alt="" className="h-0 md:h-60 w-0 md:w-full object-cover" />
                  </div>
                </div>
              </div>
              {/* <!--item1 of slider end --> */}
            </div>
          ))}
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {Industries.map((item) => (
            <button id={"carousel-indicator-" + (Industries.indexOf(item) + 1)} type="button" className="w-3 h-3 rounded-full" aria-current="false"
              aria-label={"Slide 1" + (Industries.indexOf(item) + 1)} data-carousel-slide-to="0"></button>
          ))}
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

    </div>
  );
}

export default ImageSlider;