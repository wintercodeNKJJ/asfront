import Datastc from "../dbitems/dbit";
import PatnersLogo from "../components/PatnersLogo";
import DitailsContent from "../components/ditailContent";
import { useStateContext } from "../context/StateContext";

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
  const { lang } = useStateContext()



  const { Industries } = Datastc("industries", lang);
  const { Products } = Datastc("products", lang);
  const { Services } = Datastc("services", lang);

  // Searching for the correct item to display using switch block

  switch (Title) {
    case "Industries":
      data = Industries.find(item => item.slug.current === prop.search);

      break;
    case "Services":
      data = Services.find(item => item.slug.current === prop.search);
      break;
    default:
      data = Products.find(item => item.slug.current === prop.search);
      break;
  }

  return (
    <div>

      {!data && <div className="h-screen px-4 md:px-40 font-light flex justify-center items-center"> Loding...</div>}

      {data && <DitailsContent data={data} title={prop.title} />}

      <PatnersLogo />
    </div >
  );
}

export default Ditails;