import React, { useState, useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";

function ListingForm({ addListing }) {
  const [formData, setFormData] = useState({});
  const user = useContext(userContext);
  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target;
    if (input.type === "file") {
      setFormData((formData) => ({
        ...formData,
        [input.name]: input.files[0],
      }));
    } else {
      setFormData((formData) => ({
        ...formData,
        [input.name]: input.value,
      }));
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newListing = await addListing(formData);
    navigate("/");
  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4 p-4">
      <h2 className="mb-3">Create A Listing</h2>
      <section className="text-start">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  maxLength="40"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="details"
                  className="form-control"
                  value={formData.Details}
                  onChange={handleChange}
                  placeholder="Description on the property"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="street"
                  className="form-control"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Street"
                  maxLength="50"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  maxLength="30"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="state"
                  className="form-control"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State (e.g., CA)"
                  maxLength="2"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="zip"
                  className="form-control"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Zipcode (e.g., 91384)"
                  maxLength="5"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country (e.g., USA)"
                  maxLength="3"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="price_per_night"
                  className="form-control"
                  value={formData.price_per_night}
                  onChange={handleChange}
                  placeholder="Price Per Night (e.g., 99)"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={user.username}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="d-grid">
                <button className="btn btn-dark">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingForm;
