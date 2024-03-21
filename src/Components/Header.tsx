import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../Context/Cart";
import { Link } from "react-router-dom";
interface Props {
  color: string;
}

const blueStyle: React.CSSProperties = {
  color: "blue",
};

const Header: React.FC<Props> = () => {
  const { addToCart } = useCart() || {};

  const addToCartFunction =
    typeof addToCart === "function" ? addToCart : () => {};

  return (
    <div className=" container-fluid">
      <div className="card">
        <div className="card-body d-flex align-items-center w-100 ">
          <h1>
            Fun<b style={blueStyle}>Kart</b>
          </h1>

          <form className=" d-flex ms-5 ps-5" role="search">
            <input
              className="form-control p-2 ms-2 me-2"
              style={{ width: "450px" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="justify-content-end">
            <Link to="cart" onClick={() => addToCartFunction("cart-symbol")}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
                height="30"
                width="30"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
