function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <h1>Return the table!</h1>
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <div>
        <form>
          <label>
            <input type="text" placeholder="Search..." />
          </label>
        </form>
      </div>
      <br />
      <div>
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <FilterableProductTable />
    </div>
  );
}
