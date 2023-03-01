import { useEffect, useState } from "react";
import client from "../utility/client";

/**
 * 
 * @param {string} Target vission, or inovation
 * @example 
 * DataAS("vission")
 * DataAS("inovation")
 * @returns array of content
 */
const DataAS = (Target) => {

  const [AsData, setAsData] = useState([]);
  const [Inovation, setInovation] = useState([]);
  const [Footer, setFooter] = useState([]);
  useEffect(() => {

    let query = `*[_type == "content" && slug.current in ["our-vission","our-mission","who-we-are"] ] | order(publishedAt desc)`
    let query1 = `*[_type == "content" && slug.current == "power-of-evolution"] | order(publishedAt desc)`
    let query2 = `*[_type == "content" && slug.current in ["africa-systems","contact-info"]]`

    switch (Target) {
      case "vission":
        client.fetch(query).then(data => {
          setAsData(data)
        })
        break;
      case "inovation":
        client.fetch(query1).then(data => {
          setInovation(data)
        })
        break;
      case "footer":
        client.fetch(query2).then(data => {
          setFooter(data)
        })
        break;

      default:
        break;
    }
  }, [Target])

  return { AsData, Inovation, Footer };
}

export default DataAS;