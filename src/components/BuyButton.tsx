import { useState } from "react";
import styled from "styled-components";
import { Product } from "../data/mockedData";

const Button = styled.button`
  width: 100px;
  background: #f1edea;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  &:hover {
    background-color: lightgrey;
  }
`;

function BuyButton() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log("Cart before adding product:", cart);
    setCart([...cart, product]);
    console.log("Cart after adding product:", cart);
  };

  return (
    <div>
      <Button onClick={() => addToCart(product)}>Köp</Button>
    </div>
  );
}

export default BuyButton;
