import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { mockedProducts } from "../data/mockedData";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto; /* Centrera behållaren på sidan */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* Vid mycket små skärmar, en kolumn */
  }
`;

const ProductCard = styled.div`
  border: black solid 1px;
  width: 25vh;
  height: 30vh;
  text-align: center;
`;

const ProductImage = styled.img`
  height: 60%;
`;

function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((product) => product.id === params.id);

  if (!product) {
    return (
      <ProductContainer>
        {mockedProducts.map((product) => (
          <ProductCard>
            <Link key={product.id} to={"/products/" + product.id}>
              <ProductImage src={product.image} alt="productimage" />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </Link>
          </ProductCard>
        ))}
      </ProductContainer>
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
