import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mockedProducts } from "../data/mockedData";

function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((product) => product.id === params.id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!product) {
    return (
      <div>
        <h1>ProductPage</h1>
        {mockedProducts.map((product) => (
          <Link key={product.id} to={"/products/" + product.id}>
            <p onClick={toggle}>{product.title}</p>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>ProductPage</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={product.image} alt="testimage" />
    </div>
  );
}

export default ProductPage;
