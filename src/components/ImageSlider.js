import { AiOutlineArrowRight } from "react-icons/ai";
import Datastc from "../dbitems/dbit";
import urlFor from "../utility/imageUrl";
import { Carousel } from "flowbite-react";
// import image1 from '../assets/Energy.jpeg'
// import image2 from '../assets/Health.jpeg'

const ImageSlider = () => {

  const { Industries } = Datastc("industries");
  // const Industries = [
  //   {
  //     title: "this os a title",
  //     subtitle: "this is a sub title this is a sub title this is a sub title this is a sub title this is a sub title",
  //     mainImage: image1,
  //   },
  //   {
  //     title: "this os a title",
  //     subtitle: "this is a sub title this is a sub title this is a sub title this is a sub title this is a sub title",
  //     mainImage: image2,
  //   },
  // ]

  return (
    <div>

      <div className="h-56 md:h-60 relative corner-squar">
        <Carousel>
          {Industries.map((item) => (
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              {/* <!-- item1 of slider --> */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full dark:text-gray-800">

                <div className="grid grid-cils-1 md:grid-cols-5">
                  {/* <!-- text --> */}
                  <div className="col-span-3 flex justify-center bg-[#347423] h-56 md:h-60 text-white">
                    <div className="w-96">
                      <h1 className="text-4xl font-bold font-serif my-4">{item.title}</h1>
                      <div className="">
                        <p>
                          {item.subtitle}
                        </p>
                      </div>
                      <div className=" my-5">
                        <button className="flex items-center gap-2">
                          learn More <AiOutlineArrowRight /> </button>
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