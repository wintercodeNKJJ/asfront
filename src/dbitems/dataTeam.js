import { useEffect } from "react";
import { useState } from "react";
import client from "../utility/client";

const TeamMemers = (Target) => {

  const [TeamMembers, setTeamMembers] = useState([]);
  const [Title, setTitle] = useState([])

  useEffect(() => {

    let query = `*[_type == "team"]`
    let query1 = `*[_type == "content" && slug.current == "talented-team-members"]`

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

  }, [Target]);
  return { TeamMembers, Title };
}

export default TeamMemers;