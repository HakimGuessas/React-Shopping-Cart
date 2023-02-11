import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

function Store() {
  const products = [
    {
      id: 1,
      name: "Book",
      price: 10,
      imgUrl: "/imgs/book.jpg",
    },
    {
      id: 2,
      name: "Computer",
      price: 400,
      imgUrl: "/imgs/computer.jpg",
    },
    {
      id: 3,
      name: "Banana",
      price: 1.5,
      imgUrl: "/imgs/banana.jpg",
    },
    {
      id: 4,
      name: "Car",
      price: 10000,
      imgUrl: "../imgs/car.jpg",
    },
  ];
  return (
    <Fragment>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Store;
