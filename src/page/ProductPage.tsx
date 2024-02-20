import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductModal from "../components/ProductModal";
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
      <div>
        {/* <button onClick={toggle}>Open Modal </button> */}
        <ProductModal
          isOpen={isModalOpen}
          toggle={toggle}
          product={product}
        ></ProductModal>
      </div>
    </div>
  );
}

export default ProductPage;
