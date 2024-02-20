import { ReactNode } from "react";
import styled from "styled-components";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  product?: {
    title: string;
    price: number;
    image: string;
  };
}

const OverlayContainer = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  display: block;
  background: white;
  width: 70%;
  height: 70%;
  padding: 1rem;
  border-radius: 1rem;
`;

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <OverlayContainer onClick={props.toggle}>
          <ModalBox className="modal-box">
            {props.children}
            {props.product && (
              <>
                <h2>{props.product.title}</h2>
                <p>{props.product.price}</p>
                <img src={props.product.image} alt="testimage" />
                {/* Add more details here as needed */}
              </>
            )}
            {props.children}
          </ModalBox>
        </OverlayContainer>
      )}
    </>
  );
}
