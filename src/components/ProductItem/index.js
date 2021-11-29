import React from "react";
import { Button, Card, CardBody, CardImg } from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart, setTotalPrice } from "../../store/actions/cart";

export default function ProductItem({
  product: { id, name, price, image, stock },
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({ id, name, price, image, stock, totalItem: 1 }));
    dispatch(setTotalPrice(price));
  };
  return (
    <Card>
      <CardBody>
        <CardImg src={image} />
        <h2>{name}</h2>
        <p>$ {price}</p>
        <p>Stock: {stock} </p>
        <Button onClick={() => handleClick()} block color="primary">
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
}
