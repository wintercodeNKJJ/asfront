import Ndatastc from "../dbitems/dbnews";
import urlFor from "../utility/imageUrl";
import AS from "../assets/ASL.png";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useStateContext } from "../context/StateContext"

/**
 * this page contains the news of AS activites
 * not yet linked to AS
 * @returns news page of AS
 */
const NewsLatest = () => {
  const { lang } = useStateContext();

  const { Inovation } = Ndatastc("inovation", lang);
  const { Events } = Ndatastc("event", lang);
  const { News } = Ndatastc('news', lang);

  let data = 3;
  let Ne = 1;
  let Eve = 1;
  let Inovat = 1;

  if ((News.length + Events.length + Inovation.length < 3)) {
    data = null;
  }

  if (News.length === 0) { Ne = null }
  if (Events.length === 0) { Eve = null }
  if (Inovation.length === 0) { Inovat = null }


  return (
    <div>
      {!data && <div className="h-screen px-4 md:px-40 font-light flex justify-center items-center"> Loding...</div>}
      {data &&

        <div className=" relative">
          {/* <!-- Title begin --> */}
          <div className="lg:px-44 px-10 py-2 bg-[#347423] sticky top-0 z-10">
            <div className="w-3/6 flex gap-2">
            <a href="#News"><div className="border border-white text-white hover:text-black hover:bg-white hover:border-black duration-500 rounded-lg text-center w-24" >news</div></a>
            <a href="#Events"><div className="border border-white text-white hover:text-black hover:bg-white hover:border-black duration-500 rounded-lg text-center w-24" >events</div></a>
            <a href="#Inovation"><div className="border border-white text-white hover:text-black hover:bg-white hover:border-black duration-500 rounded-lg text-center w-24" >inovation</div></a>
            </div>
          </div>
          {/* <!-- Title end --> */}

          {/* <!-- items begin--> */}
          <div className="my-4 text-4xl font-bold md:y-10 lg:px-40 divider" id="News"> News</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:px-40 gap-x-10 py-5 md:py-10 px-4">

            {/* <!-- news block 1 --> */}

            {Ne && News.news.map((news) => (

              <div className="shadow-lg rounded-lg overflow-hidden">

                <div className="relative">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-60 w-full object-cover hover:scale-110 duration-500" />

                  <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={AS} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>
                </div>

                <div className="p-2">
                  <div className="text-3xl font-bold my-1">
                    <h1 className="">{news.title.substring(0,40)}...</h1>
                  </div>

                  <div className="my-1 text-justify">
                    <p>{news.body.children.text.substring(0,150)}</p>
                  </div>

                  <div className="h-1 bg-[#347423] w-24"></div>

                  <div className="flex justify-start my-3 w-32 hover:w-full rounded-full overflow-hidden hover:bg-[#4d4643] px-2 duration-500">
                    <span className="w-full hover:text-white"><a href={"/" + news._id} className="flex justify-between items-center w-full">Learn
                      More
                      <AiOutlineArrowRight /></a></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-4 text-4xl font-bold md:y-10 lg:px-40 divider" id="Events"> Events </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:px-40 gap-x-10 py-5 md:py-10 px-4">
            {Eve && Events.events.map((news) => (
              <div className="shadow-lg rounded-lg overflow-hidden">

                <div className="relative">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-60 w-full object-cover hover:scale-110 duration-500" />

                  <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={AS} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>
                </div>

                <div className="p-2">
                  <div className="text-3xl font-bold my-1">
                    <h1 className="">{news.title.substring(0,40)}...</h1>
                  </div>

                  <div className="my-1 text-justify">
                    <p>{news.body.children.text.substring(0,150)}</p>
                  </div>

                  <div className="h-1 bg-[#347423] w-24"></div>

                  <div className="flex justify-start my-3 w-32 hover:w-full rounded-full overflow-hidden hover:bg-[#4d4643] px-2 duration-500">
                    <span className="w-full hover:text-white"><a href={"/" + news._id} className="flex justify-between items-center w-full">Learn
                      More
                      <AiOutlineArrowRight /></a></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-4 text-4xl font-bold md:y-10 lg:px-40 divider" id="Inovation"> Inovations </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:px-40 gap-x-10 py-5 md:py-10 px-4">

            {Inovat && Inovation.inovations.map((news) => (
              <div className="shadow-lg rounded-lg overflow-hidden">

                <div className="relative">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-60 w-full object-cover hover:scale-110 duration-500" />

                  <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={AS} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>


                  {/* <span
                    className="rounded-full absolute top-2 left-2 bg-gradient-to-tr from-[#4d4643] to-green-600 p-1 w-20 -rotate-6 text-center text-white">new</span> */}
                </div>

                <div className="p-2">
                  <div className="text-3xl font-bold my-1">
                    <h1 className="">{news.title.substring(0,40)}...</h1>
                  </div>

                  <div className="my-1 text-justify">
                    <p>{news.body.children.text.substring(0,150)}</p>
                  </div>

                  <div className="h-1 bg-[#347423] w-24"></div>

                  <div className="flex justify-start my-3 w-32 hover:w-full rounded-full overflow-hidden hover:bg-[#4d4643] px-2 duration-500">
                    <span className="w-full hover:text-white"><a href={"/" + news._id} className="flex justify-between items-center w-full">Learn
                      More
                      <AiOutlineArrowRight /></a></span>
                  </div>
                </div>
              </div>
            ))}

          </div>
          {/* <!-- items end --> */}

        </div>
      }

    </div>
  );
}

export default NewsLatest;