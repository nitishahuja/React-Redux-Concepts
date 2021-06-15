import React, { useEffect } from "react";

function Books() {
  const fetchData = () => {
    //   AIzaSyA6QIZVUxJlJzwKBuBxrGZay9RdXdAPeQQ;
    fetch("http://openlibrary.org/people/george08/lists.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Books</h2>
    </div>
  );
}

export default Books;
