import React, { useEffect } from "react";
import { books } from "./../assets/bookData";

function Books() {
  return (
    <div className="bookList">
      {books.map((book) => {
        return (
          <div className="book" key={book.id}>
            <div className="book_right">
              <img src={book.img} alt="bookCover" />
            </div>
            <div className="book_center">
              <h2>{book.name}</h2>
              <h5>By {book.auther}</h5>
            </div>
            <div className="book_left">
              <button>Checkout on Amazon</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
