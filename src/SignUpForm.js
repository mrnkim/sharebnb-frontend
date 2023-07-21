import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ handleSignUp }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isHost: "",
  });

  /** Handle form submit:
   *
   * Calls login func prop and, if not successful, sets errors.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await handleSignUp(formData);
    navigate("/");
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="SignupForm col-md-6 col-lg-4 offset-md-3 offset-lg-4 p-4">
      <h2 className="mb-3">Sign Up</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
              <input
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <input
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Are You Host?</label>
              <select
                name="isHost"
                className="form-control"
                value={formData.isHost}
                onChange={handleChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="d-grid">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
