import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook, newBook] = useMutation(addBookMutation);
  if (loading || newBook.loading) return <option>Loading ...</option>;

  if (error || newBook.error) return <div>Something went wrong.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };
  return (
    <div>
      <form id="add-book" onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select author</option>
            {data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddBook;
