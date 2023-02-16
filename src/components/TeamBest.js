import Zafack from "../assets/team/ClementZafack.png";
import Zebaze from "../assets/team/mireilZebaze.png";
import Richard from "../assets/team/fotsoRichard.png";

const TeamBest = () => {
  return (
    <div>
      {/* <!-- best coligues begin --> */}

      {/* <!-- Title begin --> */}
      <div className="lg:mx-44 mx-10 my-8">
        <div className="w-3/6">
          <h1 className="font-bold text-3xl font-serif">Talented Team Members</h1>
          <p>A devoted and professional team working efficiently To
            provide high quality services and products.</p>
        </div>
      </div>
      {/* <!-- Title end --> */}

      {/* <!-- items begin--> */}
      <div className=" h-full flex flex-col lg:flex-row lg:justify-around my-16 items-center lg:pl-0">
        {/* <!-- coligue 1 --> */}
        <div className="relative mt-14 ml-24 flex justify-end bg-green-300 h-44 w-72">
          {/* <!-- image --> */}
          <div className="absolute -top-8 -left-24">
            <img src={Richard} alt="" className="h-44" />
          </div>
          {/* <!-- Name and Position --> */}
          <div className="w-48 px-4 py-6 flex flex-col gap-4 justify-center text-black">
            <h1 className="text-2xl font-bold font-serif">Fotso Richard</h1>
            <p>Administrative Director general</p>
          </div>
        </div>

        {/* <!-- coligue 2 --> */}

        <div className="relative mt-14 ml-24 flex justify-end bg-green-300 h-44 w-72">
          {/* <!-- image --> */}
          <div className="absolute -top-8 -left-24">
            <img src={Zebaze} alt="" className="h-44" />
          </div>
          {/* <!-- Name and Position --> */}
          <div className="w-48 px-4 py-6 flex flex-col gap-4 justify-center text-black">
            <h1 className="text-2xl font-bold font-serif">Mireille Zebaze</h1>
            <p>Administrative Director general</p>
          </div>
        </div>

        {/* <!-- coligue 3 --> */}

        <div className="relative mt-14 ml-24 flex justify-end bg-green-300 h-44 w-72">
          {/* <!-- image --> */}
          <div className="absolute -top-8 -left-24">
            <img src={Zafack} alt="" className="h-44" />
          </div>
          {/* <!-- Name and Position --> */}
          <div className="w-48 px-4 py-6 flex flex-col gap-4 justify-center text-black">
            <h1 className="text-2xl font-bold font-serif">Clement Zafack</h1>
            <p>Administrative Director general</p>
          </div>
        </div>

      </div>
      {/* <!-- items end --> */}
    </div>
  );
}

export default TeamBest;