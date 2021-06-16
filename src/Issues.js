import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { sortData } from "./util.js";
import TableData from "./Components/TableData";
import { LinearProgress } from "@material-ui/core";

function Issues() {
  const [issues, setIssues] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = () => {
    fetch("https://api.github.com/repos/vmg/redcarpet/issues?")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = sortData(data);
        setIssues(sortedData);
        setDataFetched(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchData);
    if (searchData === "") {
      return fetchData();
    } else {
      setIssues((issues) => {
        document.querySelector("#standard-search").value = "";
        return issues.filter((issue) => {
          const userName =
            issue.user && issue.user.login
              ? issue.user.login.toLowerCase()
              : "Unknown";
          return userName.includes(searchData);
        });
      });
    }
  };

  return (
    <div className="container--3">
      <div className="header">
        <h2>Issues</h2>
        <form onSubmit={(e) => handleSubmit(e)} autocomplete="off">
          <TextField
            id="standard-search"
            label="Search"
            type="search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </form>
      </div>
      {dataFetched ? (
        <TableData data={issues} />
      ) : (
        <div className="loading">
          <LinearProgress />
        </div>
      )}
    </div>
  );
}

export default Issues;
