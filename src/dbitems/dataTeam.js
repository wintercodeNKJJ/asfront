import { useEffect } from "react";
import { useState } from "react";
import client from "../utility/client";

const TeamMemers = (Target, lang) => {

  const [TeamMembers, setTeamMembers] = useState([]);
  const [Title, setTitle] = useState([])

  useEffect(() => {

    let query;
    let query1;

    if (lang === 'en') {
      query = `*[_type == "team"]`
      query1 = `*[_type == "content" && slug.current == "talented-team-members"]`
    } else {
      query = `*[_type == "team"]`
      query1 = `*[_type == "content" && slug.current == "talented-team-members"]`
    }



    switch (Target) {
      case "team":
        client.fetch(query).then(data => {
          setTeamMembers(data);
        })
        break;
      case "title":
        client.fetch(query1).then(data => {
          setTitle(data);
        })
        break;

      default:
        break;
    }

  }, [Target, lang]);
  return { TeamMembers, Title };
}

export default TeamMemers;