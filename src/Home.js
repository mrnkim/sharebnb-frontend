import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import ShareBnBApi from "./api";
import SearchForm from "./SearchForm";
import "./Home.css";
/** Home component.
 *
 * RouteList -> Home
 *
 * Renders home page with background
 */

function Home({ listings, handleSearch }) {
  //   const user = useContext(userContext);
  //   const navigate = useNavigate();

  //   function redirectToLogIn() {
  //     navigate("/login");
  //   }
  //   function redirectToSignUp() {
  //     navigate("/signup");
  //   }

  return (
    <div className="background">
      <div>
        {/* <SearchForm handleSearch={handleSearch} /> */}
        <h1 className="displayText">Find Your Dream Space In Nature 🌲</h1>
      </div>
      <div className="listings">
        {listings &&
          listings.map((l) => (
            <Link to={`/listings/${l.id}`}>
              {" "}
              <ListingCard key={l.id} listing={l} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
