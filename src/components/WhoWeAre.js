import ASL from "../assets/ASL.png"

const WhoWeAre = () => {
  return (
    <div>
      {/* <!-- who we are and what we do begin --> */}

      <div className="px-8 md:px-20 lg:px-40 py-10 grid lg:grid-cols-3 grid-cols-1 gap-8">

        {/* <!-- left side information --> */}
        <div className="col-span-2">

          {/* <!-- who we are --> */}
          <div className="lg:flex md:mb-4">
            <div className="bg-green-400 lg:w-1/2 h-36 flex justify-center items-center">
              <img src={ASL} alt="" className="h-32" />
            </div>

            <div className="px-2 lg:w-1/2 mt-4 lg:mt-0">
              <h1 className="text-xl font-bold font-serif">Who we are</h1>

              <div className="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui autem, magnam maxime numquam reprehenderit
                  corrupti aliquam veritatis</p>
              </div>
            </div>
          </div>

          {/* <!-- what we do --> */}
          <div className="lg:flex">
            <div className="bg-green-400 lg:w-1/2 h-36 flex justify-center items-center">
              <img src={ASL} alt="" className="h-32" />
            </div>

            <div className="px-2 lg:w-1/2 mt-4 lg:mt-0">
              <h1 className="text-xl font-bold font-serif">What we do</h1>

              <div className="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui autem, magnam maxime numquam reprehenderit
                  corrupti aliquam veritatis</p>
              </div>
            </div>
          </div>

        </div>

        {/* <!-- right side info --> */}
        <div className="bg-[url('/src/assets/power.png')] bg-cover">
          <div className="p-4 text-white w-full md:w-64">
            <h1 className="text-2xl font-serif">POWER OF INOVATION</h1>
            <div className="font-light">
              <p>Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the
                entire world, stimulating progress, giving birth to evolution.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- who we are and what we do end --> */}
    </div>
  );
}

export default WhoWeAre;