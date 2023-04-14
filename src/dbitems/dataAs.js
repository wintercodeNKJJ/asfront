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
const DataAS = (Target, lang) => {
  const [AsData, setAsData] = useState([]);
  const [Inovation, setInovation] = useState([]);
  const [Footer, setFooter] = useState([]);
  useEffect(() => {
    console.log("language set", lang)

    let query;
    let query1;
    let query2;

    if (lang === "en") {
      query = `*[_type == "content" && slug.current in ["our-vission","our-mission","who-we-are"] ] | order(publishedAt desc)`
      query1 = `*[_type == "content" && slug.current == "power-of-evolution"] | order(publishedAt desc)`
      query2 = `*[_type == "content" && slug.current in ["africa-systems","open-hours","location","number","email"]]`
    }
    else {
      query = `*[_type == "content" && slug.current in ["our-vission","our-mission","who-we-are"] ]{
        "body": body_fr,
        mainImage,
        slug,
        "title":title_fr,
      } | order(publishedAt desc)`
      query1 = `*[_type == "content" && slug.current == "power-of-evolution"]{
        "body": body_fr,
        mainImage,
        slug,
        "title":title_fr,
      } | order(publishedAt desc)`
      query2 = `*[_type == "content" && slug.current in ["africa-systems","open-hours","location","number","email"]]`
    }
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
  }, [Target, lang])

  return { AsData, Inovation, Footer };
}

export default DataAS;