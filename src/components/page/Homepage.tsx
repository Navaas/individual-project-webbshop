import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h2>Hello from HomePage</h2>
      <Link to="/ProductPage">
        <button>Till produkter</button>
      </Link>
    </div>
  );
}

export default Homepage;
