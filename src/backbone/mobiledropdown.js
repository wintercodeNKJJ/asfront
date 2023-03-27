/**
 * makes several calls to sanity to build mobile menu content for africa systems
 */

import { useState } from "react";
import Datastc from "../dbitems/dbit";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const MobileDropDown = () => {

  const { Industries } = Datastc("industries");
  const { Services } = Datastc("services");
  const { Products } = Datastc("products");
  const [show, setShow] = useState(false)
  const [inShow, setInShow] = useState(false)
  const [serShow, setSerShow] = useState(false)
  const [prodShow, setProdShow] = useState(false)

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

      <div id="dropdownMenu" className={show ? "z-40 visible divide-gray-100 w-full bg-[#347423] text-white opacity-90 inset-y-auto absolute m-0 left-0" : "z-40 hidden divide-gray-100 w-full bg-green-300 opacity-90"}
      >
        <div className="w-full ">
          <ul className="p-4 font-light">
            <li className="border-b-4 border-transparent"><a href="/"
              className="w-fit border-b-2 ">Home</a></li>

            {/* Industries Menu */}
            <li className="border-b-4 border-transparent"><div
              className="w-full border-b-2  flex justify-between"><a href="/Industries">Industries</a> {inShow ? <AiOutlineMinus onClick={() => setInShow(!inShow)} /> : <AiOutlinePlus onClick={() => setInShow(!inShow)} />}</div>
              <ul className={inShow ? "grid grid-cols-3 gap-2" : "grid grid-cols-3 gap-2 h-0 overflow-hidden"}>
                {Industries.map((data) => (
                  <li className="flex justify-center"><a href={"/" + data.title}>{data.title}</a></li>
                ))}
              </ul>
            </li>

            {/* Services Menu */}
            <li className="border-b-4 border-transparent"><div
              className="w-full border-b-2  flex justify-between"><a href="/Services">Services</a> {serShow ? <AiOutlineMinus onClick={() => setSerShow(!serShow)} /> : <AiOutlinePlus onClick={() => setSerShow(!serShow)} />}</div>
              <ul className={serShow ? "grid grid-cols-3 gap-2" : "grid grid-cols-3 gap-2 h-0 overflow-hidden"}>
                {Services.map((data) => (
                  <li className="flex justify-center"><a href={"/" + data.title}>{data.title}</a></li>
                ))}
              </ul>
            </li>

            {/* Products Menu */}
            <li className="border-b-4 border-transparent"><div
              className="w-full border-b-2  flex justify-between"><a href="/Products">Products</a> {prodShow ? <AiOutlineMinus onClick={() => setProdShow(!prodShow)} /> : <AiOutlinePlus onClick={() => setProdShow(!prodShow)} />}</div>
              <ul className={prodShow ? "grid grid-cols-3 gap-2" : "grid grid-cols-3 gap-2 h-0 overflow-hidden"}>
                {Products.map((data) => (
                  <li className="flex justify-center"><a href={"/" + data.title.replace("_", " ")}>{data.title.replace("_", " ")}</a></li>
                ))}
              </ul>
            </li>

            {/* other links */}
            <li className="border-b-4 border-transparent"><a href="/nolink"
              className="w-fit border-b-2 ">Research &
              Development</a></li>
            <li className="border-b-4 border-transparent"><a href="/Aboutus"
              className="w-fit border-b-2 ">Who we are</a></li>
            <li className="border-b-4 border-transparent"><a href="/News"
              className="w-fit border-b-2 ">Latest news</a></li>
            <li className="border-b-4 border-transparent"><a href="https://ecomm-wintercodenkjj.vercel.app/"
              className="w-fit border-b-2 ">E Commerce</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileDropDown;