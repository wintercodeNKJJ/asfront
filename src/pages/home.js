import ImageSlider from "../components/ImageSlider";
import TopNewsBlock from "../components/TopNewsBlock";
import WhoWeAre from "../components/WhoWeAre";
import PartnersLogo from "../components/PatnersLogo";
import TeamBest from "../components/TeamBest";
import HomeCont from "../dbitems/homeContent";
import Techno from "../assets/techno.jpeg";
import Automobile from "../assets/Automobile.png";
import DataAS from "../dbitems/dataAs";



/**
 * Composed of several components
 * Not all are linked to sanity
 * @returns the home page of AS
 */
const Home = () => {
  const { TopContent } = HomeCont("top");
  const { Footer } = DataAS("footer")

  let ASnumber;
  let ASlocation;
  let ASemail;

  let show = false
  if (TopContent.length >= 1 && Footer.length >= 1) {
    show = true;
    ASnumber = Footer.find(data => (data.slug.current === "number"))
    ASlocation = Footer.find(data => (data.slug.current === "location"))
    ASemail = Footer.find(data => (data.slug.current === "email"))
  }

  return (
    <div>
      <ImageSlider />
      <TopNewsBlock />
      <WhoWeAre />
      {show &&
        <div>
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
                <div className="bg-[#347423] p-5 text-white">
                  <div>
                    <h1 className="font-serif font-bold text-3xl my-4">{TopContent[0].top.find(data => data.slug.current === "heighlights").title}
                    </h1>
                  </div>
                  <div className="h-1 w-24 bg-[#4d4643]"></div>
                  <div className="my-4 flex flex-col gap-2">
                    <h3>
                      {TopContent[0].top.find(data => data.slug.current === "heighlights").body}
                    </h3>
                  </div>
                </div>

                <div className="bg-[#347423] p-5 text-white">
                  <div>
                    <h1 className="font-serif font-bold text-3xl my-4">contact-info
                    </h1>
                  </div>
                  <div className="h-1 w-24 bg-[#4d4643]"></div>
                  <div className="my-4 flex flex-col gap-2">
                    <h3>
                      {ASlocation.body}<br />
                      {ASnumber.body}<br />
                      {ASemail.body}
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!-- news text end--> */}
            </div>
          </div>
        </div>
      }
      <PartnersLogo />
      <TeamBest />
    </div>
  );
}

export default Home;