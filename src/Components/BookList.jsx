import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <div>Spinner....</div>;

  if (error) return <div>Something went wrong.</div>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <div key={book.id}>
            <li onClick={() => setSelected(book.id)}>{book.name}</li>
          </div>
        ))}
      </ul>
      {selected && <BookDetails bookId={selected} />}
    </div>
  );
};

export default BookList;
