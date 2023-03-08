import Datastc from "../dbitems/dbit";
import urlFor from "../utility/imageUrl";
import { Carousel } from "flowbite-react";
// import { useEffect } from "react";

const ImageSlider = () => {

  const { Industries } = Datastc("industries");

  return (
    <div>

      <div className="h-56 md:h-60 relative">
        <Carousel>
          {Industries.map((item) => (
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
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

          {/* <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;