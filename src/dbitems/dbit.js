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








// import image1 from "../assets/Energy.jpeg"
// import image2 from "../assets/Automobile.png"
// import image3 from "../assets/Event.jpeg"
// import image4 from "../assets/E_comm.jpeg"
// import image5 from "../assets/Health.jpeg"
// import imageN from "../assets/Abstract Africa patchwork traditional fabric pattern vector map.jpeg"

// const Datastc = () => {

//   const Industries = [
//     {
//       id: 1,
//       title: "Energy",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image1,
//       backPica: "/src/assets/Energy.jpeg"
//     },
//     {
//       id: 2,
//       title: "Automobile",
//       subtitle: "It is very common for companies with large fleets to experience incidents such as late deliveries, ...",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image2,
//       backPica: "/src/assets/Automobile.png"
//     },
//     {
//       id: 3,
//       title: "Event",
//       subtitle: "For an event to be successful, it is essential that your organization be impeccable and to do so",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image3,
//       backPica: "/src/assets/Event.jpeg"
//     },
//     {
//       id: 4,
//       title: "E-commerce",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image4,
//       backPica: "/src/assets/E_comm.jpeg"
//     },
//     {
//       id: 5,
//       title: "Health",
//       subtitle: "Information Technology is considered a privileged playing an increasingly important and predominant role in the health sector",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image5,
//       backPica: "/src/assets/Health.jpeg"
//     },
//     {
//       id: 6,
//       title: "Finance",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image1,
//       backPica: "/src/assets/Energy.jpeg"
//     },
//     {
//       id: 7,
//       title: "Education",
//       subtitle: "It is very common for companies with large fleets to experience incidents such as late deliveries, ...",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image2,
//       backPica: "/src/assets/Automobile.png"
//     },
//     {
//       id: 8,
//       title: "Security",
//       subtitle: "For an event to be successful, it is essential that your organization be impeccable and to do so",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image3,
//       backPica: "/src/assets/Event.jpeg"
//     },
//     {
//       id: 9,
//       title: "Agriculture",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image4,
//       backPica: "/src/assets/E_comm.jpeg"
//     },
//     {
//       id: 10,
//       title: "Transport",
//       subtitle: "Information Technology is considered a privileged playing an increasingly important and predominant role in the health sector",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image5,
//       backPica: "/src/assets/Health.jpeg"
//     },
//     {
//       id: 11,
//       title: "Public Servicies",
//       subtitle: "Information Technology is considered a privileged playing an increasingly important and predominant role in the health sector",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: imageN,
//       backPica: "/src/assets/Abstract Africa patchwork traditional fabric pattern vector map.jpeg"
//     }
//   ]

//   const Services = [
//     {
//       id: 1,
//       title: "Infrastructure",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image1
//     },
//     {
//       id: 2,
//       title: "Training",
//       subtitle: "It is very common for companies with large fleets to experience incidents such as late deliveries, ...",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image2
//     },
//     {
//       id: 3,
//       title: "Development",
//       subtitle: "For an event to be successful, it is essential that your organization be impeccable and to do so",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image3
//     },
//     {
//       id: 4,
//       title: "Buisness",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image4
//     }
//   ]

//   const Products = [
//     {
//       id: 1,
//       title: "LewooTrack",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image1
//     },
//     {
//       id: 2,
//       title: "Fuel_card",
//       subtitle: "It is very common for companies with large fleets to experience incidents such as late deliveries, ...",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image2
//     },
//     {
//       id: 3,
//       title: "ERP",
//       subtitle: "For an event to be successful, it is essential that your organization be impeccable and to do so",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image3
//     },
//     {
//       id: 4,
//       title: "E-Commerce",
//       subtitle: "Renewable energies are considered a privileged vector in the fight against global warming.",
//       content: "In the transportation ecosystem, being a leader means looking forward. At Indra, we are at the heart of our clients’ businesses, working hand-in-hand with them throughout the full project life-cycle, offering comprehensive solutions and added-value services. What sets us apart is our in-depth knowledge of the planning, construction, management and operation of transport services and infrastructures, of all types and in all regions.",
//       picPath: image4
//     }
//   ]

//   return { Industries, Services, Products }
// }

// export default Datastc;

