import { useEffect } from "react";
import { useState } from "react";
import client from "../utility/client";

/**
 * This component is used to fetch data from sanity.
 * @param {string} newsdata data to be requested from sanity
 * @example
 * Ndatastc("industries") to get industries
 * Ndatastc("services") to get services
 * Ndatastc("products") to get products
 * @returns A set if data containing industries, services, or Products
 */
const Ndatastc = (newsdata) => {

  const [Inovation, setInovation] = useState([]);
  const [Events, setEvents] = useState([]);
  const [News, setNews] = useState([]);
  const [Cnews, setCnews] = useState([]);

  useEffect(() => {
    switch (newsdata) {
      case "inovation":
        client.fetch(
          `*[_type == "category" && title == "Inovation"]{
            _id,
            "inovations": *[_type=="blog" && categories[0]._ref == ^._id]{
              _id,
              _createdAt,
              mainImage,
              subtitle,
                title,
                body[0]{
                  children[0]{
                    text
                  }
                }
            } | order(publishedAt desc)
          }`
        ).then(data => {
          setInovation(data[0]);
        });
        break;
      case "event":

        // Fetch all Services with thier respective authors
        client.fetch(
          `*[_type == "category" && title == "Event"]{
            _id,
            "events": *[_type=="blog" && categories[0]._ref == ^._id]{
              _id,
              _createdAt,
              mainImage,
              subtitle,
                title,
                body[0]{
                  children[0]{
                    text
                  }
                }
            } | order(publishedAt desc)
          }`
        ).then(data => {
          setEvents(data[0]);
        });

        break;
      case "news":
        client.fetch(
          `*[_type == "category" && title == "News"]{
            _id,
            "news": *[_type=="blog" && categories[0]._ref == ^._id]{
              _id,
              _createdAt,
              mainImage,
              subtitle,
                title,
                body[0]{
                  children[0]{
                    text
                  }
                }
            } | order(publishedAt desc)
          }`
        ).then(data => {
          setNews(data[0]);
        });
        break;
      case "cnews":

        // Fetch all products with thier respective authors
        client.fetch(
          `*[_type == "blog"]{
      _id,
      _createdAt,
      title,
      subtitle,
      images,
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
          setCnews(data);
        });
        break;

      default:
        break;
    }
  }, [newsdata])

  return { News, Events, Inovation, Cnews }
}

export default Ndatastc;

