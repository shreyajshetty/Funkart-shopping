import { useParams } from "react-router-dom";
import { useCart } from "../Context/Cart";
import ProductData from "./Body/Content";

const AddCart = () => {
  const params = useParams<{ productId: string }>();
  const productId = params.productId;
  const { removeCart, clearCart } = useCart() || {};

  const handleRemoveFromCart = () => {
    if (removeCart && productId) {
      removeCart([productId]);
    }
  };

  const handleClearCart = () => {
    if (clearCart) {
      clearCart();
    }
  };

  const product = productId ? ProductData[parseInt(productId)] : null;
  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div className="card-container d-flex  flex-wrap">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h3 className="card-text">{product.price}</h3>
          <button
            className="btn btn-danger justify-content-center"
            onClick={handleRemoveFromCart}
          >
            Remove Cart
          </button>
        </div>
        <button
          className="btn btn-danger justify-content-center"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default AddCart;
