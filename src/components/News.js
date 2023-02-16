import ShareBare from "./sharebar";
import im38 from "../assets/news/image 38.png";
import im39 from "../assets/news/image 39.png";

const News = () => {

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
        <div className="">

          <div className="text-3xl font-serif font-bold my-4">
            <h1>News1 Title</h1>
          </div>

          <div className="">
            <img src={im38} alt="news 1" className="h-24 w-full object-cover" />
          </div>
          <div className="flex justify-end text-sm">
            <p>Monday 22 Dec 2023 (12:00)</p>
          </div>

          <div className="my-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero quos ex similique officiis numquam eligendi
              molestiae voluptatibus totam, itaque vel distinctio sunt qui dignissimos expedita unde iusto, esse ipsa?</p>
          </div>

          <div className="h-1 bg-green-500 w-24"></div>

          <div className="flex justify-start my-3">
            <span><a href="newstest.html">Learn More</a></span>
          </div>
        </div>

        {/* <!-- news block 2 --> */}
        <div className="">

          <div className="text-3xl font-serif font-bold my-4">
            <h1>News2 Title</h1>
          </div>

          <div className="">
            <img src={im39} alt="news 1" className="h-24 w-full object-cover" />
          </div>
          <div className="flex justify-end text-sm">
            <p>Monday 22 Dec 2023 (12:00)</p>
          </div>

          <div className="my-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero quos ex similique officiis numquam eligendi
              molestiae voluptatibus totam, itaque vel distinctio sunt qui dignissimos expedita unde iusto, esse ipsa?</p>
          </div>

          <div className="h-1 bg-green-500 w-24"></div>

          <div className="flex justify-start my-3">
            <span><a href="newstest.html">Learn More</a></span>
          </div>
        </div>

      </div>
      {/* <!-- items end --> */}

      <ShareBare />
    </div>
  );
}

export default News;