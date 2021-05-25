import React, { useState, useEffect } from "react";
import List from "./list";
import SearchForm from "./search-form";
import qs from "qs";
import { cleanObjectEmpty } from "utils/index";
const api = process.env.REACT_APP_API_URL;

function ProjectListScreen() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${api}/projects?${qs.stringify(cleanObjectEmpty(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);
  return (
    <div>
      <SearchForm param={param} setParam={setParam} />
      <List list={list} />
    </div>
  );
}

export default ProjectListScreen;
