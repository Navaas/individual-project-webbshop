import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "../components/LikeButton";
import ProductView from "../components/ProductView";
import { Product, mockedProducts } from "../data/mockedData";

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
  const product = mockedProducts.find((product) => product.id === params.id) as
    | Product
    | undefined;

  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Lägg till en state för att hantera varukorgens öppenhetsstatus

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product: Product) => {
    console.log("Cart before adding product:", cart);
    setCart([...cart, product]);
    console.log("Cart after adding product:", cart);
  };

  if (!product) {
    return (
      <>
        <ProductContainer>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={"/products/" + product.id}>
                <ProductImage src={product.image} alt="productimage" />
                <p>{product.title}</p>
                <p>{product.price} :-</p>
              </Link>
              <LikeButton />
              <button onClick={() => addToCart(product)}>Köp</button>
            </ProductCard>
          ))}
        </ProductContainer>
        {/* <Cart isOpen={isCartOpen} toggle={toggleCart} cart={cart} /> */}
      </>
    );
  }
  return (
    <div>
      <ProductView product={product}></ProductView>
    </div>
  );
}

export default ProductPage;
