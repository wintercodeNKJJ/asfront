import ASL from "../assets/ASL.png"
import DataAS from "../dbitems/dataAs";

/**
 * Africa systems principles and moto
 * The data hier is not yet related to sanity
 * @returns Informations concerning Africa systems principles
 */
const WhoWeAre = () => {

  const { AsData } = DataAS("vission")
  const { Inovation } = DataAS("inovation")

  let showAsD = true;
  let showInov = true;

  if (AsData.length <= 0) {
    showAsD = false
  }

  if (Inovation.length <= 0) {
    showInov = false
  }

  return (
    <div>
      {/* <!-- who we are and what we do begin --> */}

      <div className="px-8 md:px-20 lg:px-40 py-10 grid lg:grid-cols-3 grid-cols-1 gap-8">

        {/* <!-- left side information --> */}
        <div className="col-span-2">

          {/* <!-- who we are --> */}

          {showAsD && AsData.map(data => (
            <div className="lg:flex md:mb-4">
              <div className="bg-green-400 lg:w-1/2 h-36 flex justify-center items-center">
                <img src={ASL} alt="" className="h-32" />
              </div>

              <div className="px-2 lg:w-1/2 mt-4 lg:mt-0">
                <h1 className="text-xl font-bold font-serif">{data.title}</h1>

                <div className="">
                  <p>{data.body}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {showInov &&
          <div className="bg-[url('/src/assets/power.png')] bg-cover">
            <div className="p-4 text-white w-full md:w-64">
              <h1 className="text-2xl font-serif">{Inovation[0].title}</h1>
              <div className="font-light">
                <p>{Inovation[0].body}</p>
              </div>
            </div>
          </div>
        }
      </div>

    </div>
  );
}

export default WhoWeAre;