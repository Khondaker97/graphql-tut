import { useQuery } from "@apollo/client";
import React from "react";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });
  if (loading) return <div>wait...</div>;
  const { book } = data;
  return (
    <div id="book-details">
      <p>Book Details</p>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this Author:</p>
      <ul className="other-books">
        {book.author.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
