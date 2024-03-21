import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../../Context/Cart";
import { Link } from "react-router-dom";
import ProductData, { Product } from "./Content";

function Body() {
  const { addToCart } = useCart() || {};

  function HandleSubmit(product: Product) {
    if (addToCart) {
      addToCart(JSON.stringify(product));
    }
  }
  return (
    <div className="card-container d-flex flex-wrap">
      {ProductData.map((product: Product, index: number) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h3 className="card-text">{product.price}</h3>
            <Link
              to={`cart/${index}`}
              className="d-flex btn btn-primary justify-content-center"
              onClick={() => HandleSubmit(product)}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
