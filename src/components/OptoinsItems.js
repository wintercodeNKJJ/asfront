import Datastc from "../dbitems/dbit";
// import client from "../client";
// import React, { useEffect, useState } from "react";
// import imageUrlBuilder from '@sanity/image-url'
import urlFor from "../utility/imageUrl";
import ASL from "../assets/ASL.png"
import { useStateContext } from "../context/StateContext";

/**
 * Should return items coresponding to the  required category
 * @returns Options items from industries
 */
const OptionsItems = ({ searchtitle }) => {

  const { lang } = useStateContext();
  const { Industries } = Datastc("industries", lang)
  const { Services } = Datastc("services", lang)
  const { Products } = Datastc("products", lang)
  let data = null;
  console.log('search title', searchtitle)
  switch (searchtitle) {
    case "Industries":
      data = Industries;
      console.log("Industries fetch")
      break;
    case "Services":
      data = Services;
      console.log("services fetch")
      break;
    default:
      data = Products;
      console.log("Products fetch")
      break;
  }
  console.log("data state", data)

  return (
    <div>
      {/* <!-- Options begin --> */}
      <div className="bg-gray-300 lg:px-40 pb-14">

        <div className="flex justify-start mx-10">
          <span className="font-bold text-3xl mt-5 mb-3"> {searchtitle} </span>
        </div>

        <div className="h-1 bg-gray-400 rounded-box mb-5 mx-10 lg:mx-0"></div>

        <div className="h-full px-4 grid sm:grid-cols-2 md:grid-cols-5">
          {/* <!-- item 1 --> */}

          {data.map((item) => (
            <div className="flex justify-center">
              <div className="col-span-1 mx-4 my-4">
                <a href={item.title} className="hover:opacity-60 relative">
                  <img src={item.mainImage ? urlFor(item.mainImage) : ASL} alt="option" className="h-64 w-full object-cover rounded-md overflow-hidden bg-white" />
                  <h1 className="font-light text-sm absolute left-2 bottom-2 backdrop-blur-lg rounded-box p-2 text-white"> <img src={ASL} className=" h-6 w-6 mr-2 bg-white rounded-full inline-flex" alt="as logo"/> Africa Systems</h1>
                </a>

                <div className="text-black">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <div className="h-1 my-3 bg-green-700 w-14"></div>
                  <div className="font-light">
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>


      </div>
      {/* <!-- Options end --> */}
    </div>
  );
}

export default OptionsItems;