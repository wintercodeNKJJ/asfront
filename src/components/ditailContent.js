import OptionsItems from "./OptoinsItems";
import imageUrl from "../utility/imageUrl";
import Techno from "../assets/techno.jpeg";

const DitailsContent = (prop) => {
  return (
    <div>

      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start bg-green-200">
        <h1 className="text-5xl font-serif font-extrabold my-3">{prop.data.title.replace("_", " ")}</h1>
      </div>
      {/* <!-- page tite end --> */}

      {/* <!-- tom landing picture begin --> */}
      <div className="flex justify-between bg-cover relative h-56">
        <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} className="w-full object-cover h-full" alt={prop.data.title} />
        <div className="px-4 lg:px-40 text-black text-3xl font-serif py-2 flex flex-col gap-4 w-full md:w-2/4 lg:h-80 h-52 absolute">
          <h2 className=" h-48 overflow-hidden ">
            {prop.data.subtitle.substring(0, 100) + '...'}
          </h2>
        </div>

      </div>
      {/* <!-- tom landing picture end --> */}

      {/* <!-- related chapters begin --> */}
      <div className="md:px-40 px-4 my-8">
        <div className="border border-green-700 grid lg:grid-cols-3 grid-cols-1 p-4 gap-4">
          <div className=" col-span-1">
            <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} alt="Energy" className="h-44 w-full object-cover" />
            <div className="flex justify-end text-sm m-1">
              <p>29/3/2012</p>
            </div>
            <h1 className="font-bold font-serif text-xl ">{prop.data.subtitle}</h1>
          </div>

          <div className=" col-span-1">
            <img src={Techno} alt="Energy" className="h-44 w-full object-cover" />
            <div className="flex justify-end text-sm m-1">
              <p>29/3/2012</p>
            </div>
            <h1 className="font-bold font-serif text-2xl">Energy subtopic one ...</h1>
          </div>

          <div className=" col-span-1">
            <img src={Techno} alt="Energy" className="h-44 w-full object-cover" />
            <div className="flex justify-end text-sm m-1">
              <p>29/3/2012</p>
            </div>
            <h1 className="font-bold font-serif text-2xl">Energy subtopic one ...</h1>
          </div>

        </div>
      </div>
      {/* <!-- related chapters end --> */}

      {/* <!-- top news block begin --> */}

      <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
        {/* <!-- left side --> */}
        <div className="col-span-2">
          <div className="my-5 text-2xl font-serif font-bold">
            <h1>{prop.data.subtitle}</h1>
          </div>
          <div>
            <p>
              {prop.data.body.children.text}
            </p>
          </div>
        </div>

        {/* <!-- right side --> */}
        <div>
          <div>
            <img src={prop.data.mainImage !== null ? imageUrl(prop.data.mainImage) : Techno} alt="Energy" className="h-60" />
          </div>
        </div>
      </div>

      {/* <!-- top news block end--> */}


      <span className="font-bold text-3xl mt-5 mb-3 font-serif">Similar topics to {prop.title} </span>

      <OptionsItems />

    </div>
  );
}

export default DitailsContent;