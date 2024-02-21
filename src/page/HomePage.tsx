import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../image/background1.jpeg";
import image from "../image/start.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const TextContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  flex-direction: column;
  color: black;
  align-items: center;
  border: black solid 1px;
  flex: 1;
  width: 100%;
`;

const TextWrapper = styled.div`
  background: white;
  color: black;
`;

const ButtonContainer = styled.div`
  color: white;
  align-items: center;
  flex-direction: row;
  border: red solid 1px;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
`;

const StyledImage = styled.img`
  width: 20%;
  height: 40%;
  object-fit: cover; /* Anpassa storleken på bilden utan att förvränga den */
  border-top-left-radius: 999px; /* Runda bara de övre vänstra hörnen */
  border-top-right-radius: 999px;
`;

function Homepage() {
  return (
    <Container>
      <TextContainer>
        <h1>HomePage</h1>
        <TextWrapper>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta id,
            ab illo dicta cumque ipsa unde culpa quae mollitia dolorum error
            eius excepturi dolorem, iusto libero quaerat praesentium illum? At.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste eaque deserunt neque obcaecati aliquam ea dolores non optio
            recusandae unde fugit ullam quaerat nulla placeat in, amet, quod
            veniam.
          </p>
        </TextWrapper>
      </TextContainer>
      <ButtonContainer>
        <ImageWrapper>
          <StyledImage src={image} alt="My Image" />
          <StyledImage src={image} alt="My Image" />
          <StyledImage src={image} alt="My Image" />
          <div>
            <Link to="productPage">
              <button>Till produkter</button>
            </Link>
            <Link to="productPage">
              <button>Till produkter</button>
            </Link>
            <Link to="productPage">
              <button>Till produkter</button>
            </Link>
          </div>
        </ImageWrapper>
      </ButtonContainer>
    </Container>
  );
}

export default Homepage;
