import styled from "styled-components";

interface CartProps {
  isOpen: boolean;
  toggle: () => void;
  cart: Product[];
}

interface CartContainerProps {
  isOpen: boolean;
}

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  cursor: default;
`;

const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-350px")};
  background: white;
  width: 350px;
  height: 93vh;
  border-radius: 10px;
  margin-top: 30px;
  transition: right 0.3s ease-in-out;
  z-index: 999;
  color: white;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: black;
`;

const Title = styled.li`
  color: black;
`;

function Cart({ isOpen, toggle, cart }: CartProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggle} />
      <CartContainer isOpen={isOpen}>
        <CartContent>
          <h1>Cart</h1>
          <ul>
            {cart &&
              cart.map((product, index) => (
                <Title key={product.id}>
                  {product.title} {product.price}
                </Title>
              ))}
          </ul>
        </CartContent>
      </CartContainer>
    </>
  );
}

export default Cart;
