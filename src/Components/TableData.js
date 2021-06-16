import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";

function TableData({ data }) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // console.log(data.length);

  return (
    <TableContainer>
      <Table
        align="center"
        style={{ margin: "20px", width: "95%", overflow: "hidden" }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h2>User</h2>
            </TableCell>
            <TableCell align="center">
              <h2>Issue</h2>
            </TableCell>
            <TableCell align="center">
              <h2>Date</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 1
            ? data.map((issue) => {
                // console.log(issue);
                return (
                  <TableRow
                    component={Link}
                    key={issue.id}
                    to={`/data/${issue.number}`}
                    style={{
                      textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    <TableCell align="center">
                      {issue.user && issue.user.login
                        ? issue.user.login
                        : "Unknown"}
                    </TableCell>
                    <TableCell align="center">{issue.title}</TableCell>
                    <TableCell align="center">
                      {issue.created_at.slice(0, 9)}
                    </TableCell>
                  </TableRow>
                );
              })
            : data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((issue) => {
                  // console.log(issue);
                  return (
                    <TableRow
                      component={Link}
                      to={`/data/${issue.number}`}
                      key={issue.id}
                      style={{
                        textDecoration: "none",
                        textTransform: "uppercase",
                      }}
                    >
                      <TableCell align="center">
                        {issue.user && issue.user.login
                          ? issue.user.login
                          : "Unknown"}
                      </TableCell>
                      <TableCell align="center">{issue.title}</TableCell>
                      <TableCell align="center">
                        {issue.created_at.slice(0, 9)}
                      </TableCell>
                    </TableRow>
                  );
                })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 5 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
        color="primary"
        size="small"
        variant="outlined"
        count={Number((data.length / rowsPerPage).toFixed())}
        onChange={handleChangePage}
      />
    </TableContainer>
  );
}

export default TableData;
