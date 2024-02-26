import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";
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
