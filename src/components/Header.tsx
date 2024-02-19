import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <button>Hem</button>
      </Link>
      <h1>Hello from Header</h1>
    </header>
  );
}

export default Header;
