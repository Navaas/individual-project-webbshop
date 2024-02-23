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
  height: 100%;
  color: black;
  padding: 10px;
`;

const ProductContainer = styled.div`
  grid-gap: 20px;
  list-style: none;
`;

// Definiera en komponent för varje produkt
const ProductItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 5px;
`;

// Definiera en komponent för bilderna
const CartImage = styled.img`
  width: 75%;
  max-width: 200px;
`;

const Item = styled.div`
  width: 200px;
  margin-top: 5px;
  text-align: center;
`;

const InputField = styled.input`
  width: 40px;
  margin-right: 10px;
  text-align: center;
`;

function Cart({ isOpen, toggle, cart }: CartProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggle} />
      <CartContainer isOpen={isOpen}>
        <CartContent>
          <p>Dina varor:</p>
          <ProductContainer>
            {cart.map((product) => (
              <ProductItem key={product.id}>
                <Item>
                  <CartImage src={product.image} alt={product.title} />
                </Item>
                <Item>
                  {product.title}
                  <div>
                    <InputField type="number" min="1" />
                  </div>
                </Item>
                <Item>{product.price} Kr</Item>
                <div>
                  <span className="material-symbols-outlined">delete</span>
                </div>
              </ProductItem>
            ))}
          </ProductContainer>
        </CartContent>
      </CartContainer>
    </>
  );
}

export default Cart;
