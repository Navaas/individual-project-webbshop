import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../image/background.jpg";

const Container = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  column-gap: 30px;
  position: absolute;
  bottom: 150px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    position: static;
    bottom: auto;
  }
`;

const Box = styled.div`
  background: white;
  border: solid 1px black;
  width: 200px;
  height: 150px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  z-index: 1;
  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
  }
`;

function Homepage() {
  return (
    <Container>
      <TextWrapper>
        <h1>HomePage</h1>
      </TextWrapper>
      {/* {mockedProducts.map((product) => (
        <Link key={product.id} to={"/productPage/" + product.id}>
          {product.title}
        </Link>
      ))} */}

      <BoxContainer>
        <Box>
          {" "}
          <Link to="productPage">
            <button>Till produkter</button>
          </Link>
        </Box>
        <Box>
          {" "}
          <Link to="productPage">
            <button>Till produkter</button>
          </Link>
        </Box>
        <Box>
          {" "}
          <Link to="productPage">
            <button>Till produkter</button>
          </Link>
        </Box>
      </BoxContainer>
    </Container>
  );
}

export default Homepage;
