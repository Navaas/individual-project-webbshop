import { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centrera länkarna i mitten för mobilvisning */
  }
`;

const List = styled.li`
  float: left;
  /* border: 1px solid black; */
  padding: 15px;
  margin: 5px;
  &:hover {
    text-decoration: underline;
    color: grey;
  }
  /* Dölj länkarna i menyn för mobilvisning */
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenuIcon = styled.div`
  display: none;

  /* Visa hamburgermenyikonen för mobilvisning */
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const HamburgerMenu = styled.div`
  /* Dölj hamburgermenyn som standard */
  display: none;
`;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarContainer>
        <Ul>
          <List>Nyheter</List>
          <List>Posters</List>
          <List>Canvas</List>
          <List>Topplistan</List>
        </Ul>
      </NavbarContainer>
      <HamburgerMenuIcon>
        <span
          className="material-symbols-outlined"
          onChange={() => setIsOpen(!isOpen)}
        >
          menu
        </span>
      </HamburgerMenuIcon>
      <HamburgerMenu>
        <Ul>
          <List>Nyheter</List>
          <List>Posters</List>
          <List>Canvas</List>
          <List>Topplistan</List>
        </Ul>
      </HamburgerMenu>
    </>
  );
}

export default NavigationBar;
