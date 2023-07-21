import React from "react";
import Card from "react-bootstrap/Card";
import "./ListingCard.css";

function ListingCard({ listing }) {
  const { image_url, title } = listing;

  return (
    <div style={{ margin: "5px" }}>
      <Card style={{ width: "20rem" }} className="m-auto">
        <Card.Body>
          <div>
            <Card.Img
              className="imgStyle mb-1"
              variant="top"
              src={image_url}
              alt={title}
            ></Card.Img>
          </div>
          <Card.Title className="mt-2">{title}</Card.Title>
          <Card.Text>
            Stay here at ${listing.price_per_night} per night
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListingCard;
