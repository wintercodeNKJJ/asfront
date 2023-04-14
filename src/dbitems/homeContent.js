import { useEffect, useState } from "react";
import client from "../utility/client";

const HomeCont = (Target,lang) => {
  const [TopContent, setTopContent] = useState([]);
  const [MiddleContent, setMiddleContent] = useState([]);
  const [ButtomContent, setButtomContent] = useState([]);



  useEffect(() => {
    let query1;
    let query2;
    let query3;

    if (lang === 'en') {
      query1 = `*[_type == "home"]{
        "top":*[_type=="content" && _id in ^.topContent[]._ref],
    } | order(publishedAt desc)`
  
      query2 = `*[_type == "home"]{
      "middle":*[_type=="content" && _id in ^.middleContent[]._ref],
    } | order(publishedAt desc)`
  
      query3 = `*[_type == "home"]{
      "buttom":*[_type=="content" && _id in ^.buttomContent[]._ref],
    } | order(publishedAt desc)`  
    } else {
      query1 = `*[_type == "home"]{
        "top":*[_type=="content" && _id in ^.topContent[]._ref]{
          "body":body_fr,
          "title":title_fr,
          mainImage,
          slug,
        },
    } | order(publishedAt desc)`
  
      query2 = `*[_type == "home"]{
      "middle":*[_type=="content" && _id in ^.middleContent[]._ref]{
        "body":body_fr,
        "title":title_fr,
        mainImage,
        slug,
      },
    } | order(publishedAt desc)`
  
      query3 = `*[_type == "home"]{
      "buttom":*[_type=="content" && _id in ^.buttomContent[]._ref]{
        "body":body_fr,
        "title":title_fr,
        mainImage,
        slug,
      },
    } | order(publishedAt desc)`
    }
    

    switch (Target) {
      case "top":
        client.fetch(query1).then(data => {
          setTopContent(data);
        })
        break;
      case "middle":
        client.fetch(query2).then(data => {
          setMiddleContent(data);
        })
        break;
      case "buttom":
        client.fetch(query3).then(data => {
          setButtomContent(data);
        })
        break;

      default:
        break;
    }
  }, [Target,lang])

  return { TopContent, MiddleContent, ButtomContent };
}

export default HomeCont;