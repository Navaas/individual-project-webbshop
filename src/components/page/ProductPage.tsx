import { useParams } from "react-router-dom";
import { mockedProducts } from "../../data/mockedData";

function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((product) => product.id === params.id);

  if (!product) {
    return (
      <div>
        <div>
          <h1>ProductPage</h1>
          {mockedProducts.map((product) => (
            <p>{product.title}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;
