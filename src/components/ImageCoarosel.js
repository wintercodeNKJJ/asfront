import urlFor from "../utility/imageUrl";
import { Carousel } from "flowbite-react";

const ImageCarosel = (props) => {

  let images = [];
  images = props.images;

  return (
    <div>

      <div className="h-56 md:h-60 relative corner-squar my-5">
        {/* <!-- Carousel wrapper --> */}
        <Carousel>
          {/* <!-- Item 1 --> */}
          {images.map((item) => (
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              {/* <!-- image --> */}
              <div className="md:col-span-2">
                <img src={urlFor(item)} alt="img" className="h-60 w-full object-cover" />
              </div>

            </div>
          ))}
        </Carousel>

      </div>

    </div>
  );
}

export default ImageCarosel;