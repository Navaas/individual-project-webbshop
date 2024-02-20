import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>HomePage</h1>
      {/* {mockedProducts.map((product) => (
        <Link key={product.id} to={"/productPage/" + product.id}>
          {product.title}
        </Link>
      ))} */}
      <Link to="productPage">
        <button>Till produkter</button>
      </Link>
    </div>
  );
}

export default Homepage;
