// import Africa from "../assets/Abstract Africa patchwork traditional fabric pattern vector map.jpeg";
// import Africa from "../assets/ASL.png";
import Africa2 from "../assets/logo/ASL.webp";
import Techno from "../assets/techno.jpeg";
import Automobile from "../assets/Automobile.png";
import jlk from "../assets/logo/jlk.png";
import sss from "../assets/logo/sss.png";
import lweoo from "../assets/logo/lewoo.png";
import News from "../components/News";
import HomeCont from "../dbitems/homeContent";
import DataAS from "../dbitems/dataAs";
import urlFor from "../utility/imageUrl";

/**
 * The pages is not yet connected to AS
 * @returns the about page of AS
 */
const About = () => {

  const { TopContent } = HomeCont("top");
  // const { MiddleContent } = HomeCont("middle");
  // const { ButtomContent } = HomeCont("buttom");
  const { AsData } = DataAS("vission");

  let show = true


  let showAsD = true;

  if (AsData.length <= 0) {
    showAsD = false
  }

  if (TopContent.length <= 0) {
    show = false;
  }
  else {
    console.log("top content in about us", TopContent[0].top.find(data => data.title === "+15"));
  }


  return (
    <div>

      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start bg-green-200">
        <h1 className="text-5xl font-serif font-extrabold my-3">About Africa Systems</h1>
      </div>
      {/* <!-- page title end --> */}

      {show && showAsD &&
        <div>
          {/* <!-- tom landing picture begin --> */}
          <div className="px-4 lg:px-40 flex justify-between bg-[url('/src/assets/Rectangle52.png')] bg-cover">
            <div className="text-white font-serif py-10 flex flex-col gap-4">
              <div>Products</div>
              <div>Services</div>
              <div>Certifications</div>
              <div>Partners</div>
              <div>Industries</div>
            </div>

            <div className="">
              <img src={Africa2} alt="Africa"
                className="h-72 w-96 object-cover" />
            </div>
          </div>
          {/* <!-- tom landing picture end --> */}

          {/* <!-- top news block begin --> */}

          <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
            <div className="col-span-2">
              {/* <!--about us begin --> */}
              <div className="mx-4">
                {/* <!-- expirience --> */}
                <div className="flex items-center gap-4 text-green-700">
                  <h1 className="text-7xl font-serif">{TopContent[0].top.find(data => data.title === "+15").title}</h1>
                  <h2 className="text-3xl font-bold font-serif">{TopContent[0].top.find(data => data.title === "+15").body}</h2>
                </div>

                {/* <!-- text --> */}
                <div>
                  <h2 className="text-2xl font-bold font-serif">{TopContent[0].top.find(data => data.slug.current === "the-main-mission").title}</h2>
                  <p>
                    {TopContent[0].top.find(data => data.slug.current === "the-main-mission").body}
                  </p>
                </div>

                {/* <!-- text with pic --> */}
                <div>
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="col-span-1">
                      <img src={Techno} alt="" className="h-32 object-cover w-full" />
                    </div>
                    <div className="col-span-1">
                      <p>
                        We enable our customers around the world to realize their potential through meaningful innovation.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="col-span-1">
                      <img src={Automobile} alt="" className="h-32 object-cover w-full" />
                    </div>
                    <div className="col-span-1">
                      <p>
                        Provide them with efficient solutions and quality services to strengthen their competitive advantages.
                      </p>
                    </div>
                  </div>

                </div>

                <div>
                  <h1 className="font-serif font-bold text-2xl">We build up the future</h1>
                  <div>
                    <p>
                      Power of Innovation, Imagination is more important than knowledge. For knowledge is limited, whereas
                      imagination embraces the entire world,stimulating progress, giving birth to evolution..
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--about us end --> */}
            </div>

            <div>
              {/* <!-- news text begin--> */}
              <div className="col-span-1 flex flex-col gap-8">
                <div className="bg-green-200 p-5">
                  <div>
                    <h1 className="font-serif font-bold text-3xl my-4">{TopContent[0].top.find(data => data.slug.current === "heighlights").title}
                    </h1>
                  </div>
                  <div className="h-1 w-24 bg-green-600"></div>
                  <div className="my-4 flex flex-col gap-2">
                    <h3>
                      {TopContent[0].top.find(data => data.slug.current === "heighlights").body}
                    </h3>
                  </div>
                </div>

                <div className="bg-green-200 p-5">
                  <div>
                    <h1 className="font-serif font-bold text-3xl my-4">{TopContent[0].top.find(data => data.slug.current === "contact-info").title}
                    </h1>
                  </div>
                  <div className="h-1 w-24 bg-green-600"></div>
                  <div className="my-4 flex flex-col gap-2">
                    <h3>
                      {TopContent[0].top.find(data => data.slug.current === "contact-info").body}
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!-- news text end--> */}
            </div>
          </div>

          {/* <!-- top news block end--> */}

          {/* <!-- What we do and who we are begin --> */}
          <div className="md:px-40 px-4">
            {/* <!-- who we are--> */}

            {showAsD && AsData.map(data => (

              <div className="my-10 min-w-[300px] bg-cover min-h-[18rem] relative">
                <img src={urlFor(data.mainImage)} alt={data.title} className="w-full h-60 object-cover" />
                <div className="absolute w-full h-full top-0 left-0 p-6 z-10">
                  <div className="w-1/2">
                    <h1 className="font-serif font-bold text-2xl">{data.title}</h1>
                    <p>{data.body}
                    </p>
                  </div>
                </div>
              </div>

            ))}

          </div>
          {/* <!-- What we do and who we are end --> */}

          {/* <!-- Logos begin --> */}

        </div>}

      <div className="grid grid-cols-1 bg-green-200 md:grid-cols-3 px-4 md:px-40 py-32 gap-10">
        <div className="flex justify-center">
          <img src={jlk} alt="" className="h-24" />
        </div>

        <div className="flex justify-center">
          <img src={sss} alt="" className="h-24" />
        </div>

        <div className="flex justify-center">
          <img src={lweoo} alt="" className="h-24" />
        </div>
      </div>

      {/* <!-- Logos End --> */}

      <News />
    </div >
  );
}

export default About;