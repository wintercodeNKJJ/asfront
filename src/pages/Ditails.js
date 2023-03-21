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
    case "Industries":
      data = Industries.find(item => item.title === prop.search);

      break;
    case "Services":
      data = Services.find(item => item.title === prop.search);
      break;
    default:
      data = Products.find(item => item.title === prop.search);
      break;
  }

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