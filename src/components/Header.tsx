import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";

const HeaderDiv = styled.header`
  background: #ede4dd;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  background: black;
  color: white;
  width: 100px;
`;

const CartIcon = styled.span`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const toogle = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <HeaderDiv>
      <ButtonWrapper>
        <Link to="/">
          <Button>Hem</Button>
        </Link>
      </ButtonWrapper>

      <CartWrapper>
        <Cart isOpen={cartOpen} toggle={toogle} cart={[]} />
        {/* Lägg till Cart-komponenten här */}
        <CartIcon onClick={toogle} className="material-symbols-outlined">
          shopping_cart
        </CartIcon>
      </CartWrapper>
    </HeaderDiv>
  );
}

export default Header;
