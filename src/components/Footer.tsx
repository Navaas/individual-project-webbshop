import styled from "styled-components";

const FooterContainer = styled.div`
  background: #ede4dd;
  color: black;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 3.5rem;
  width: 100%;
  text-align: center;
  z-index: 999;
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <p style={{ margin: 0 }}>Copyright by: Michaela Andreasson</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
