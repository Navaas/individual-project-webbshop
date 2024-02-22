import { Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "../image/image.png";

const Container = styled.div`
  background: #f1edea;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 120vh;
  @media (max-width: 768px) {
    height: 155vh;
  }
  @media (max-width: 480px) {
    height: 200vh;
  }
`;

const TextContainer = styled.div`
  flex-direction: row;
  color: black;
  text-align: center;
  margin-top: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Text = styled.div`
  /* border: solid 1px black; */
  width: 100%;
  margin-top: 30px;
`;

const Image = styled.div`
  /* border: solid 1px red; */
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 50%;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 60%;
  }
`;

const StyledImageHomeSide = styled.img`
  width: 80%;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  background: #f1edea;
`;

const ProductButton = styled.button`
  width: 150px;
  padding: 10px;
  text-transform: uppercase;
  @media (max-width: 480px) {
    padding: 7px;
  }
`;

const ImageContainer = styled.div`
  flex-direction: row;
  color: black;
  text-align: center;
  border-top: black solid 1px;
  margin-top: 100px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const ProductImage = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

function Homepage() {
  return (
    <Container>
      <TextContainer>
        <Text>
          <p>
            "Vi älskar affischer! Upptäck vårt noggrant utvalda sortiment av
            fantastiska tryck, var och en handplockad för att lägga till en
            touch av konstnärlighet och stil i ditt utrymme. Från fängslande
            landskap till tankeväckande designer, hitta den perfekta affischen
            för att uttrycka din unika personlighet och lyfta din heminredning."
          </p>
          <div>
            <ProductButton>Shoppa nu</ProductButton>
          </div>
        </Text>
        <Image>
          <StyledImageHomeSide src={image1} alt="" />
        </Image>
      </TextContainer>

      <ImageContainer>
        <ProductImage>
          <p>
            <StyledImage
              src="https://images.desenio.com/zoom/2562_2-23931.jpg?_gl=1*4esxnv*_ga*ODY4MDk3NTgwLjE3MDg2MDY1NDE.*_ga_GH3FS7X5TH*MTcwODYwNjU0MS4xLjEuMTcwODYwODM1My4wLjAuMA.."
              alt="My Image"
            />
          </p>
          <div>
            <Link to={"/ProductPage"}>
              <ProductButton>Shoppa nu</ProductButton>
            </Link>
          </div>
        </ProductImage>
        <ProductImage>
          <p>
            <StyledImage
              src="https://images.desenio.com/zoom/2562_2-23931.jpg?_gl=1*4esxnv*_ga*ODY4MDk3NTgwLjE3MDg2MDY1NDE.*_ga_GH3FS7X5TH*MTcwODYwNjU0MS4xLjEuMTcwODYwODM1My4wLjAuMA.."
              alt="My Image"
            />
          </p>
          <div>
            <Link to={"/ProductPage"}>
              <ProductButton>Shoppa nu</ProductButton>
            </Link>
          </div>
        </ProductImage>
        <ProductImage>
          <p>
            <StyledImage
              src="https://images.desenio.com/zoom/2562_2-23931.jpg?_gl=1*4esxnv*_ga*ODY4MDk3NTgwLjE3MDg2MDY1NDE.*_ga_GH3FS7X5TH*MTcwODYwNjU0MS4xLjEuMTcwODYwODM1My4wLjAuMA.."
              alt="My Image"
            />
          </p>
          <div>
            <Link to={"/ProductPage"}>
              <ProductButton>Shoppa nu</ProductButton>
            </Link>
          </div>
        </ProductImage>
      </ImageContainer>
    </Container>
  );
}

export default Homepage;
