import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../data/mockedData";

const Button = styled.button`
  background: #ede4dd;
  width: 70px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  text-transform: uppercase;
  transition-duration: 0.6s;
  &:hover {
    background: #dcc6b8;
  }
`;

interface Props {
  product: Product;
}

function BuyButton(props: Props) {
  const setCart = useOutletContext<Dispatch<SetStateAction<Product[]>>>();

  const addToCart = (product: Product) => {
    setCart((cart) => [...cart, product]);
  };

  return <Button onClick={() => addToCart(props.product)}>Köp</Button>;
}

export default BuyButton;
