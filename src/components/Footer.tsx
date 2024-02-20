import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  background: black;
  color: white;
  bottom: 0;
  height: 3.5rem;
  width: 100%;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Copyright by: Michaela Andreasson</p>
    </FooterContainer>
  );
}

export default Footer;
