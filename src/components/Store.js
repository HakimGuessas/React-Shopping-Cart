import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import storeItmes from "../data/storeItems.json";
import StoreItem from "./StoreItem";

function Store() {
  const products = [
    
  ];
  return (
    <Fragment>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItmes.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Store;
