import Datastc from "../dbitems/dbit";
import PatnersLogo from "../components/PatnersLogo";
import News from "../components/News";
import DitailsContent from "../components/ditailContent";

/**
 * Item description component
 * @param title the item to be described ditaily
 * @prop {object} prop contains the title paramenter
 * @example <Ditails title={title}/> 
 * @returns A ditail page description of the item
 */

const Ditails = (prop) => {


  const Title = prop.title;
  let data = null;



  const { Industries } = Datastc("industries");
  const { Products } = Datastc("products");
  const { Services } = Datastc("services");

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
      console.log("hier...", data)
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
    console.log("we are in ditails 2", Title);

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

    console.log("we are in ditails 3", Title);

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

      {!data && <div className="h-screen px-4 md:px-40 font-light flex justify-center items-center"> Loding...</div>}

      {data && <DitailsContent data={data} title={prop.title} />}

      <PatnersLogo />

      <News />
    </div >
  );
}

export default Ditails;