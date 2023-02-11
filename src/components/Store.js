import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import IMG1 from "../images/book.jpg"
import IMG2 from "../images/computer.jpg"
import IMG3 from "../images/banana.jpg"
import IMG4 from "../images/car.jpg"

function Store() {

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
  return (
    <Fragment>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Store;