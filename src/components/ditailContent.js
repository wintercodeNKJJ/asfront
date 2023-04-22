/**
 * Only the central component is loaded from sanity.
 * the rest of the elements should be loaded from sanity too
 */

import OptionsItems from "./OptoinsItems";
import imageUrl from "../utility/imageUrl";
import Techno from "../assets/techno.jpeg";
import AS from "../assets/ASL.png";

/**
 * 
 * @param {Object} data the item to be displayed ditaily
 * @param {string} title the title to use
 * @param {object} prop contains a data and a title
 * @example 
 * data = Industries.find((data)=>(data.title === "title"));
 * title = data.title
 * <DitailsContent data = {data} title={title}/>
 * @returns A ditail page describing the item
 */
const DitailsContent = (prop) => {
  let download = false;
  if(prop.data.title === "Radio" || prop.data.title === "LewooTrack"){
    download = true;
  }
  return (
    <div className="">

      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 bg-white">
        <h1 className="text-5xl font-extrabold mt-3">{prop.data.title.replace("_", " ")}</h1>
        <span className=" font-light text-lg">{prop.data.subtitle.substring(0, 100) + '...'}</span>
      </div>
      {/* <!-- page tite end --> */}

      <div className="grid md:grid-cols-3 gap-2 py-10 px-8 md:px-20 lg:px-40">

        {/* <!-- top news block begin --> grid lg:grid-cols-3 grid-cols-1 gap-2 */}

        <div className="col-span-1 md:col-span-2 ">

          <div className="col-span-3">
            <div className=" w-full pt-6 relative">
              <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} alt="Energy" className="h-96 w-full object-cover rounded-md overflow-hidden" />
              <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={AS} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>
            </div>
          </div>
          {/* <!-- left side --> */}
          <div className="col-span-3">
            <div className="my-5 text-2xl font-bold">
              <h1>{prop.data.subtitle}</h1>
            </div>
            <div>
              <p>
                {prop.data.body.children.text}
              </p>
            </div>
            <div className={download ? "w-full flex":"hidden"}>
              <a href={"/files/"+prop.data.title+"/file1.pdf"} download className=" my-2 px-4 py-1 rounded-full bg-[#4d4643] hover:bg-[#347423] duration-500 hover:scale-110 shadow-lg text-white flex justify-center">Download Broshure</a>
            </div>
          </div>
        </div>

        {/* <!-- top news block end--> */}

        {/* <!-- related chapters begin --> */}
        <div className=" p-4">
          <div className="flex flex-col">

            {prop.other.slice(0,4).map((item)=>(
              <div className="my-2">
              <div className="relative">
                <img src={item.mainImage !== null ? imageUrl(item.mainImage) : Techno} alt="Energy" className=" h-32 rounded-md w-full object-cover" />
                <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={AS} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>
              </div>
                <div className="flex justify-end text-sm">
                  <p>29/3/2012</p>
                </div>
              <h1 className="font-bold text-justify ">{item.subtitle.substring(0, 50) + '...'}</h1>
            </div>
            ))}

          </div>
        </div>
        {/* <!-- related chapters end --> */}
      </div>
      <OptionsItems searchtitle={prop.title} />

    </div>
  );
}

export default DitailsContent;