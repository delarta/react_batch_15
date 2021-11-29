import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import Cart from "./components/Cart";
import ProductItem from "./components/ProductItem";
import "./sass/main.scss";

function App() {
  const products = useSelector(({ products }) => products.data);

  return (
    <div>
      <Container className="py-5">
        <div className="main__container">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              // setCart={setCart}
            />
          ))}
        </div>

        <div className="cart__container">
          <Cart />
        </div>
      </Container>
    </div>
  );
}

export default App;
