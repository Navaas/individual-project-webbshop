import { Dispatch, SetStateAction } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "../components/LikeButton";
import ProductView from "../components/ProductView";
import { Product, mockedProducts } from "../data/mockedData";

const Container = styled.div`
  background: #f1edea;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const ProductContainer = styled.div`
  border-radius: 10px;
  padding: 50px;
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 40px;
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
  border: lightgrey solid 1px;
  border-radius: 10px;
  width: 25vh;
  height: 35vh;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    width: 35vh;
    height: 40vh;
  }
`;

const ProductImage = styled.img`
  padding: 10px;
  height: 60%;
`;

const LikeAndBuyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

const BuyButton = styled.button`
  width: 100px;
  background: #f1edea;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  &:hover {
    background-color: lightgrey;
  }
`;

const TitleAndPrice = styled.p`
  margin: 0;
`;

function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((product) => product.id === params.id) as
    | Product
    | undefined;

  const setCart = useOutletContext<Dispatch<SetStateAction<Product[]>>>();

  const addToCart = (product: Product) => {
    setCart((cart) => [...cart, product]);
  };

  if (!product) {
    return (
      <Container>
        <ProductContainer>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={"/products/" + product.id}>
                <ProductImage src={product.image} alt="productimage" />
                <TitleAndPrice>{product.title}</TitleAndPrice>
                <TitleAndPrice>{product.price} :-</TitleAndPrice>
              </Link>
              <LikeAndBuyButtonContainer>
                <LikeButton />
                <BuyButton onClick={() => addToCart(product)}>Köp</BuyButton>
              </LikeAndBuyButtonContainer>
            </ProductCard>
          ))}
        </ProductContainer>
      </Container>
    );
  }
  return (
    <div>
      <ProductView product={product}></ProductView>
    </div>
  );
}

export default ProductPage;
