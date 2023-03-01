import { useEffect, useState } from "react";
import client from "../utility/client";

const AboutUsContent = (Target) => {
  const [TopContent, setTopContent] = useState([]);
  const [MiddleContent, setMiddleContent] = useState([]);
  const [ButtomContent, setButtomContent] = useState([]);

  useEffect(() => {

    let query1 = `*[_type == "home"]{
      "top":*[_type=="content" && _id in ^.topContent[]._ref],
  } | order(publishedAt desc)`

    let query2 = `*[_type == "home"]{
    "middle":*[_type=="content" && _id in ^.middleContent[]._ref],
  } | order(publishedAt desc)`

    let query3 = `*[_type == "home"]{
    "buttom":*[_type=="content" && _id in ^.buttomContent[]._ref],
  } | order(publishedAt desc)`

    switch (Target) {
      case "top":
        client.fetch(query1).then(data => {
          setTopContent(data);
          console.log("data", data);
        })
        break;
      case "middle":
        client.fetch(query2).then(data => {
          setMiddleContent(data);
          console.log("data", data);
        })
        break;
      case "buttom":
        client.fetch(query3).then(data => {
          setButtomContent(data);
          console.log("data", data);
        })
        break;

      default:
        break;
    }
  }, [Target])

  return { TopContent, MiddleContent, ButtomContent };
}

export default AboutUsContent;