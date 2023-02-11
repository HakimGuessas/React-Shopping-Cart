import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "./formatcurrency";
import IMG1 from '../images/book.jpg'
import IMG2 from '../images/computer.jpg'
import IMG3 from '../images/banana.jpg'
import IMG4 from '../images/car.jpg'

const CartItem = ({ id, quantity }) => {

  const storeItems = [
    {
      id: 1,
      name: "Book",
      price: 10,
      imgUrl: IMG1
    },
    {
      id: 2,
      name: "Computer",
      price: 400,
      imgUrl: IMG2
    },
    {
      id: 3,
      name: "Banana",
      price: 1.5,
      imgUrl: IMG3
    },
    {
      id: 4,
      name: "Car",
      price: 10000,
      imgUrl: IMG4
    }
  ]
  const { removeItemFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) {
    return null;
  }
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center mb-2"
    >
      <img
        src={item.imgUrl}
        alt="Product image"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" x"}
              {quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
