import styled from "styled-components";

interface CartProps {
  isOpen: boolean;
  toggle: () => void;
}

interface CartContainerProps {
  isOpen: boolean;
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
  cursor: default; /* eller cursor: pointer; beroende på ditt behov */
`;

const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-350px")};
  background: black;
  width: 350px;
  height: 100vh;
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
`;

function Cart({ isOpen, toggle }: CartProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggle} />
      <CartContainer isOpen={isOpen}>
        <CartContent>
          {/* Innehåll för varukorgen */}
          <h1>Cart</h1>
          {/* Eventuellt innehåll för varukorgen */}
        </CartContent>
      </CartContainer>
    </>
  );
}

export default Cart;
