import Energy from "../assets/Energy.jpeg";
import Automobile from "../assets/Automobile.png";
import Events from "../assets/Event.jpeg";
import veiclT from "../assets/vehicle_tracking.jpeg";

const TopNewsBlock = () => {
  return (
    <div>
      {/* <!-- top news block begin --> */}

      <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="">
          {/* <!--news images --> */}
          <div className="flex">
            <img src={Events} alt="" className="w-1/3 h-60 object-cover" />
            <img src={Energy} alt="" className="w-1/3 h-60 object-cover" />
            <img src={Automobile} alt="" className="w-1/3 h-60 object-cover" />
          </div>
          {/* <!--news images --> */}

          {/* <!-- news text begin--> */}
          <div className="mt-4">
            <h1 className="font-bold font-serif text-xl">Events|Energy|Automobile and innovation</h1>
            <div className="mt-2 font-light">
              <p>Africa Systems provide you with software and services of outstanding quality
                as well as the best services ever in the Automobile, Energy production
                solutions as Event organization logistic management.</p>
            </div>
          </div>
          {/* <!-- news text end--> */}

        </div>

        <div>
          {/* <!-- news image --> */}
          <img src={veiclT} alt="" className="h-60 object-cover w-full" />
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
      </div>

      {/* <!-- top news block end--> */}
    </div>
  );
}

export default TopNewsBlock;