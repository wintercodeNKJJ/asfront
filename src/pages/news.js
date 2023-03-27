import Ndatastc from "../dbitems/dbnews";
import urlFor from "../utility/imageUrl";
import { AiOutlineArrowRight } from 'react-icons/ai'

/**
 * this page contains the news of AS activites
 * not yet linked to AS
 * @returns news page of AS
 */
const NewsLatest = () => {
  const { Inovation } = Ndatastc("inovation");
  const { Events } = Ndatastc("event");
  const { News } = Ndatastc('news');

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
          <div className="lg:mx-44 mx-10 my-8">
            <div className="w-3/6">
              <h1 className="font-bold text-3xl font-serif">Latest news</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloribus porro, deleniti
              </p>
            </div>
          </div>
          {/* <!-- Title end --> */}

          {/* <!-- items begin--> */}
          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-40 gap-x-10 py-5 md:py-10 px-4">

            {/* <!-- news block 1 --> */}
            {Ne && News.news.map((news) => (
              <div className="">

                <div className="text-3xl font-serif font-bold my-4">
                  <h1>{news.title}</h1>
                </div>

                <div className="">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-24 w-full object-cover" />
                </div>
                <div className="flex justify-end text-sm">
                  <p>{news._createdAt}</p>
                </div>

                <div className="my-4">
                  <p>{news.body.children.text}</p>
                </div>

                <div className="h-1 bg-[#347423] w-24"></div>

                <div className="flex justify-start my-3 w-28">
                  <span className="w-full"><a href={"/" + news._id} className="flex justify-between items-baseline w-full">Learn More <AiOutlineArrowRight /></a></span>
                </div>
              </div>
            ))}

            {Eve && Events.events.map((news) => (
              <div className="">

                <div className="text-3xl font-serif font-bold my-4">
                  <h1>{news.title}</h1>
                </div>

                <div className="">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-24 w-full object-cover" />
                </div>
                <div className="flex justify-end text-sm">
                  <p>{news._createdAt}</p>
                </div>

                <div className="my-4">
                  <p>{news.body.children.text}</p>
                </div>

                <div className="h-1 bg-[#347423] w-24"></div>

                <div className="flex justify-start my-3 w-28">
                  <span className="w-full"><a href={"/" + news._id} className="flex justify-between items-baseline w-full">Learn More <AiOutlineArrowRight /></a></span>
                </div>
              </div>
            ))}

            {Inovat && Inovation.inovations.map((news) => (
              <div className="">

                <div className="text-3xl font-serif font-bold my-4">
                  <h1>{news.title}</h1>
                </div>

                <div className="">
                  <img src={urlFor(news.mainImage)} alt="news 1" className="h-24 w-full object-cover" />
                </div>
                <div className="flex justify-end text-sm">
                  <p>{news._createdAt}</p>
                </div>

                <div className="my-4">
                  <p>{news.body.children.text}</p>
                </div>

                <div className="h-1 bg-[#347423] w-24"></div>

                <div className="flex justify-start my-3 w-28">
                  <span className="w-full"><a href={"/" + news._id} className="flex justify-between items-baseline w-full">Learn More <AiOutlineArrowRight /></a></span>
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