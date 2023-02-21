import NewsData from "../dbitems/dbnews";
/**
 * this page contains the news of AS activites
 * not yet linked to AS
 * @returns news page of AS
 */
const NewsLatest = () => {
  const { Pnews } = NewsData();
  const { Nnews } = NewsData();
  const { Gnews } = NewsData();
  const { Tnews } = NewsData();


  return (
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
        {Pnews.map((news) => (
          <div className="">

            <div className="text-3xl font-serif font-bold my-4">
              <h1>{news.title}</h1>
            </div>

            <div className="">
              <img src={news.image} alt="news 1" className="h-24 w-full object-cover" />
            </div>
            <div className="flex justify-end text-sm">
              <p>{news.time}</p>
            </div>

            <div className="my-4">
              <p>{news.content}</p>
            </div>

            <div className="h-1 bg-green-500 w-24"></div>

            <div className="flex justify-start my-3">
              <span><a href="newstest.html">Learn More</a></span>
            </div>
          </div>
        ))}

        {Nnews.map((news) => (
          <div className="">

            <div className="text-3xl font-serif font-bold my-4">
              <h1>{news.title}</h1>
            </div>

            <div className="">
              <img src={news.image} alt="news 1" className="h-24 w-full object-cover" />
            </div>
            <div className="flex justify-end text-sm">
              <p>{news.time}</p>
            </div>

            <div className="my-4">
              <p>{news.content}</p>
            </div>

            <div className="h-1 bg-green-500 w-24"></div>

            <div className="flex justify-start my-3">
              <span><a href="newstest.html">Learn More</a></span>
            </div>
          </div>
        ))}

        {Gnews.map((news) => (
          <div className="">

            <div className="text-3xl font-serif font-bold my-4">
              <h1>{news.title}</h1>
            </div>

            <div className="">
              <img src={news.image} alt="news 1" className="h-24 w-full object-cover" />
            </div>
            <div className="flex justify-end text-sm">
              <p>{news.time}</p>
            </div>

            <div className="my-4">
              <p>{news.content}</p>
            </div>

            <div className="h-1 bg-green-500 w-24"></div>

            <div className="flex justify-start my-3">
              <span><a href="newstest.html">Learn More</a></span>
            </div>
          </div>
        ))}

        {Tnews.map((news) => (
          <div className="">

            <div className="text-3xl font-serif font-bold my-4">
              <h1>{news.title}</h1>
            </div>

            <div className="">
              <img src={news.image} alt="news 1" className="h-24 w-full object-cover" />
            </div>
            <div className="flex justify-end text-sm">
              <p>{news.time}</p>
            </div>

            <div className="my-4">
              <p>{news.content}</p>
            </div>

            <div className="h-1 bg-green-500 w-24"></div>

            <div className="flex justify-start my-3">
              <span><a href="newstest.html">Learn More</a></span>
            </div>
          </div>
        ))}

      </div>
      {/* <!-- items end --> */}

    </div>
  );
}

export default NewsLatest;