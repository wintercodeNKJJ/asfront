// import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { useStateContext } from "../context/StateContext";
import Datastc from "../dbitems/dbit";
import { Dropdown } from "flowbite-react";

/**
 * Takes the title of a particular cathegory and  generate the coresponding menu using sanity
 * @param {string} title  titel of the reqired menu
 * @example
 * title = "industries" 
 * <Memu title={title}/>
 * @returns Menu object
 */
const Menu = (props) => {

  const { lang } = useStateContext();
  let data = null;

  if (props.title) {
    if (props.title === "Industries") {
      const { Industries } = Datastc("industries", lang)
      data = Industries;

    }
    if (props.title === "Servicies") {
      const { Services } = Datastc("services", lang)
      data = Services;

    }
    if (props.title === "Products") {
      const { Products } = Datastc("products", lang)
      data = Products;

    }
  } else {
    const { Industries } = Datastc("industries", lang)
    data = Industries;
  }


  return (

    <div className="asol">

      <Dropdown
        trigger="hover"
        class=" slotion border-b-4 border-b-[#347423] bg-[#347423] animunder after:w-0"
        label={lang==='en'?props.title:props.titre}
        arrowIcon={false}
        size="lg"
        href={`/${props.title}`}

      >
        <div className="shadow-lg md:p-7 lg:p-14 text-sm bg-[#347423] grid md:grid-cols-3 lg:grid-cols-5 gap-8 w-full h-full -my-2">
          {data.map((Itm, i) => (
            <div className="w-20 md:w-28 lg:w-40 relative hover:bg-gray-300 duration-500 p-2 rounded-lg hover:text-black text-white" key={i}>
              <a href={"/" + Itm.slug.current.replace(" ", "_")}>
                <h1 className="font-bold text-xl">{Itm.title.replace("_", " ")}</h1>
                <div className="bg-green-800 h-0.5 w-24 my-2"></div>
                <p>{Itm.subtitle.substring(0,100)}...</p>
              </a>
            </div>
          ))}
        </div>
      </Dropdown>

    </div>
  );
}

export default Menu;