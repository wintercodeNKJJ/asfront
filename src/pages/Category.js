// import ImageSlider from "../components/ImageSlider";
// import Tracking from "../assets/vehicle_tracking.jpeg";
// import PatnersLogo from "../components/PatnersLogo";
import AS from "../assets/ASL.png";
// import News from "../components/News";
import OptionsItems from "../components/OptoinsItems";
import Cathegory from "../dbitems/cathegory";
import { useStateContext } from "../context/StateContext";


const Category = (prop) => {
  const { lang } = useStateContext()

  const { IndistryCathegory } = Cathegory("Industry",lang);
  const { ProductsCathegory } = Cathegory("Products",lang);
  const { ServicesCathegory } = Cathegory("Services",lang);
  const { ResearchCathegory } = Cathegory("Research",lang);
  const Title = prop.title;
  let data = null

  switch (Title) {
    case "Industries":
      data = IndistryCathegory;  
      break;
      case "Products":
        data = ProductsCathegory;  
        break;
        case "Servicies":
          data = ServicesCathegory;  
          break;
          case "Research_&_Development":
            data = ResearchCathegory;  
            break;
        
    default:
      data = [{
        title:"This item is not veilable",
        description: "This item is not aveilable"
      }]
      break;
  }

  console.log("cathefory data",data);

  return (
    <div>
      {!data[0] && <div className="h-screen px-4 md:px-40 font-light flex justify-center items-center">Loding...</div>}
      
      {data[0] && 
      <div>
        {/* <!-- page tite begin --> */}
      <div className=" lg:px-40 px-10 flex justify-start">
        <h1 className="text-5xl font-extrabold my-3">{data[0].title}</h1>
      </div>
      {/* <!-- page tite end --> */}
      {/* <ImageSlider /> */}
      {/* <!-- top news block begin --> */}

      <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* <!-- left side --> */}
        <div>
          {/* <!-- news image --> */}
          <div className="w-full relative">
          <img src={AS} alt="" className="h-60 object-cover w-full bg-[#4d4643] rounded-md" />
          <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={AS} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>
          </div>
          {/* <!-- news image --> */}

          {/* <!-- news text begin--> */}
          <div className="mt-4">
            <h1 className="font-bold text-2xl">{data[0].title}</h1>
            <div className="mt-2 font-light">
              <p>A simple solution developed by Africa systems to help you locate and monitor
                your vehicles across the land with just a click.</p>
            </div>
          </div>
          {/* <!-- news text end--> */}
        </div>

        {/* <!-- right side --> */}
        <div>
          {/* <!-- news text top begin --> */}
          <div className="mt-4 border-l-[30px] border-green-600 pl-2">
            <h1 className="font-bold text-3xl">First side Mesage</h1>
            <div className="mt-2 font-light">
              <p>{data[0].description}</p>
            </div>
          </div>
          {/* <!-- news text top end --> */}

          {/* <!-- news text begin--> */}
          <div className="mt-4 border-l-[30px] border-green-600 pl-2">
            <h1 className="font-bold text-3xl">Vehicle Tracking</h1>
            <div className="mt-2 font-light">
              <p>A simple solution developed by Africa systems to help you locate and monitor
                your vehicles across the land with just a click.</p>
            </div>
          </div>
          {/* <!-- news text end--> */}
        </div>
      </div>

      {/* <!-- top news block end--> */}

      <OptionsItems searchtitle={Title} />

      
      {/* <!-- Succeses end --> */}
      </div>
      }
      
    </div >
  );
}

export default Category;