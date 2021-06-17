import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { sortData } from "./util.js";
import TableData from "./Components/TableData";
// import { LinearProgress } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

function Issues() {
  const [issues, setIssues] = useState([]);
  const [sudoIssueData, setSudoIssueData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = () => {
    fetch("https://api.github.com/repos/vmg/redcarpet/issues?")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = sortData(data);
        setIssues(sortedData);
        setDataFetched(true);
        setSudoIssueData(sortedData);
      });
  };
  console.log(issues);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "") {
      setIssues(sudoIssueData);
    } else {
      // setIssues((issues) => {
      //   return issues.filter((issue) => {
      //     const userName =
      //       issue.user && issue.user.login
      //         ? issue.user.login.toLowerCase()
      //         : "Unknown";
      //     console.log(userName, userName.includes(e.target.value));
      //     return userName.includes(e.target.value);
      //   });
      // });

      const searchData = issues.filter((issue) => {
        const userName =
          issue.user && issue.user.login
            ? issue.user.login.toLowerCase()
            : "Unknown";
        return userName.includes(e.target.value.toLowerCase());
      });
      setIssues(searchData);
    }
  };

  return (
    <div className="container--3">
      <div className="header">
        <h2>Issues</h2>
        <TextField
          id="standard-search"
          label="Search"
          type="search"
          onChange={(e) => handleChange(e)}
          onSubmit={(e) => e.preventDefault()}
        />
      </div>
      {dataFetched ? (
        <TableData data={issues} />
      ) : (
        <div className="loading">
          <Skeleton /> <Skeleton /> <Skeleton />
        </div>
      )}
    </div>
  );
}

export default Issues;
