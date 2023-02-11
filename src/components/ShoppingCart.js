import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "./formatcurrency";

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();

  const storeItem = [
    {
      id: 1,
      name: "Book",
      price: 10,
    },
    {
      id: 2,
      name: "Computer",
      price: 400,
    },
    {
      id: 3,
      name: "Banana",
      price: 1.5,
    },
    {
      id: 4,
      name: "Car",
      price: 10000,
    },
  ];
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItem.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
        <span></span>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
