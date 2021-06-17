import React, { useEffect, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgress } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
function Data({ match }) {
  const [data, setData] = useState({});
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/vmg/redcarpet/issues/${match.params.number}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setDataFetched(true);
      });
  }, []);

  const handleClickForRepo = () => {
    window.open(`${data.html_url}`, "_blank");
  };

  return (
    <div className="data">
      <div className="header">
        <Link to="/dashboard">
          <FontAwesomeIcon size="lg" icon={faArrowLeft} />
        </Link>
        <button className="btn-logout" onClick={handleClickForRepo}>
          Check Out Repository
        </button>
      </div>
      {dataFetched ? (
        <table>
          <tbody>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                User
              </td>
              <td>
                {data.user && data.user.login ? (
                  data.user.login
                ) : (
                  <CircularProgress />
                )}
              </td>
            </tr>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                Number
              </td>
              <td>{data.number ? data.number : <CircularProgress />}</td>
            </tr>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                Title
              </td>
              <td>{data.title ? data.title : <CircularProgress />}</td>
            </tr>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                State
              </td>
              <td>{data.state ? data.state : <CircularProgress />}</td>
            </tr>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                Description
              </td>
              <td>{data.body ? data.body : <CircularProgress />}</td>
            </tr>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                Created At
              </td>
              <td>
                {data.created_at ? data.created_at : <CircularProgress />}
              </td>
            </tr>
            <tr>
              <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
                Updated At
              </td>
              <td>
                {data.updated_at ? data.updated_at : <CircularProgress />}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="loading">
          <Skeleton /> <Skeleton /> <Skeleton />
        </div>
      )}
    </div>
  );
}

export default Data;
