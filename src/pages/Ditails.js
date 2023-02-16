import Datastc from "../dbitems/dbit";
import PatnersLogo from "../components/PatnersLogo";
import News from "../components/News";
import Techno from "../assets/techno.jpeg";


const Ditails = (prop) => {


  const Title = prop.title;
  let data = null;



  const { Industries } = Datastc();

  // Searching for the correct item to display using switch block

  switch (Title) {
    case "Energy":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Automobile":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Event":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Education":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Finance":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Security":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "PublicServicies":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "E-commerce":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Health":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Agriculture":
      data = Industries.find(item => item.title === prop.title);
      break;
    case "Transport":
      data = Industries.find(item => item.title === prop.title);
      break;

    default:
      break;
  }

  if (!data) {
    const { Services } = Datastc();

    switch (Title) {
      case "Infrastructure":
        data = Services.find(item => item.title === prop.title);
        break;
      case "Buisness":
        data = Services.find(item => item.title === prop.title);
        break;
      case "Training":
        data = Services.find(item => item.title === prop.title);
        break;
      case "Development":
        data = Services.find(item => item.title === prop.title);
        break;

      default:
        break;
    }
  }

  if (!data) {
    const { Products } = Datastc();

    switch (Title) {
      case "E-Commerce":
        data = Products.find(item => item.title === prop.title);
        break;
      case "ERP":
        data = Products.find(item => item.title === prop.title);
        break;
      case "LewooTrack":
        data = Products.find(item => item.title === prop.title);
        break;
      case "Fuel_card":
        data = Products.find(item => item.title === prop.title);
        break;

      default:
        break;
    }
  }

  //style={{ 'var(--image-url)': data.backPica }}

  return (
    <div>
      {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start bg-green-200">
        <h1 className="text-5xl font-serif font-extrabold my-3">{data.title.replace("_", " ")}</h1>
      </div>
      {/* <!-- page tite end --> */}

      {/* <!-- tom landing picture begin --> */}
      <div className="flex justify-between bg-cover relative h-56">
        <img src={data.picPath} className="w-full object-cover h-full" alt={data.title} />
        <div className="px-4 lg:px-40 text-black text-3xl font-serif py-10 flex flex-col gap-4 w-2/5 lg:h-80 h-52 absolute">
          <h2 className=" h-44 overflow-hidden ">
            {data.subtitle}
          </h2>
        </div>

      </div>
      {/* <!-- tom landing picture end --> */}

      {/* <!-- related chapters begin --> */}
      <div className="md:px-40 px-4 my-8">
        <div className="border border-green-700 grid lg:grid-cols-3 grid-cols-1 p-4 gap-4">
          <div className=" col-span-1">
            <img src={data.picPath} alt="Energy" className="h-44 w-full object-cover" />
            <div className="flex justify-end text-sm m-1">
              <p>29/3/2012</p>
            </div>
            <h1 className="font-bold font-serif text-2xl ">{data.subtitle}</h1>
          </div>

          <div className=" col-span-1">
            <img src={Techno} alt="Energy" className="h-44 w-full object-cover" />
            <div className="flex justify-end text-sm m-1">
              <p>29/3/2012</p>
            </div>
            <h1 className="font-bold font-serif text-2xl">Energy subtopic one ...</h1>
          </div>

          <div className=" col-span-1">
            <img src={Techno} alt="Energy" className="h-44 w-full object-cover" />
            <div className="flex justify-end text-sm m-1">
              <p>29/3/2012</p>
            </div>
            <h1 className="font-bold font-serif text-2xl">Energy subtopic one ...</h1>
          </div>

        </div>
      </div>
      {/* <!-- related chapters end --> */}

      {/* <!-- top news block begin --> */}

      <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
        {/* <!-- left side --> */}
        <div className="col-span-2">
          <div className="my-5 text-2xl font-serif font-bold">
            <h1>{data.subtitle}</h1>
          </div>
          <div>
            <p>
              {data.content}
            </p>
          </div>
        </div>

        {/* <!-- right side --> */}
        <div>
          <div>
            <img src={data.picPath} alt="Energy" className="h-60" />
          </div>
        </div>
      </div>

      {/* <!-- top news block end--> */}


      <div className="bg-gray-300 lg:px-40 py-5 lg:pb-28">

        <div className="flex justify-start mx-10">
          <span className="font-bold text-3xl mt-5 mb-3 font-serif">Our Industries </span>
        </div>

        <div className="h-1 bg-gray-400 rounded-box mb-5 mx-10 lg:mx-0"></div>

        <div className="h-full px-4 grid sm:grid-cols-2 md:grid-cols-5">
          {/* <!-- items --> */}

          {Industries.map((industry) => (
            <div className="flex justify-center">
              <div className="col-span-1 mx-4 my-4">
                <a href="industry.test" className="hover:opacity-60">
                  <img src={industry.picPath} alt="option" className="h-64 object-cover border border-green-700" />
                </a>

                <div className="text-black">
                  <h1 className="font-bold font-serif text-3xl">AS</h1>
                  <h2 className="text-xl">{industry.title}</h2>
                  <div className="h-1 my-3 bg-green-700 w-14"></div>
                  <div className="font-light">
                    <p>{industry.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}



        </div>
      </div >
      <PatnersLogo />

      <News />
    </div >
  );
}

export default Ditails;