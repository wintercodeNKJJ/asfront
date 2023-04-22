import { AiOutlineArrowRight } from "react-icons/ai";
import Datastc from "../dbitems/dbit";
import urlFor from "../utility/imageUrl";
import { Carousel } from "flowbite-react";
import { useStateContext } from "../context/StateContext";
// import image1 from '../assets/Energy.jpeg'
// import image2 from '../assets/Health.jpeg'

const ImageSlider = () => {

  const { lang } = useStateContext();
  const { Industries } = Datastc("industries", lang);

  return (
    <div>

      <div className="h-56 md:h-60 relative corner-squar">
        <Carousel>
          {Industries.map((item, i) => (
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" key={i}>
              {/* <!-- item1 of slider --> */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full dark:text-gray-800">

                <div className="grid grid-cils-1 md:grid-cols-5">
                  {/* <!-- text --> */}
                  <div className="col-span-3 flex justify-center bg-[#347423] h-56 md:h-60 text-white">
                    <div className="w-full max-w-[24rem] my-4 mx-6">
                      <h1 className="text-4xl font-bold">{item.title}</h1>
                      <div className="">
                        <p>
                          {item.subtitle}
                        </p>
                      </div>
                      <div className=" my-5">
                        <a href={"/" + item.title.replace(" ", "_")}>
                          <button className="flex items-center gap-2">
                            learn More <AiOutlineArrowRight /> </button>
                        </a>
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

        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;