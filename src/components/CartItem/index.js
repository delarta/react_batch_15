import React from "react";
import { ListGroupItem, Button } from "reactstrap";
import { increaseItem, decreaseItem } from "../../store/actions/cart";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increaseItem(item.id));
  };

  const handleSubstract = () => {
    dispatch(decreaseItem(item.id));
  };

  return (
    <ListGroupItem>
      <div>
        <h3>{item.name}</h3>
        <p>$ {item.price}</p>
      </div>
      <div>
        <Button onClick={() => handleSubstract()} color="primary">
          -
        </Button>
        <span className="mx-2">{item.totalItem}</span>
        <Button onClick={() => handleAdd()} color="primary">
          +
        </Button>
      </div>
    </ListGroupItem>
  );
}
