import React from "react";
import { Card } from "react-bootstrap";
import Data from "./Data";

const RightChild = ({ id }) => {
  // You can fetch the item data based on the id from the Data array or API here
  const item = Data.find((item) => item.id === id);

  return (
    <div className="right-child">
      {item && (
        <Card>
          <Card.Body>
            <Card.Title>{item.Name}</Card.Title>
            <Card.Text>Price: Rs. {item.Price}</Card.Text>
            <Card.Text>Item Id: {item.id}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default RightChild;
