/**
 * makes several calls to sanity to build mobile menu content for africa systems
 */

import { useState } from "react";
import Datastc from "../dbitems/dbit";

const MobileDropDown = () => {

  const { Industries } = Datastc("industries");
  const { Services } = Datastc("services");
  const { Products } = Datastc("products");
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="p-2" id="dropdownHoverMenu" data-dropdown-toggle="dropdownMenu" data-dropdown-trigger="click"
        onClick={() => { setShow(!show) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          className="inline-block w-12 h-8 stroke-current text-black">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h20M4 12h20M4 18h20"></path>
        </svg>
      </div>

      <div id="dropdownMenu" className={show ? "z-40 visible divide-gray-100 w-full bg-green-300 opacity-90 inset-y-auto absolute m-0 left-0" : "z-40 hidden divide-gray-100 w-full bg-green-300 opacity-90"}
      >
        <div className="w-full ">
          <ul className="p-4 font-light">
            <li className="border-b-4 border-transparent"><a href="/"
              className="w-fit border-b-2 border-green-700">Home</a></li>
            <div className="w-full px-4 text-gray-600 rounded-full m-0.5 p-0.5"><hr /></div>

            {/* Industries Menu */}
            <li className="border-b-4 border-transparent"><a href="/Industries"
              className="w-fit border-b-2 border-green-700">Industries</a>
              <ul className="grid grid-cols-3 gap-2">
                {Industries.map((data) => (
                  <li className="flex justify-center"><a href={"/" + data.title}>{data.title}</a></li>
                ))}
              </ul>
            </li>
            <div className="w-full px-4 text-gray-600 rounded-full m-0.5 p-0.5"><hr /></div>

            {/* Services Menu */}
            <li className="border-b-4 border-transparent"><a href="/Services"
              className="w-fit border-b-2 border-green-700">Servicies</a>
              <ul className="grid grid-cols-3 gap-2">
                {Services.map((data) => (
                  <li className="flex justify-center"><a href={"/" + data.title}>{data.title}</a></li>
                ))}
              </ul>
            </li>
            <div className="w-full px-4 text-gray-600 rounded-full m-0.5 p-0.5"><hr /></div>

            {/* Products Menu */}
            <li className="border-b-4 border-transparent"><a href="/"
              className="w-fit border-b-2 border-green-700">Products</a>
              <ul className="grid grid-cols-3 gap-2">
                {Products.map((data) => (
                  <li className="flex justify-center"><a href={"/" + data.title.replace("_", " ")}>{data.title.replace("_", " ")}</a></li>
                ))}
              </ul>
            </li>
            <div className="w-full px-4 text-gray-600 rounded-full m-0.5 p-0.5"><hr /></div>

            {/* other links */}
            <li className="border-b-4 border-transparent"><a href="/nolink"
              className="w-fit border-b-2 border-green-700">Research &
              Development</a></li>
            <div className="w-full px-4 text-gray-600 rounded-full m-0.5 p-0.5"><hr /></div>
            <li className="border-b-4 border-transparent"><a href="/Aboutus"
              className="w-fit border-b-2 border-green-700">Who we are</a></li>
            <div className="w-full px-4 text-gray-600 rounded-full m-0.5 p-0.5"><hr /></div>
            <li className="border-b-4 border-transparent"><a href="/News"
              className="w-fit border-b-2 border-green-700">Latest news</a></li>
            <li className="border-b-4 border-transparent"><a href="https://ecomm-wintercodenkjj.vercel.app/"
              className="w-fit border-b-2 border-green-700">E Commerce</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileDropDown;