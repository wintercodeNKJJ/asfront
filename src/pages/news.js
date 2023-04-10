import Ndatastc from "../dbitems/dbnews";
import urlFor from "../utility/imageUrl";
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

        <div>
          {/* <!-- Title begin --> */}
          <div className="lg:mx-44 mx-10 my-2">
            <div className="w-3/6">
              <h1 className="font-bold text-5xl font-serif py-8" id="latest">Latest news</h1>
            </div>
          </div>
          {/* <!-- Title end --> */}

          {/* <!-- items begin--> */}
          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-40 gap-x-10 py-5 md:py-10 px-4">

            {/* <!-- news block 1 --> */}
            {Ne && News.news.map((news) => (

              <div className="shadow-lg rounded-lg overflow-hidden">

                <div className="relative">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-60 w-full object-cover hover:scale-110 duration-500" />

                  <div className="flex justify-end text-sm text-white absolute right-2 bottom-2">
                    <p>{news._createdAt}</p>
                  </div>

                  <span
                    className="rounded-full absolute top-2 left-2 bg-gradient-to-tr from-[#4d4643] to-green-600 p-1 w-20 -rotate-6 text-center text-white">new</span>
                </div>

                <div className="p-2">
                  <div className="text-3xl font-serif font-bold my-1">
                    <h1 className="">{news.title}</h1>
                  </div>

                  <div className="my-1 text-justify">
                    <p>{news.body.children.text}</p>
                  </div>

                  <div className="h-1 bg-[#347423] w-24"></div>

                  <div className="flex justify-start my-3 w-28 rounded-full overflow-hidden hover:bg-[#4d4643] px-2 duration-500">
                    <span className="w-full hover:text-white"><a href={"/" + news._id} className="flex justify-between items-baseline w-full">Learn
                      More
                      <AiOutlineArrowRight /></a></span>
                  </div>
                </div>
              </div>
            ))}

            {Eve && Events.events.map((news) => (
              <div className="shadow-lg rounded-lg overflow-hidden">

                <div className="relative">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-60 w-full object-cover hover:scale-110 duration-500" />

                  <div className="flex justify-end text-sm text-white absolute right-2 bottom-2">
                    <p>{news._createdAt}</p>
                  </div>

                  <span
                    className="rounded-full absolute top-2 left-2 bg-gradient-to-tr from-[#4d4643] to-green-600 p-1 w-20 -rotate-6 text-center text-white">new</span>
                </div>

                <div className="p-2">
                  <div className="text-3xl font-serif font-bold my-1">
                    <h1 className="">{news.title}</h1>
                  </div>

                  <div className="my-1 text-justify">
                    <p>{news.body.children.text}</p>
                  </div>

                  <div className="h-1 bg-[#347423] w-24"></div>

                  <div className="flex justify-start my-3 w-28 rounded-full overflow-hidden hover:bg-[#4d4643] px-2 duration-500">
                    <span className="w-full hover:text-white"><a href={"/" + news._id} className="flex justify-between items-baseline w-full">Learn
                      More
                      <AiOutlineArrowRight /></a></span>
                  </div>
                </div>
              </div>
            ))}

            {Inovat && Inovation.inovations.map((news) => (
              <div className="shadow-lg rounded-lg overflow-hidden">

                <div className="relative">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-60 w-full object-cover hover:scale-110 duration-500" />

                  <div className="flex justify-end text-sm text-white absolute right-2 bottom-2">
                    <p>{news._createdAt}</p>
                  </div>

                  <span
                    className="rounded-full absolute top-2 left-2 bg-gradient-to-tr from-[#4d4643] to-green-600 p-1 w-20 -rotate-6 text-center text-white">new</span>
                </div>

                <div className="p-2">
                  <div className="text-3xl font-serif font-bold my-1">
                    <h1 className="">{news.title}</h1>
                  </div>

                  <div className="my-1 text-justify">
                    <p>{news.body.children.text}</p>
                  </div>

                  <div className="h-1 bg-[#347423] w-24"></div>

                  <div className="flex justify-start my-3 w-28 rounded-full overflow-hidden hover:bg-[#4d4643] px-2 duration-500">
                    <span className="w-full hover:text-white"><a href={"/" + news._id} className="flex justify-between items-baseline w-full">Learn
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