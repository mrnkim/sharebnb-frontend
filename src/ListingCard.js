import React from "react";
import Card from "react-bootstrap/Card";

function ListingCard({ listing }) {
  const { image_url, title } = listing;
  return (
    <div style={{ margin: "5px" }}>
      <Card style={{ width: "15rem" }} className="m-auto">
        <Card.Body>
          <div>
            <Card.Img variant="top" src={image_url} alt={title}></Card.Img>
          </div>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListingCard;
