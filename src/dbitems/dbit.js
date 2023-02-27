import { useEffect } from "react";
import { useState } from "react";
import client from "../utility/client";

/**
 * This component is used to fetch data from sanity.
 * @param {string} target data to be requested from sanity
 * @example
 * Datastc("industries") to get industries
 * Datastc("services") to get services
 * Datastc("products") to get products
 * @returns A set if data containing industries, services, or Products
 */
const Datastc = (target) => {

  const [Industries, setIndustries] = useState([]);
  const [Services, setServices] = useState([]);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all post with thier author of each post (change to industries)
    switch (target) {
      case "industries":
        client.fetch(
          `*[_type == "industries"]{
          title,
          subtitle,
          body[0]{
            children[0]{
              text
            }
          },
          mainImage{
            asset,
          },
          "name": *[_type == "author" && author._ref == author._id]{name,bio[0]{children[0]{text}}}
      } | order(publishedAt desc)`
        ).then(data => {
          setIndustries(data);
        })
        break;
      case "services":
        // Fetch all Services with thier respective authors
        client.fetch(
          `*[_type == "services"]{
    title,
    subtitle,
    body[0]{
      children[0]{
        text
      }
    },
    mainImage{
      asset,
    },
    "name": *[_type == "author" && author._ref == author._id]{name,bio[0]{children[0]{text}}}
} | order(publishedAt desc)`
        ).then(data => {
          setServices(data);
        })

        break;
      case "products":
        // Fetch all products with thier respective authors
        client.fetch(
          `*[_type == "product"]{
    title,
    subtitle,
    body[0]{
      children[0]{
        text
      }
    },
    mainImage{
      asset,
    },
    "name": *[_type == "author" && author._ref == author._id]{name,bio[0]{children[0]{text}}}
} | order(publishedAt desc)`
        ).then(data => {
          setProducts(data);
        })
        break;

      default:
        break;
    }
  }, [target])

  console.log("data fetched from sanity", Industries, Services, Products);


  console.log("Data fetched succesfully --------------------");

  return { Industries, Services, Products }
}

export default Datastc;

