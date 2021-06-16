import React, { useState } from "react";
import { books } from "./../assets/bookData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragHandleIcon from "@material-ui/icons/DragHandle";
function Books() {
  const [bookList, setBookList] = useState(books);

  return (
    <DragDropContext
      onDragEnd={(param) => {
        const srcIndex = param.source.index;
        const destIndex = param.destination.index;
        console.log(param);
        bookList.splice(destIndex, 0, bookList.splice(srcIndex, 1)[0]);
      }}
    >
      {/* <h2>Books</h2> */}
      <Droppable droppableId="droppable-1">
        {(provided, _) => (
          <div
            className="bookList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {bookList.map((book, i) => {
              return (
                <Draggable
                  key={book.id}
                  draggableId={`draggable-${book.id}`}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <div
                      className="book"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging
                          ? "0 0 .5rem #666"
                          : "none",
                      }}
                    >
                      <div className="book_right">
                        <DragHandleIcon />
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
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Books;
