import { useEffect } from "react";
import { useState } from "react";
import client from "../utility/client";

const Cathegory = (Target, lang) => {

  const [IndistryCathegory, setIndistryCathegory] = useState([]);
  const [ServicesCathegory, setServicesCathegory] = useState([]);
  const [ProductsCathegory, setProductsCathegory] = useState([]);
  const [ResearchCathegory, setResearchCathegory] = useState([]);

  useEffect(() => {

    let query;
    let query1;
    let query2;
    let query3;

    if (lang === 'en') {
      query = `*[_type == "category" && slug.current == "industries"]`
      query1 = `*[_type == "category" && slug.current == "services"]`
      query2 = `*[_type == "category" && slug.current == "products"]`
      query3 = `*[_type == "category" && slug.current == "research_and_development"]`
    } else {
      query = `*[_type == "category" && slug.current == "industries"]{
        "title": title_fr,
        slug,
        "description":description_fr,
      }`
      query1 = `*[_type == "category" && slug.current == "services"]{
        "title": title_fr,
        slug,
        "description":description_fr,
      }`
      query2 = `*[_type == "category" && slug.current == "products"]{
        "title": title_fr,
        slug,
        "description":description_fr,
      }`
      query3 = `*[_type == "category" && slug.current == "research_and_development"]{
        "title": title_fr,
        slug,
        "description":description_fr,
      }`

    }



    switch (Target) {
      case "Industry":
        client.fetch(query).then(data => {
          setIndistryCathegory(data);
        })
        break;
      case "Services":
        client.fetch(query1).then(data => {
          setServicesCathegory(data);
        })
        break;
      case "Products":
        client.fetch(query2).then(data => {
          setProductsCathegory(data);
        })
        break;
        case "Research":
          client.fetch(query3).then(data => {
            setResearchCathegory(data);
          })
          break;
      default:
        break;
    }

  }, [Target, lang]);
  return { ResearchCathegory,IndistryCathegory, ServicesCathegory, ProductsCathegory };
}

export default Cathegory