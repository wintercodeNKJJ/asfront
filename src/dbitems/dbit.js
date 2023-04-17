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
const Datastc = (target, lang) => {

  const [Industries, setIndustries] = useState([]);
  const [Services, setServices] = useState([]);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all post with thier author of each post (change to industries)
    let query;
    let query1;
    let query2;

    if (lang === 'en') {
      query = `*[_type == "industries"]{
        title,
        subtitle,
        slug,
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

      query1 = `*[_type == "services"]{
        title,
        subtitle,
        slug,
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

      query2 = `*[_type == "product"]{
        title,
        subtitle,
        slug,
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
    } else {
      query = `*[_type == "industries"]{
        "title":title_fr,
        "subtitle":subtitle_fr,
        slug,
        "body":body_fr[0]{
          children[0]{
            text
          }
        },
        mainImage{
          asset,
        },
        "name": *[_type == "author" && author._ref == author._id]{name,bio[0]{children[0]{text}}}
        } | order(publishedAt desc)`

      query1 = `*[_type == "services"]{
        "title":title_fr,
        "subtitle":subtitle_fr,
        slug,
        "body":body_fr[0]{
          children[0]{
            text
          }
        },
        mainImage{
          asset,
        },
        "name": *[_type == "author" && author._ref == author._id]{name,bio[0]{children[0]{text}}}
        } | order(publishedAt desc)`

      query2 = `*[_type == "product"]{
        "title":title_fr,
        "subtitle":subtitle_fr,
        slug,
        "body":body_fr[0]{
          children[0]{
            text
          }
        },
        mainImage{
          asset,
        },
        "name": *[_type == "author" && author._ref == author._id]{name,bio[0]{children[0]{text}}}
        } | order(publishedAt desc)`
    }

    switch (target) {
      case "industries":
        client.fetch(query).then(data => {
          setIndustries(data);
        })
        break;
      case "services":
        // Fetch all Services with thier respective authors
        client.fetch(query1).then(data => {
          setServices(data);
        })

        break;
      case "products":
        // Fetch all products with thier respective authors
        client.fetch(query2).then(data => {
          setProducts(data);
        })
        break;

      default:
        break;
    }
  }, [target, lang])

  return { Industries, Services, Products }
}

export default Datastc;

