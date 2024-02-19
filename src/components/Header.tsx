import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  width: 100px;
`;
const HeaderDiv = styled.header`
  background: grey;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderDiv>
      <Link to="/">
        <Button>Hem</Button>
      </Link>
      <h1>Hello from Header</h1>
    </HeaderDiv>
  );
}

export default Header;
