import styled from "styled-components";

/* Interface berättar hur en produkt ser ut. */
interface ProductProps {
  product: {
    title: string;
    price: number;
    image: string;
    description: string;
  };
}

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const SingleProduct = styled.div`
  border: solid black 1px;
  text-align: center;
  height: 70%;
  width: 20%;
`;

const SingleProductImage = styled.img`
  height: 50%;
`;

function ProductView(props: ProductProps) {
  /* Sätter title, price och image till en variabel */
  const { title, price, image, description } = props.product;

  /* TVÅ OLIKA SÄTT ATT FÅ UT PRODUKTEN */
  /* Använd antingen props.product.image */
  /* Bara {title}, {price} {image} */

  return (
    <Product>
      <SingleProduct>
        <h1>ProductView</h1>
        <SingleProductImage src={props.product.image} alt="Product" />
        {/* Bara props */}
        <p>{props.product.title}</p>
        <p>{price}</p>
        <p>{description}</p>
        {/* Med variabel */}
      </SingleProduct>
    </Product>
  );
}

export default ProductView;
