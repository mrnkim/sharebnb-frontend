import React, { useEffect, useState } from "react";
import ShareBnBApi from "./api";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import "./ListingDetail.css";

function ListingDetail() {
  const { id } = useParams();

  const [listing, setListing] = useState(null);

  useEffect(function loadCompaniesFromAPI() {
    async function fetchCompany() {
      const response = await ShareBnBApi.getListing(id);
      console.log("RESPONSE", response);
      setListing(response);
    }
    fetchCompany();
  }, []);

  if (!listing) return <i>Loading...</i>;

  return (
    <Container className="p-3">
      <Card style={{ width: "40rem" }} className="m-auto p-3">
        <Card.Body>
          <Card.Img
            variant="top"
            src={listing.image_url}
            alt={listing.title}
          ></Card.Img>

          <Card.Title className="p-3">Address</Card.Title>

          <Card.Text>
            <div className="left-align">
              {listing.street} {listing.zip} {listing.city} {listing.state}{" "}
              {listing.country}
            </div>
          </Card.Text>
          <Card.Title>Information</Card.Title>

          <Card.Text className="text-center">
            <div className="left-align">Description: {listing.details}</div>
            <div className="left-align">
              Price Per Night: ${listing.price_per_night}
            </div>
            <div className="left-align">Host: {listing.username}</div>
          </Card.Text>
        </Card.Body>
        <Button variant="dark" href="/">
          Back to All Listings
        </Button>
      </Card>
    </Container>
  );
}

export default ListingDetail;
