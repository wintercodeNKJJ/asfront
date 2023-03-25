/**
 * Only the central component is loaded from sanity.
 * the rest of the elements should be loaded from sanity too
 */

import OptionsItems from "./OptoinsItems";
import imageUrl from "../utility/imageUrl";
import Techno from "../assets/techno.jpeg";

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
  return (
    <div className="font-serif">

      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start bg-white items-baseline gap-4">
        <h1 className="text-5xl font-serif font-extrabold my-3">{prop.data.title.replace("_", " ")}</h1>
        <span className=" font-light text-lg font-serif">{prop.data.subtitle.substring(0, 100) + '...'}</span>
      </div>
      {/* <!-- page tite end --> */}

      {/* <div className="flex justify-between bg-cover relative h-56">
        <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} className="w-full object-cover h-full" alt={prop.data.title} />
        <div className="px-4 lg:px-40 text-black text-3xl font-serif py-2 flex flex-col gap-4 w-full md:w-2/4 lg:h-80 h-52 absolute">
          <h2 className=" h-48 overflow-hidden ">
            {prop.data.subtitle.substring(0, 100) + '...'}
          </h2>
        </div>

      </div> */}

      <div className="grid md:grid-cols-3 gap-2 py-10 px-8 md:px-20 lg:px-40">

        {/* <!-- top news block begin --> grid lg:grid-cols-3 grid-cols-1 gap-2 */}

        <div className="col-span-1 md:col-span-2 ">

          <div className="col-span-3">
            <div className=" w-full pt-6">
              <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} alt="Energy" className="h-44 w-full object-cover" />
            </div>
          </div>
          {/* <!-- left side --> */}
          <div className="col-span-3">
            <div className="my-5 text-2xl font-serif font-bold">
              <h1>{prop.data.subtitle}</h1>
            </div>
            <div>
              <p>
                {prop.data.body.children.text}
              </p>
            </div>
          </div>
        </div>

        {/* <!-- top news block end--> */}

        {/* <!-- related chapters begin --> */}
        <div className=" p-4">
          <div className="flex flex-col">
            <div className="my-2">
              <div className="">
                <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} alt="Energy" className=" h-24 w-full object-cover" />
                <div className="flex justify-end text-sm">
                  <p>29/3/2012</p>
                </div>
              </div>
              <h1 className="font-bold text-justify ">{prop.data.subtitle.substring(0, 50) + '...'}</h1>
            </div>

            <div className="my-2">
              <div className="">
                <img src={Techno} alt="Energy" className="h-24 w-full object-cover" />
                <div className="flex justify-end text-sm">
                  <p>29/3/2012</p>
                </div>
              </div>
              <h1 className="font-bold text-justify ">Energy subtopic one ...</h1>
            </div>

            <div className="my-2">
              <div className="">
                <img src={Techno} alt="Energy" className="h-24 w-full object-cover" />
                <div className="flex justify-end text-sm">
                  <p>29/3/2012</p>
                </div>
              </div>
              <h1 className="font-bold text-justify ">Energy subtopic one ...</h1>
            </div>

          </div>
        </div>
        {/* <!-- related chapters end --> */}
      </div>


      {/* <span className="font-bold text-3xl mt-5 mb-3 font-serif">Similar topics to {prop.title} </span> */}

      <OptionsItems searchtitle={prop.title} />

    </div>
  );
}

export default DitailsContent;