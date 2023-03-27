// import ImageSlider from "../components/ImageSlider";
import Tracking from "../assets/vehicle_tracking.jpeg";
// import PatnersLogo from "../components/PatnersLogo";
// import power from "../assets/power.png";
// import News from "../components/News";
import OptionsItems from "../components/OptoinsItems";

const Category = (prop) => {


  const Title = prop.title;
  return (
    <div>
      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start">
        <h1 className="text-5xl font-serif font-extrabold my-3">{Title}</h1>
      </div>
      {/* <!-- page tite end --> */}
      {/* <ImageSlider /> */}
      {/* <!-- top news block begin --> */}

      <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* <!-- left side --> */}
        <div>
          {/* <!-- news image --> */}
          <img src={Tracking} alt="" className="h-60 object-cover w-full" />
          {/* <!-- news image --> */}

          {/* <!-- news text begin--> */}
          <div className="mt-4">
            <h1 className="font-bold font-serif text-xl">Vehicle Tracking</h1>
            <div className="mt-2 font-light">
              <p>A simple solution developed by Africa systems to help you locate and monitor
                your vehicles across the land with just a click.</p>
            </div>
          </div>
          {/* <!-- news text end--> */}
        </div>

        {/* <!-- right side --> */}
        <div>
          {/* <!-- news text top begin --> */}
          <div className="mt-4 border-l-[30px] border-green-600 pl-2">
            <h1 className="font-bold font-serif text-3xl">First side Mesage</h1>
            <div className="mt-2 font-light">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sapiente quae eligendi fuga corrupti
                ratione aperiam laudantium minima voluptatibus, enim velit iure. Aliquid dicta libero sed esse quod ex
                voluptate!</p>
            </div>
          </div>
          {/* <!-- news text top end --> */}

          {/* <!-- news text begin--> */}
          <div className="mt-4 border-l-[30px] border-green-600 pl-2">
            <h1 className="font-bold font-serif text-3xl">Vehicle Tracking</h1>
            <div className="mt-2 font-light">
              <p>A simple solution developed by Africa systems to help you locate and monitor
                your vehicles across the land with just a click.</p>
            </div>
          </div>
          {/* <!-- news text end--> */}
        </div>
      </div>

      {/* <!-- top news block end--> */}

      <OptionsItems searchtitle={Title} />

      {/* <!-- Succeses begin --> */}
      {/* <div className="grid col-span-3 lg:grid-cols-4 lg:px-40 px-4 py-28 gap-5 bg-gray-300">

        <div className="col-span-3 lg:col-span-1 flex justify-center">
          <img src={power} alt="power" className="h-52 lg:h-60" />
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="flex items-baseline">
            <h1 className="font-serif font-bold text-2xl md:text-7xl text-green-600">+37</h1>
            <span className="text-sm md:text-base">Projects</span>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="flex items-baseline">
            <h1 className="font-serif font-bold text-2xl md:text-7xl text-green-600">+29</h1>
            <span className="text-sm md:text-base">Sucsses</span>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="flex items-baseline">
            <h1 className="font-serif font-bold text-2xl md:text-7xl text-green-600">+2</h1>
            <span className="text-sm md:text-base">Awords</span>
          </div>
        </div>

      </div> */}
      {/* <!-- Succeses end --> */}
    </div >
  );
}

export default Category;