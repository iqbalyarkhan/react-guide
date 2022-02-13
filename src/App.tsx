function FilterableProductTable({ products }: { products: any }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function ProductRow({ product }: { product: any }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  );
}

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductTable({ products }: { products: [any] }) {
  const rows: any[] = [];
  let lastCategory = "";
  products.forEach((product, i) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Name</th>
          <th colSpan={2}>Price</th>
        </tr>
        <tbody>{rows}</tbody>
      </thead>
    </table>
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

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
