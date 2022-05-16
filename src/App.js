import AddBook from "./Components/AddBook";
import BookList from "./Components/BookList";

function App() {
  return (
    <div id="main">
      <h1>Reader's Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
