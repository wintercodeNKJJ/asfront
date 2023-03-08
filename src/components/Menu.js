// import { Router } from "react-router-dom/cjs/react-router-dom.min";
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

  let data = null;

  if (props.title) {
    if (props.title === "Industries") {
      const { Industries } = Datastc("industries")
      data = Industries;
      console.log("items1", data);

    }
    if (props.title === "Servicies") {
      const { Services } = Datastc("services")
      data = Services;
      console.log("items2", data);

    }
    if (props.title === "Products") {
      const { Products } = Datastc("products")
      data = Products;
      console.log("items3", data);

    }
  } else {
    const { Industries } = Datastc("industries")
    data = Industries;
    console.log("itemsA", data);
  }

  return (

    <div>

      <Dropdown
        trigger="hover"
        class="border-b-4 border-green-200 hover:border-b-4 hover:border-green-700"
        label={props.title}
        arrowIcon={false}
        size="lg"
      >
        <div className="shadow-lg md:p-7 lg:p-14 text-sm bg-green-200 grid md:grid-cols-3 lg:grid-cols-5 gap-10 w-full h-full">
          {data.map((Itm) => (
            <div className="text-black w-20 md:w-28 lg:w-40 relative">
              <a href={"/" + Itm.title.replace(" ", "_")}>
                <h1 className="font-bold text-xl">{Itm.title.replace("_", " ")}</h1>
                <div className="bg-green-800 h-0.5 w-24 my-2"></div>
                <p>{Itm.subtitle}</p>
              </a>
            </div>
          ))}
        </div>
      </Dropdown>


    </div>
  );
}

export default Menu;