import React, { useEffect, useState } from "react";
import List from "./list";
import Searchpanel from "./search-panel";

export default function ProjectListScreen() {
  const [list, setList] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  return (
    <div>
      <Searchpanel></Searchpanel>
      <List></List>
    </div>
  );
}
