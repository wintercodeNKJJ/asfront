// import Africa from "../assets/Abstract Africa patchwork traditional fabric pattern vector map.jpeg";
// import Africa from "../assets/ASL.png";
import Africa2 from "../assets/logo/ASL.webp";
import Techno from "../assets/techno.jpeg";
import Automobile from "../assets/Automobile.png";
import jlk from "../assets/logo/jlk.png";
import sss from "../assets/logo/sss.png";
import lweoo from "../assets/logo/lewoo.png";
import News from "../components/News";

const About = () => {
  return (
    <div>

      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start bg-green-200">
        <h1 className="text-5xl font-serif font-extrabold my-3">About Africa Systems</h1>
      </div>
      {/* <!-- page title end --> */}

      {/* <!-- tom landing picture begin --> */}
      <div className="px-4 lg:px-40 flex justify-between bg-[url('/src/assets/Rectangle52.png')] bg-cover">
        <div className="text-white font-serif py-10 flex flex-col gap-4">
          <div>Awords</div>
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
              <h1 className="text-7xl font-serif">+15</h1>
              <h2 className="text-3xl font-bold font-serif">Years of Expirience</h2>
            </div>

            {/* <!-- text --> */}
            <div>
              <h2 className="text-2xl font-bold font-serif">The main mission of Africa Systems is to provide and create a
                scalable IT environment</h2>
              <p>
                Creliable, innovative, integrated and service-oriented that strengthens, improves and engages the businesses
                of our customers by providing them with effective products and services.
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
                <h1 className="font-serif font-bold text-3xl my-4">Heighlights</h1>
              </div>
              <div className="h-1 w-24 bg-green-600"></div>
              <div className="my-4 flex flex-col gap-2">
                <h3>Press room</h3>
                <h3>Colaborators</h3>
              </div>
            </div>

            <div className="bg-green-200 p-5">
              <div>
                <h1 className="font-serif font-bold text-3xl my-4">Contact</h1>
              </div>
              <div className="h-1 w-24 bg-green-600"></div>
              <div className="my-4 flex flex-col gap-2">
                <h3>+237 242013483</h3>
                <h3>Fokou Douche Douala , Cameroon</h3>
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
        <div className="my-10 min-w-[300px] bg-[url('/src/assets/about/image57.png')] bg-cover p-6">
          <div className="w-1/2">
            <h1 className="font-serif font-bold text-2xl">Who we are?</h1>
            <p>
              Africa Systems is a multinational information technology company founded in 2006. We specialize in providing
              IT
              solutions and infrastructure management.
            </p>
          </div>
        </div>

        {/* <!-- Our vission --> */}
        <div className="my-10 min-w-[300px] bg-[url('/src/assets/about/image59.png')] bg-cover p-6">
          <div className="w-1/2">
            <h1 className="font-serif font-bold text-2xl">Our vission</h1>
            <p>
              Our main ambition at Africa Systems is to become, thanks to our expertise and know-how, a reference in Africa,
              in the field of information technologies.
            </p>
          </div>
        </div>

        {/* <!-- mission --> */}
        <div className="my-10 min-w-[300px] bg-[url('/src/assets/about/image58.png')] bg-cover p-6">
          <div className="w-1/2">
            <h1 className="font-serif font-bold text-2xl">Our Mission</h1>
            <p>
              Africa Systems primary mission is to provide and create a scalable, reliable, innovative, integrated,
              service-oriented and efficient product-oriented IT environment.
            </p>
          </div>
        </div>

      </div>
      {/* <!-- What we do and who we are end --> */}

      {/* <!-- Logos begin --> */}

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