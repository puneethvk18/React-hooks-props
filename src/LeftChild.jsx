import React from "react";
import { Dropdown } from "react-bootstrap";

const LeftChild = ({ data, selectedId, onItemClick }) => {
  return (
    <div className="left-child">
      <Dropdown onSelect={(eventKey) => onItemClick(Number(eventKey))}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          List of items
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data.map((item) => (
            <Dropdown.Item key={item.id} eventKey={item.id} active={selectedId === item.id}>
              {item.Name}
              <br></br>
              <br />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LeftChild;
