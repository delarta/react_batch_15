import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, ListGroup, Button } from "reactstrap";
import CartItem from "../CartItem";
import { checkout } from "../../store/actions/cart";
import { updateStock } from "../../store/actions/products";

export default function Cart() {
  const cart = useSelector(({ cart }) => cart.data);
  const totalPrice = useSelector(({ cart }) => cart.totalPrice);

  const dispatch = useDispatch();

  console.log(cart)

  const handleCheckout = () => {
    dispatch(updateStock(cart));
    dispatch(checkout());
  };
  return (
    <Card className="mt-5">
      <CardBody>
        <h1>Your cart</h1>
        <ListGroup>
          {cart && cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </ListGroup>

        <hr />

        <h3>Total payment: {totalPrice}</h3>

        <Button
          onClick={() => handleCheckout()}
          color="danger"
          block
          className="mt-5"
        >
          Checkout
        </Button>
      </CardBody>
    </Card>
  );
}
