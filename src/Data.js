import React, { useEffect, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Data({ match }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/vmg/redcarpet/issues/${match.params.number}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
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
        <h2>Issue Data</h2>
        <button className="btn-logout" onClick={handleClickForRepo}>
          Check Out Repository
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              User
            </td>
            <td>
              {data.user && data.user.login ? data.user.login : "Unknown"}
            </td>
          </tr>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              Number
            </td>
            <td>{data.number}</td>
          </tr>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              Title
            </td>
            <td>{data.title}</td>
          </tr>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              State
            </td>
            <td>{data.state}</td>
          </tr>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              Description
            </td>
            <td>{data.body}</td>
          </tr>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              Created At
            </td>
            <td>{data.created_at}</td>
          </tr>
          <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
              Updated At
            </td>
            <td>{data.updated_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Data;
